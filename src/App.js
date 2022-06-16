import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { EventsProvider } from "./EventsContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./global/theme";

import Sidebar from "./components/Sidebar/Sidebar";
import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import EditEvent from "./components/EditEvent/EditEvent";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Box } from "@mui/system";
import { Container, Toolbar } from "@mui/material";
import styles from "./App.module.scss";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <EventsProvider>
          <BrowserRouter>
            <Box className={styles.flexWrapper}>
              <Sidebar />
              <Container maxWidth="lg">
                <Toolbar />
                <Routes>
                  <Route path="/" element={<EventsList />}></Route>
                  <Route path="/add" element={<AddEvent />} />
                  <Route path="/edit/:id" element={<EditEvent />} />
                  <Route path="/error" element={<ErrorPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Container>
            </Box>
          </BrowserRouter>
        </EventsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
