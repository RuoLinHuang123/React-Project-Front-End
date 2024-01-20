import { Flex } from "@chakra-ui/react";
import NavTitle from "./NavTitle";

export const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      padding="10px"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex width="100%" justifyContent="center">
        <NavTitle />
      </Flex>
    </Flex>
  );
};

export default NavBar;
