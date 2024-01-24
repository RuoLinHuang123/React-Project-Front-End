import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem><Link to='/submit'>Submit New Item</Link></MenuItem>
        <MenuItem><Link to='/submitDetail'>Submit Detail for Item</Link></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navmenu;
