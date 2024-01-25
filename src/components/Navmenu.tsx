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
        <Link to='/submit'><MenuItem>Submit New Item</MenuItem></Link>
        <Link to='/submitDetail'><MenuItem>Submit Detail for Item</MenuItem></Link>
      </MenuList>
    </Menu>
  );
};

export default Navmenu;
