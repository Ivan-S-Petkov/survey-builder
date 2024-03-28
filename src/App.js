import styled from "styled-components";
import Body from "./components/templates/Body";
import Header from "./components/templates/Header";
import ErrorProvider from "./provider/ErrorProvider";

function App() {
  return (
    <Wrapper>
      <ErrorProvider>
        <Header></Header>
        <Body></Body>
      </ErrorProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default App;
