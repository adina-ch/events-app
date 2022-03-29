import { AppBar, Avatar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar sx={{ marginLeft: "auto" }}>AC</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
