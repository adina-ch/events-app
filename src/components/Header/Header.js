import { AppBar, Avatar, Toolbar } from "@mui/material";

import "./styles.scss";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar className="align-right">AC</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
