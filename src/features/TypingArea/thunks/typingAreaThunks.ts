import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../services/api.ts";

export const fetchRandomText = createAsyncThunk(
  "typing/fetchRandomText",
  async (_, { dispatch }) => {
    const result = await dispatch(api.endpoints.getRandomText.initiate());
    return result.data;
  },
);

export const resetExerciseThunk = createAsyncThunk(
  "typing/resetExerciseThunk",
  async (_, { dispatch }) => {
    await dispatch(fetchRandomText());
  },
);
