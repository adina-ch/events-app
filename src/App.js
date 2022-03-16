import { EventsProvider } from "./EventsContext";

import { Container, GlobalStyles, Wrapper } from "./global/globalStyles";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";

const App = () => {
  return (
    <EventsProvider>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <Wrapper>
          <Header />
          {/* Routes */}
          <EventsList />
          {/* <AddEvent /> */}
        </Wrapper>
      </Container>
    </EventsProvider>
  );
};

export default App;
