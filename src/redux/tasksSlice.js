// Import createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [], // Initial state as an empty array
  reducers: {
    // Reducer for adding a task
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    // Reducer for deleting a task
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    // Reducer for toggling task completion
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // Reducer for editing a task
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    }
  },
});

// Export actions and reducer
export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
