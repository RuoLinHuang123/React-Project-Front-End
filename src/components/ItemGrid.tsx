import { SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

const ItemGrid = () => {
  const item1 = {
    id: 1,
    name: "abc",
    picUrl:
      "https://wallpapers.com/images/featured-full/mars-3neacd8fivb67y1w.jpg",
  };
  const item2 = {
    id: 2,
    name: "abc",
    picUrl:
      "https://wallpapers.com/images/featured-full/mars-3neacd8fivb67y1w.jpg",
  };
  const item3 = {
    id: 3,
    name: "abc",
    picUrl:
      "https://wallpapers.com/images/featured-full/mars-3neacd8fivb67y1w.jpg",
  };
  const item4 = {
    id: 4,
    name: "abc",
    picUrl:
      "https://wallpapers.com/images/featured-full/mars-3neacd8fivb67y1w.jpg",
  };
  const items = [item1, item2, item3, item4];

  return (
    <SimpleGrid maxWidth="1100px" mx="auto" columns={3} spacing={10}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item}></ItemCard>
      ))}
    </SimpleGrid>
  );
};

export default ItemGrid;
