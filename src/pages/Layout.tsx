import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import UserModal from "../components/UserModal";

const Layout = () => {
  return (
    <Box
      background={`url(https://cdn.dribbble.com/users/2643208/screenshots/6809225/solar_system_2.gif)`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      minHeight="100vh"
    >
      <NavBar></NavBar>
      <UserModal></UserModal>
      <Outlet></Outlet>
    </Box>
  );
};

export default Layout;
