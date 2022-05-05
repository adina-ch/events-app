import { BrowserRouter, Route, Routes } from "react-router-dom";

import { EventsProvider } from "./EventsContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./global/theme";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import { ModalProvider } from "./contexts/ModalContext";

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
              />
              <Route path="/add" element={<AddEvent />} />
            </Routes>
          </BrowserRouter>
        </EventsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
