import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { Button, Divider, Drawer, Tab, Tabs, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const drawerWidth = 200;

const Sidebar = () => {
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const pathName = window.location.pathname;
    if (pathName === "/" && activeValue !== 0) {
      setActiveValue(0);
    } else if (pathName === "/add" && activeValue !== 1) {
      setActiveValue(1);
    }
  }, [activeValue]);

  const activeValueHandler = (e, value) => {
    setActiveValue(value);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Button component={NavLink} to="/" sx={{ padding: "1.1em" }}>
        <Typography variant="h6">LOGO</Typography>
      </Button>
      <Divider />

      <Tabs
        orientation="vertical"
        indicatorColor="white"
        value={activeValue}
        onChange={activeValueHandler}
      >
        <Tab
          label="Events"
          icon={<CalendarTodayIcon sx={{ fontSize: 35 }} />}
          component={NavLink}
          to="/"
          sx={{ padding: "1em" }}
        />
        <Tab
          label="Add"
          icon={<AddRoundedIcon sx={{ fontSize: 35 }} />}
          component={NavLink}
          to="/add"
          sx={{ padding: "1em" }}
        />
      </Tabs>
    </Drawer>
  );
};

export default Sidebar;
