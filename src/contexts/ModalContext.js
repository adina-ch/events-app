import { createContext, useContext, useState } from "react";

import { EventsContext } from "../EventsContext";

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

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const { removeEvent, selectedEvent, setSelectedEvent } =
    useContext(EventsContext);
  const [openModal, setOpenModal] = useState(false);
  const [idToBeDeleted, setIdToBeDeleted] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRemoveEvent = () => {
    removeEvent(idToBeDeleted);
    setOpenModal(false);

    if (selectedEvent && selectedEvent.id === idToBeDeleted) {
      setSelectedEvent(null);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        setOpenModal,
        handleRemoveEvent,
        setIdToBeDeleted,
      }}
    >
      {children}
      <div>
        <Dialog
          open={openModal}
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
