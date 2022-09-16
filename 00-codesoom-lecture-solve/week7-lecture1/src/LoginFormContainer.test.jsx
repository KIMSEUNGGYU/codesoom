import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(getByLabelText('E-mail').value).toBe('test@test');
    expect(getByLabelText('Password').value).toBe('1234');
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <LoginFormContainer />,
    );

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new email' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'new email' },
    });
  });

  it('renders "Log In" button', () => {
    // 버튼 누르면 리덕스 호출 테스트
    const { getByText } = render(
      <LoginFormContainer />,
    );

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
