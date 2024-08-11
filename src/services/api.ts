import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface TextResponse {
  status: string;
  text: string;
}

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["RandomText"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fish-text.ru/",
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getRandomText: builder.query<TextResponse, void>({
      query: () => "get?format=json&number=2",
      providesTags: (result) =>
        result ? [{ type: "RandomText", id: "LIST" }] : [],
    }),
  }),
});
