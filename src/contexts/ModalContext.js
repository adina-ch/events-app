import { createContext, useContext, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import styles from "./styles/modal.module.scss";
import { EventsContext } from "../EventsContext";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  // state
  // id of the item to be deleted -> initial null - updated from Event card when click on delete button
  // const [open, setOpen] = useState(false);
  const { removeEvent } = useContext(EventsContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveEvent = () => {
    // setOpen(false);
    console.log("remove event from modal");
    // removeEvent(id); ---> from events context
    // id updated form event card
  };

  return (
    <ModalContext.Provider
      value={{
        setOpen,
        handleClose,
        handleRemoveEvent,
        // handleRemoveEvent to events list to be called in handleDeleteEvent function
        // setOpen to be used in event card when clicked on delete icon
        // id of the item to be deleted updated by Event card when click on delete button
      }}
    >
      {children}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={styles.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle id="alert-dialog-title">Delete confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to delete the event? This action cannot be
              undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              CANCEL
            </Button>
            <Button
              onClick={handleRemoveEvent}
              autoFocus
              variant="contained"
              color="error"
            >
              DELETE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ModalContext.Provider>
  );
};
