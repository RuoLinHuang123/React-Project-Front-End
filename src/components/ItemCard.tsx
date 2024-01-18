import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import Item from "./Item";

interface Props {
  item: Item;
}
const ItemCard = ({ item }: Props) => {
  return (
    <Card>
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
