import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const json = await api.get("/users/1");

  return json.data;
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
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export default registrationSlice.reducer;

export const { addTodos } = registrationSlice.actions;
