import { SimpleGrid, Box, Text, Spinner, Flex } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Item from "./Item";

const ItemGrid = () => {
  const { data, error, isLoading } = useQuery<Item[], Error>({
    queryKey: ["items"],
    queryFn: () =>
      axios
        .get<Item[]>("http://localhost:3000/api/items")
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
    <SimpleGrid
      maxWidth="1100px"
      mx="auto"
      padding={10}
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={10}
    >
      {data?.map((item) => (
        <ItemCard key={item.id} item={item}></ItemCard>
      ))}
    </SimpleGrid>
  );
};

export default ItemGrid;
