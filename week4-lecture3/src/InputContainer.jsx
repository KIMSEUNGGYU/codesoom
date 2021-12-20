import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateTaskTitle, addTask } from './actions';

import Input from './Input';

export default function Page() {
  const { taskTitle } = useSelector((selector) => ({
    taskTitle: selector.taskTitle,
  }));
  const dispatch = useDispatch();

  function handleChangeTitle({ target }) {
    dispatch(updateTaskTitle(target.value)); // 이제는 기존 상태로 알 필요가 없음
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />

  );
}
