import { useContext, useState, useEffect } from "react";

import { ModalContext } from "../../../contexts/ModalContext";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Menu, MenuItem, Paper, Typography } from "@mui/material";
import { IconButton, ListItemIcon, ListItemText } from "@mui/material";

import {
  capitalizeWordFirstLetter,
  formatDate,
  formatHour,
} from "../../../utils/utils";

import styles from "../EventsList.module.scss";
import { useNavigate } from "react-router-dom";
import { EventsContext } from "../../../EventsContext";

const EventCard = ({ eventItem, handleShowDetails, active }) => {
  const { title, date, startTime, endTime, description, id } = eventItem;

  const { setEventIdToBeEdited } = useContext(EventsContext);
  const { setOpenModal, setIdToBeDeleted, updateModalContent } =
    useContext(ModalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDetailsVisibility = () => {
    handleShowDetails();
    handleClose();
  };

  const handleDelete = (id, title) => {
    setIdToBeDeleted(id);
    setOpenModal(true);
    updateModalContent(
      `Delete confirmation - ${capitalizeWordFirstLetter(title)}`,
      "Do you really want to delete this event? This action cannot be undone.",
      "CANCEL",
      "DELETE"
    );
    handleClose();
  };

  const handleEdit = (id) => {
    handleClose();
    setEventIdToBeEdited(id);

    navigate(`edit/${id}`);
  };

  return (
    <Paper
      elevation={1}
      className={`${styles.card} ${styles.cardPaper} ${
        active === id ? styles.active : null
      }`}
      onClick={handleShowDetails}
    >
      <div className={styles.cardActions}>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon
            color="primary"
            aria-controls={open ? "basic-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            fontSize="small"
          />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={(event) => {
            event.stopPropagation();
            handleClose();
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleDetailsVisibility}>
            <ListItemIcon>
              <InfoOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Show details</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={(event) => {
              handleEdit(id);
              event.stopPropagation();
            }}
          >
            <ListItemIcon>
              <EditOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={(event) => {
              event.stopPropagation();
              handleDelete(id, title);
            }}
          >
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      <Typography variant="h6">{capitalizeWordFirstLetter(title)}</Typography>

      <Typography variant="body2" className={styles.cardText}>
        {formatDate(date)}, {formatHour(startTime)} - {formatHour(endTime)}
      </Typography>

      <Typography variant="body2" noWrap>
        {description}
      </Typography>
    </Paper>
  );
};

export default EventCard;
