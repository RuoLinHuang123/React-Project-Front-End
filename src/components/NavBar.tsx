import {Flex} from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import NavTitle from "./NavTitle";

export const NavBar = () => {
  return (
    <Flex alignItems="center" width="100%" maxWidth="1200px" mx="auto" padding='10px'>
      <NavMenu />
      <Flex width="100%" justifyContent="center">
        <NavTitle />
      </Flex>
    </Flex>
  );
};

export default NavBar;
