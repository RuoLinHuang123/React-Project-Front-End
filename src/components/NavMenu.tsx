import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />}></MenuButton>
      <MenuList>
        <MenuItem>Action One</MenuItem>
        <MenuItem>Action Two</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
