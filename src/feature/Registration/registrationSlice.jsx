import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await data.json();

  return json;
});

const registrationSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  reducers: {
    addTodos: (state, action) => {
      state.items.push({
        id: 1,
        text: action.payload,
      });
    },
  },

  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.loading = true;
    },

    [fetchTodos.fulfilled]: (state, action) => {
      state.items = action.payloaad;
      state.loading = false;
    },
  },
});

export default registrstionSlice.reducer;

export const { addTodos } = registrstionSlice.actions;
