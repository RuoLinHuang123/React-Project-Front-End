import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useLoginPop from "./LoginPopState";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserButton = () => {
  const { setPopState } = useLoginPop();
  const userToken = Cookies.get('User-Token');

  interface Name {
    name: string;
  }

  const { data, error, isLoading } = useQuery<Name, Error>({
    queryKey: ["name"],
    queryFn: () =>
      axios
        .get<Name>("http://localhost:3000/api/userName", {
          headers: {
            // Include the token in the request headers
            'User-Token': `${userToken}`,
          },
        })
        .then((res) => res.data),
  });


  function handleLoginClick() {
    setPopState();
  }

  function handleLogoutClick() {
    Cookies.remove('User-Token');
    window.location.reload();
  }

  if (userToken) {
    if (isLoading || error){
      return <Button>Loading...</Button>;
    }
    return (
      <Menu>
        <MenuButton as={Button}>
          {data?.name}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleLogoutClick()} justifyContent='center'>Logout</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return <Button onClick={() => handleLoginClick()}>Login</Button>;
};

export default UserButton;