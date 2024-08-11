import styled from "styled-components";
import TypingArea from "./features/TypingArea/components/TypingArea/TypingArea.tsx";
import Result from "./features/Result/components/Result.tsx";
import GlobalStyles from "./styles/GlobalStyle.ts";

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <h1>Typing Speed Trainer</h1>
      <TypingArea />
      <Result />
    </AppWrapper>
  );
};

export default App;
