import { EventsProvider } from "./EventsContext";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./global/theme";
import { SnackbarProvider } from "./contexts/SnackbarContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EventsProvider>
        <SnackbarProvider>
          <BrowserRouter>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<EventsList />} />
              <Route path="/add" element={<AddEvent />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </EventsProvider>
    </ThemeProvider>
  );
};

export default App;
