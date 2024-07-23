export const addTodoTask = (state, action) => {
    state.value.push(action.payload);
    localStorage.setItem('tasks', JSON.stringify(state.value));
  }

export const updateTodoTask = (state, action) => {
    const { id, text } = action.payload;
    const task = state.value.find(task => task.id === id);
    if (task) task.text = text;
    localStorage.setItem('tasks', JSON.stringify(state.value));
  }

export const deleteTodoTask = (state, action) => {
    const index = state.value.findIndex(task => task.id === action.payload);
    if (index !== -1) state.value.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(state.value));
  }

export const toggleTodoTaskComplete = (state, action) => {
    const task = state.value.find(task => task.id === action.payload);
    if (task) task.complete = !task.complete;
    localStorage.setItem('tasks', JSON.stringify(state.value));
  }