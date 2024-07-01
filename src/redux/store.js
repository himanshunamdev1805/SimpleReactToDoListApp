// Import necessary modules from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Import tasks reducer

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Failed to load state', e);
    return [];
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.warn('Failed to save state', e);
  }
};

// Configure Redux store with preloaded state from local storage
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: { tasks: loadState() },
});

// Subscribe to store updates to save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
