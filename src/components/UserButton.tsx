import { jwtDecode } from "jwt-decode";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useLoginPop from "./LoginPopState";
import Cookie from "js-cookie";
import axios, { AxiosError } from "axios";

const UserButton = () => {
  const { setPopState } = useLoginPop();
  const userToken = Cookie.get("User-Token");

  function handleLoginClick() {
    setPopState();
  }

  interface TokenPayload {
    _id: string;
    name: string;
    isAdmin: boolean;
  }

  let userName = "";
  let isAdmin = false;
  if (userToken) {
    const decodedToken = jwtDecode<TokenPayload>(userToken);
    userName = decodedToken.name;
    isAdmin = decodedToken.isAdmin;
  }

  function handleLogoutClick() {
    Cookie.remove("User-Token");
    window.location.reload();
  }

  async function handleUpgradeClick() {
    const response = await axios.post(
      `http://localhost:3000/api/updataToAdmin`,
      {},
      {
        headers: {
          "User-Token": `${userToken}`,
        },
      }
    );
    Cookie.set("User-Token", response.data.token, { expires: 7 });
    window.location.reload();
  }

  if (userToken) {
    return (
      <Menu>
        <MenuButton paddingRight="6" paddingLeft="4" as={Button}>
          {userName}
        </MenuButton>
        <MenuList>
          {isAdmin ? (
            <MenuItem>Admin</MenuItem>
          ) : (
            <MenuItem onClick={() => handleUpgradeClick()}>Upgrade to Admin</MenuItem>
          )}
          <MenuItem onClick={() => handleLogoutClick()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return <Button onClick={() => handleLoginClick()}>Login</Button>;
};

export default UserButton;
