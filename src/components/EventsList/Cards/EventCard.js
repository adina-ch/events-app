import { useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Menu, MenuItem, Paper, Typography } from "@mui/material";
import { IconButton, ListItemIcon, ListItemText } from "@mui/material";

import "./../styles.scss";

const EventCard = ({
  eventItem,
  handleShowDetails,
  handleDeleteEvent,
  active,
}) => {
  const { title, date, startTime, endTime, description, id } = eventItem;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={1}
      className={`card card-actions-parent ${active === id ? "active" : null}`}
    >
      <div className="card-actions">
        <IconButton onClick={handleClick}>
          <MoreHorizIcon
            color="primary"
            aria-controls={open ? "basic-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
          />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              handleShowDetails();
              handleClose();
            }}
          >
            <ListItemIcon>
              <InfoOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Show details</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <EditOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleDeleteEvent();
              handleClose();
            }}
          >
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      <Typography variant="h6">{title}</Typography>

      <Typography variant="body2" className="margin">
        {date}, {startTime} - {endTime}
      </Typography>

      <Typography variant="body2" noWrap>
        {description}
      </Typography>
    </Paper>
  );
};

export default EventCard;
