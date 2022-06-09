import { useContext } from "react";

import { EventsContext } from "../../EventsContext";

import { NavLink } from "react-router-dom";

import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import styles from "./Sidebar.module.scss";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { DRAWER_WIDTH } from "../../utils/utils";

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeRouteValue, setActiveRouteValue } = useContext(EventsContext);

  const activeValueHandler = (e, newValue) => {
    setActiveRouteValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Button component={NavLink} to="/" className={styles.logo}>
        <Typography variant="h6" className={styles.logoText}>
          LOGO
        </Typography>
      </Button>
      <Divider />

      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={activeRouteValue}
        onChange={activeValueHandler}
      >
        <Tab
          label="Events"
          icon={<CalendarTodayIcon fontSize="large" />}
          component={NavLink}
          to="/"
          className={styles.menuItem}
        />
        <Tab
          label="Add"
          icon={<AddRoundedIcon fontSize="large" />}
          component={NavLink}
          to="/add"
          className={styles.menuItem}
        />
      </Tabs>
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
