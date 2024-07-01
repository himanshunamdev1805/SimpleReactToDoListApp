// Import necessary modules and MUI components
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/tasksSlice';
import { List, ListItem, IconButton, Checkbox, Typography, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id) => {
    const newTask = prompt("Edit task:");
    if (newTask) {
      dispatch(editTask({ id, text: newTask }));
    }
  };

  return (
    <Box mt={4}>
      <List>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            disableGutters
            secondaryAction={
              <Box>
                <IconButton onClick={() => handleEdit(task.id)} edge="end" aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(task.id)} edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </Box>
            }
          >
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <Typography
              variant="body1"
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TaskList;
