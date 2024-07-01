// Import necessary modules and MUI components
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          React To-Do List
        </Typography>
        <TaskInput />
      </Box>
      <TaskList />
    </Container>
  );
}

export default App;
