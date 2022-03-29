import { EventsProvider } from "./EventsContext";

import { Container, GlobalStyles, Wrapper } from "./global/globalStyles";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./global/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EventsProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Container>
            <Sidebar />
            <Wrapper>
              <Header />
              <Routes>
                <Route path="/" element={<EventsList />} />
                <Route path="/add" element={<AddEvent />} />
              </Routes>
            </Wrapper>
          </Container>
        </BrowserRouter>
      </EventsProvider>
    </ThemeProvider>
  );
};

export default App;
