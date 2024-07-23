'use client'
import React, { useState } from 'react';
// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, deleteTask, toggleTaskComplete } from '@/lib/features/taskSlice';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState('');

  const tasks = useSelector(state => state.tasks.value) || [];
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const task = { id: Date.now(), text: newTask, complete: false };
    dispatch(addTask(task));
    setNewTask('');
  };

  const handleUpdateTask = (id) => {
    dispatch(updateTask({ id, text: editingText }));
    setEditingTask(null);
    setEditingText('');
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskComplete = (id) => {
    dispatch(toggleTaskComplete(id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks && tasks.map(task => (
          <div key={task.id} className={`task ${task.complete ? 'complete' : ''}`}>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleUpdateTask(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span onClick={() => handleToggleTaskComplete(task.id)}>{task.text}</span>
                <div className='btns'>
                {!task.complete && <button onClick={() => {
                  setEditingTask(task.id);
                  setEditingText(task.text);
                }}>Edit</button>}
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
