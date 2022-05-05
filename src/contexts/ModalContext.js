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
  const [modalContent, setModalContent] = useState({
    modalTitle: "",
    modalContent: "",
    cancelBtnText: "",
    deleteBtnText: "",
  });

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRemoveEvent = (event) => {
    event.stopPropagation();
    removeEvent(idToBeDeleted);
    setOpenModal(false);

    if (selectedEvent && selectedEvent.id === idToBeDeleted) {
      setSelectedEvent(null);
    }
  };

  const updateModalContent = (
    modalTitle,
    modalText,
    cancelBtnText,
    deleteBtnText
  ) => {
    setModalContent({
      modalTitle,
      modalText,
      cancelBtnText,
      deleteBtnText,
    });
  };
  const { modalTitle, modalText, cancelBtnText, deleteBtnText } = modalContent;
  return (
    <ModalContext.Provider
      value={{
        setOpenModal,
        handleRemoveEvent,
        setIdToBeDeleted,
        updateModalContent,
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
          <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {modalText}
            </DialogContentText>
          </DialogContent>
          <DialogActions className={styles.buttonsWrapper}>
            <Button onClick={handleClose} variant="outlined">
              {cancelBtnText}
            </Button>
            <Button
              onClick={handleRemoveEvent}
              autoFocus
              variant="contained"
              color="error"
            >
              {deleteBtnText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ModalContext.Provider>
  );
};
