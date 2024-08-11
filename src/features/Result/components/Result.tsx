import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store.ts";
import { resetExerciseThunk } from "../../TypingArea/thunks/typingAreaThunks.ts";
import RestartButton from "../../../shared/components/Buttons/RestartButton/RestartButton.tsx";
import { ResultsWrapper } from "./style.tsx";

const Result = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { wpm, errors, isFinished } = useSelector(
    (state: RootState) => state.typing,
  );

  const handleReset = () => {
    dispatch(resetExerciseThunk());
  };

  if (!isFinished) return null;

  return (
    <ResultsWrapper>
      <h2>Результаты</h2>
      <p>Слов в минуту: {wpm}</p>
      <p>Ошибки: {errors}</p>
      <RestartButton onClick={handleReset} />
    </ResultsWrapper>
  );
};

export default Result;
