import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';

// test('테스트 #1');
// describe - it => describe('List') => it(renders tasks);
// with tasks
// - List renders tasks...
// - List renders "완료" button todelete a task
// without tasks
// - List render no task message.
// TDD cycle : Red - Green - Refactoring

describe('List', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('renders "완료" button todelete a task', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText(/완료/);

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(tasks[0].id);
    });
  });

  context('without tasks', () => {
    const tasks = [];
    it('render no task message.', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
