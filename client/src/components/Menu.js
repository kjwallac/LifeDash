import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { API } from "../utils/API";

export default function SimpleMenu() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await API.getAllUsers();
    setUser(res.data.passport.user);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const links = (location) => {
    switch (location) {
      case "profiles":
        history.push(`/profiles/view/${user}`);
        break;
      case "account":
        history.push(`/account/${user}`);
        break;
      case "logout":
        history.push("/");
        API.logout();
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "white" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => links("profiles")}>Profiles</MenuItem>
        <MenuItem onClick={() => links("account")}>My account</MenuItem>
        <MenuItem onClick={() => links("logout")}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
