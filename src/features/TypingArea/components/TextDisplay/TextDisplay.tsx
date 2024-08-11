import { useMemo, Fragment } from "react";
import {
  CorrectChar,
  CurrentChar,
  IncorrectChar,
  TextContainer,
} from "./style.tsx";
import { TextDisplayProps } from "./textDisplay.interface.ts";

const TextDisplay = ({ text, userInput, isLoading }: TextDisplayProps) => {
  const renderedText = useMemo(() => {
    return text.split("").map((char, index) => {
      const isCurrentChar = index === userInput.length;
      const isCorrectChar = userInput[index] === char;
      const isIncorrectChar = userInput[index] && !isCorrectChar;

      if (isCurrentChar) {
        return (
          <CurrentChar key={index}>
            {isCorrectChar ? (
              <CorrectChar>{char}</CorrectChar>
            ) : isIncorrectChar ? (
              <IncorrectChar>{char}</IncorrectChar>
            ) : (
              char
            )}
          </CurrentChar>
        );
      } else if (isCorrectChar) {
        return <CorrectChar key={index}>{char}</CorrectChar>;
      } else if (isIncorrectChar) {
        return <IncorrectChar key={index}>{char}</IncorrectChar>;
      } else {
        return <Fragment key={index}>{char}</Fragment>;
      }
    });
  }, [text, userInput, isLoading]);

  return <TextContainer>{renderedText}</TextContainer>;
};

export default TextDisplay;
