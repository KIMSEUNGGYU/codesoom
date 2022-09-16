import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

jest.mock('react-redux');

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders "Log out" button and listens click event', () => {
    const { container, getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    expect(container).toHaveTextContent('Log out');

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
