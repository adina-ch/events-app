import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  Avatar,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import styles from "./Sidebar.module.scss";

import { DRAWER_WIDTH } from "../../utils/utils";

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let activeClassName = `${styles.active} ${styles.link}`;
  let navLinkClassName = `${styles.link}`;

  const drawer = (
    <div>
      <Button component={NavLink} to="/" className={styles.logo}>
        <Typography variant="h6" className={styles.logoText}>
          LOGO
        </Typography>
      </Button>
      <Divider />

      <List className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClassName : navLinkClassName
          }
        >
          <ListItem disablePadding>
            <ListItemButton className={styles.linkContainer}>
              <CalendarTodayIcon fontSize="large" />
              <ListItemText>EVENTS</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? activeClassName : navLinkClassName
          }
        >
          <ListItem disablePadding>
            <ListItemButton className={styles.linkContainer}>
              <AddRoundedIcon fontSize="large" />
              <ListItemText>ADD</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar className={styles.rightAligned}>AC</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
