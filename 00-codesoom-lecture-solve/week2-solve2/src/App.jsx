import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState(
    {
      newId: 100,
      taskTitle: '',
      tasks: [
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ],
    },
  );

  const { tasks, newId, taskTitle } = state;

  function handleClickAddTask() {
    setState({
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    });
  }

  function handleChangeTitle({ target }) {
    setState({
      ...state,
      taskTitle: target.value,
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      onClickDeleteTask={handleClickDeleteTask}
      tasks={tasks}
    />
  );
}
