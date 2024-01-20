import { SimpleGrid, Box, Text, Spinner, Flex } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Item from "./Item";
import useSort from "./Sort";

const ItemGrid = () => {

  const {order} = useSort();
  let sortedData

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
  if (!isLoading && data) {
     sortedData = [...data].sort((a, b) => {
        if (a[order] < b[order]) {
            return (order === "name")? -1:1 
        }
        if (a[order] > b[order]) {
          return (order === "name")? 1:-1 
        }
        return 0;
    });
    // Use sortedData as needed
}

  return (
    <SimpleGrid
      maxWidth="1100px"
      mx="auto"
      padding={10}
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={10}
    >
      {sortedData?.map((item) => (
        <ItemCard key={item._id} item={item}></ItemCard>
      ))}
    </SimpleGrid>
  );
};

export default ItemGrid;
