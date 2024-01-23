import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import Item from "./Item";
import { Link } from "react-router-dom";

interface Props {
  item: Item;
}
const ItemCard = ({ item }: Props) => {
  return (
    <Card
      borderRadius={20}
      overflow="hidden"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ bg: "rgba(255, 255, 255, 0.1)", transform: "scale(1.03)" }}
      backgroundColor="rgba(255, 255, 255, 0.05)"
    >
      <Image
        src={item.picUrl}
        objectFit="cover"
        height="100%"
        width="100%"
        opacity="0.95"
      />
      <CardBody>
        <Flex justifyContent="center">
          <Heading>
            <Link to={"/item/" + item.name}>{item.name}</Link>
          </Heading>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
