import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container, GlobalStyles, Wrapper } from "./global/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <Wrapper>
          <Header />
          {/* Routes */}
          {/* <EventsList /> */}
          <AddEvent />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
