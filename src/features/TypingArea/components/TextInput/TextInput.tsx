import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateUserInput } from "../../typingArea.slice.ts";
import { Text } from "./textInput.interface.ts";

const TextInput = ({ userInput, isFinished }: Text) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isFinished) return;

      const { key } = event;
      if (key.length === 1) {
        const newInput = userInput + key;
        dispatch(updateUserInput(newInput));
      } else if (key === "Backspace") {
        const newInput = userInput.slice(0, -1);
        dispatch(updateUserInput(newInput));
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [userInput, isFinished]);

  return null;
};

export default TextInput;
