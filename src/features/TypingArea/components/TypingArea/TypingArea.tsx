import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store.ts";
import { fetchRandomText } from "../../thunks/typingAreaThunks.ts";
import TextDisplay from "../TextDisplay/TextDisplay.tsx";
import TextInput from "../TextInput/TextInput.tsx";
import CloseButton from "../../../../shared/components/Buttons/CloseButton/CloseButton.tsx";
import { handeFinish } from "../../typingArea.slice.ts";
import { FlexBlock, TypingAreaWrapper } from "./style.tsx";
import Spinner from "../../../../styles/components/Spinner.tsx";

const TypingArea = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { text, userInput, isFinished, isLoading } = useSelector(
    (state: RootState) => state.typing,
  );

  useEffect(() => {
    dispatch(fetchRandomText());
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <TypingAreaWrapper>
      <TextDisplay text={text} userInput={userInput} isLoading={isLoading} />
      <FlexBlock>
        <TextInput isFinished={isFinished} userInput={userInput} />
        {!isFinished && !isLoading && (
          <CloseButton onClick={() => dispatch(handeFinish())} />
        )}
      </FlexBlock>
    </TypingAreaWrapper>
  );
};

export default TypingArea;
