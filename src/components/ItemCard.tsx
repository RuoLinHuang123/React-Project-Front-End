import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import Item from "./Item";

interface Props {
  item: Item;
}
const ItemCard = ({ item }: Props) => {
  return (
    <Card borderRadius={20} overflow='hidden' cursor="pointer" transition="all 0.2s" _hover={{ bg: "gray.100" ,transform: "scale(1.03)"}}>
      <Image src={item.picUrl} />
      <CardBody>
        <Flex justifyContent="center">
          <Heading>{item.name}</Heading>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
