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
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const Itemdetailpage = () => {
  const { name } = useParams();

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
  if (isLoading || !data) {
    return (
      <Flex justifyContent="center">
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

  return (
    <Grid
      templateAreas={`"title title"
                  "img img"
                  "pro des"`}
      gridTemplateColumns={"1fr 2fr"}
      maxWidth="1200px"
      mx="auto"
      padding={10}
    >
      <GridItem mb="10" area={"title"}>
        <Flex justifyContent="center">
          <Heading>{data?.name}</Heading>
        </Flex>
      </GridItem>
      <GridItem mb="10" area={"img"}>
        <Image borderRadius="20" src={data?.detailPicUrl} alt="Picture"></Image>
      </GridItem>
      <GridItem area={"pro"}>
        <Heading fontSize='medium' marginBottom='3'>Properties</Heading>
        <UnorderedList>
          {Object.keys(data?.properties).map((key) => (
            <ListItem>
              {key}: {(data?.properties)[key]}
            </ListItem>
          ))}
        </UnorderedList>
      </GridItem>
      <GridItem area={"des"}>
        <Text>{data?.description}</Text>
      </GridItem>
    </Grid>
  );
};

export default Itemdetailpage;
