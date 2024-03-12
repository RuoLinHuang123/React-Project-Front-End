import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavTitle = () => {
  return <Text sx={{ caretColor: "transparent" }}><Link to={'/'}>Solar System Database</Link></Text>;
};

export default NavTitle;
