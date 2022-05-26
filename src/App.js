import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { EventsProvider } from "./EventsContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./global/theme";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import { ModalProvider } from "./contexts/ModalContext";
import EditEvent from "./components/EditEvent/EditEvent";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <EventsProvider>
          <BrowserRouter>
            <Header />
            <Sidebar />
            <Routes>
              <Route
                path="/"
                element={
                  <ModalProvider>
                    <EventsList />
                  </ModalProvider>
                }
              ></Route>
              <Route path="/add" element={<AddEvent />} />
              <Route path="/edit/:id" element={<EditEvent />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </EventsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
