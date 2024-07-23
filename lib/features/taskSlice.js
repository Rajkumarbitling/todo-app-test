import { createSlice } from '@reduxjs/toolkit'
import { addTodoTask, deleteTodoTask, toggleTodoTaskComplete, updateTodoTask } from './taskAction'

const initialState = {
  value: [],
}

export const tasksSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addTask : addTodoTask,
    updateTask: updateTodoTask,
    deleteTask: deleteTodoTask,
    toggleTaskComplete: toggleTodoTaskComplete,
  },
})

// Action creators are generated for each case reducer function
export const { addTask, updateTask, deleteTask, toggleTaskComplete } = tasksSlice.actions;


export default tasksSlice.reducer