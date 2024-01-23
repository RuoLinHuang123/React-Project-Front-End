import { Flex } from "@chakra-ui/react";
import NavTitle from "./NavTitle";
import Navmenu from "./Navmenu";

export const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      padding="10px"
      borderBottom="1px"
      borderColor="rgba(255, 255, 255, 0.2)"
    >
      <Navmenu></Navmenu>
      <Flex width="100%" justifyContent="center">
        <NavTitle />
      </Flex>
    </Flex>
  );
};

export default NavBar;
