import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import useSort from "./Sort";

const NavMenu = () => {
  const { order, setOrder } = useSort();

  const handleMenuClick = (value: "name" | "mass") => {
    setOrder(value);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Sort
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleMenuClick("name")}>
          <Box>Name</Box>
          {order === "name" && <Box marginLeft="auto">(Selected)</Box>}
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("mass")}>
          <Box>Mass</Box>
          {order === "mass" && <Box marginLeft="auto">(Selected)</Box>}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
