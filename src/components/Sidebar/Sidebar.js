import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { Button, Divider, Drawer, Tab, Tabs, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { DRAWER_WIDTH } from "../../utils/utils";

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
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <Button component={NavLink} to="/" className="padding">
        <Typography variant="h6">LOGO</Typography>
      </Button>
      <Divider />

      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={activeValue}
        onChange={activeValueHandler}
      >
        <Tab
          label="Events"
          icon={<CalendarTodayIcon sx={{ fontSize: 35 }} />}
          component={NavLink}
          to="/"
          className="padding"
        />
        <Tab
          label="Add"
          icon={<AddRoundedIcon sx={{ fontSize: 35 }} />}
          component={NavLink}
          to="/add"
          className="padding"
        />
      </Tabs>
    </Drawer>
  );
};

export default Sidebar;
