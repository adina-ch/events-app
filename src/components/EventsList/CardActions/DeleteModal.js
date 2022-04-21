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

import styles from "./deleteModal.module.scss";

const DeleteModal = ({
  openModal,
  setOpenModal,
  handleDeleteEvent,
  idToBeDeleted,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
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
            onClick={() => {
              handleClose();
              handleDeleteEvent(idToBeDeleted);
            }}
            autoFocus
            variant="contained"
            color="error"
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
