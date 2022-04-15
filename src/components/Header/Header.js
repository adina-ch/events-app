import { AppBar, Avatar, Toolbar } from "@mui/material";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar className={styles.rightAligned}>AC</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
