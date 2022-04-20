import { useContext } from "react";

import { EventsContext } from "../../EventsContext";

import { NavLink } from "react-router-dom";

import { Button, Divider, Drawer, Tab, Tabs, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { activeRouteValue, setActiveRouteValue } = useContext(EventsContext);

  const activeValueHandler = (e, newValue) => {
    setActiveRouteValue(newValue);
  };

  return (
    <Drawer variant="permanent">
      <Button component={NavLink} to="/" className={styles.menuItem}>
        <Typography variant="h6">LOGO</Typography>
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
    </Drawer>
  );
};

export default Sidebar;
