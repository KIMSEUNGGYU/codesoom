import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import { updateTaskTitle, addTask, deleteTask } from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

// App 은 기능들이 어떻게 동작하는지 모름
// => 상관없음. App 은 화면에 화면에 어떻게 보이는지만 집중하기
// App은 정의한 기능과 연결하는 역할도 있지만, 어떻게 동작하는지는 모름
// 내요들ㄹ이 어떻게 만들어지는데 모름
// 관심사의 분리!!
export default function App() {
  const { taskTitle, tasks } = useSelector(selector);
  const dispatch = useDispatch();

  function handleChangeTitle({ target }) {
    dispatch(updateTaskTitle(target.value)); // 이제는 기존 상태로 알 필요가 없음
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
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
