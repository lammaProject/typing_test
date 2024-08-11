import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRandomText,
  resetExerciseThunk,
} from "./thunks/typingAreaThunks.ts";
import countErrors from "../../utils/countErrors.ts";
import calculateWPM from "../../utils/calculateWPM.ts";

interface Typing {
  text: string;
  userInput: string;
  startTime: number | null;
  endTime: number | null;
  errors: number;
  wpm: number;
  isFinished: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: Typing = {
  text: "Случайный текст",
  userInput: "",
  startTime: null,
  endTime: null,
  errors: 0,
  wpm: 0,
  isFinished: false,
  isLoading: true,
  error: null,
};

export const typingAreaSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    updateUserInput: (state, action) => {
      state.userInput = action.payload;
      state.errors = countErrors(state.text, state.userInput);
      if (!state.startTime) {
        state.startTime = Date.now();
      }
      if (state.userInput.length === state.text.length) {
        state.endTime = Date.now();
        state.isFinished = true;
        state.wpm = calculateWPM(state);
      }
    },
    handeFinish: (state) => {
      state.endTime = Date.now();
      state.isFinished = true;
      state.wpm = calculateWPM(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomText.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomText.fulfilled, (state, action) => {
        state.isLoading = false;
        state.text = action.payload ? action.payload.text : initialState.text;
      })
      .addCase(fetchRandomText.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(resetExerciseThunk.pending, (state) => {
        Object.assign(state, initialState);
      });
  },
});

export const { updateUserInput, handeFinish } = typingAreaSlice.actions;

export default typingAreaSlice.reducer;
