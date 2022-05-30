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

import styles from "./DeleteModal.module.scss";

const DeleteModal = ({
  openModal,
  setOpenModal,
  onConfirm,
  onCancel,
  modalContent,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  const { modalTitle, modalText, cancelBtnText, confirmBtnText } = modalContent;

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
        <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              onCancel();
            }}
            variant="outlined"
          >
            {cancelBtnText}
          </Button>
          <Button
            onClick={() => {
              handleClose();
              onConfirm();
            }}
            autoFocus
            variant="contained"
            color="error"
          >
            {confirmBtnText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
