// action createor
export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: { taskTitle },
  };
}

export function addTask() {
  return {
    type: 'addTask',
  };
}

export function deleteTask(id) {
  return {
    tyep: 'deleteTask',
    payload: {
      id,
    },
  };
}
