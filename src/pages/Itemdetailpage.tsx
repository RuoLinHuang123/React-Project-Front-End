import {
  Grid,
  Box,
  Text,
  Flex,
  Spinner,
  GridItem,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemDetail from "../components/ItemDetail";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Itemdetailpage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [delErr, setDelErr] = useState<string>("");

  const { data, error, isLoading } = useQuery<ItemDetail, Error>({
    queryKey: ["itemDetails", name],
    queryFn: () =>
      axios
        .get<ItemDetail>(`http://localhost:3000/api/itemDetails?name=${name}`)
        .then((res) => res.data),
  });

  if (error) {
    return (
      <Box textAlign="center">
        <Text fontSize="xl" color="red.500">
          Error loading items: {error.message}
        </Text>
      </Box>
    );
  }
  if (isLoading) {
    return (
      <Flex mt="10" justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  
  const onSubmit = async () => {
    try {
      const userToken = Cookies.get("User-Token");
      const response = await axios.delete(
        `http://localhost:3000/api/itemDelete?name=${name}`,
        {
          headers: {
            "User-Token": `${userToken}`,
          },
        }
      );
      // Handle success here, e.g., show a success message
      console.log("Success:", response.data);
      navigate("/");
    } catch (error) {
      const errobject = error as AxiosError;
      setDelErr(errobject.response?.data as string);
    }
  };

  return (
    <Grid
      templateAreas={{
        base: `"title"
             "img"
             "pro"
             "des"
             "del"`,
        md: `"title title"
           "img img"
           "pro des"
           "del del"`,
      }}
      gridTemplateRows={{ base: "auto auto auto", md: "auto auto auto" }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
      maxWidth="1200px"
      mx="auto"
      padding={10}
    >
      <GridItem mb="10" area={"title"}>
        <Flex justifyContent="center">
          <Heading sx={{ caretColor: "transparent" }}>{data?.name}</Heading>
        </Flex>
      </GridItem>
      <GridItem
        mb="10"
        display="flex"
        justifyContent="center"
        area={"img"}
        userSelect="none"
      >
        <Image
          borderRadius="20"
          w="70%"
          src={data?.detailPicUrl}
          alt="Picture"
        ></Image>
      </GridItem>
      <GridItem mb="10" mr="10" area={"pro"}>
        <Heading fontSize="medium" marginBottom="3">
          Properties
        </Heading>
        <UnorderedList>
          {data?.properties.map((element, index) => (
            <ListItem key={index}>
              <Flex justifyContent="space-between">
                <Text>{element.name + ":"}</Text>
                <Text>
                  {element.value}
                  {element.unit ? " " + element.unit : ""}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </UnorderedList>
      </GridItem>
      <GridItem mb="10" area={"des"}>
        <Text>{data?.description}</Text>
      </GridItem>
      <GridItem area={"del"}>
        <Flex direction="column" alignItems="flex-end">
          <Button onClick={onSubmit}>Delete</Button>
          <Text mt="5" color="red">
            {delErr}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Itemdetailpage;
