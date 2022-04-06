import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const SnackbarContext = createContext({});

export const SnackbarProvider = ({ children }) => {
  const [snackData, setSnackData] = useState({
    message: "",
    open: false,
    severity: "success",
  });
  const { open, message, severity } = snackData;

  return (
    <SnackbarContext.Provider value={{ setSnackData }}>
      {children}
      <Snackbar open={open}>
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
