import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    function renderTextField() {
      const handleChange = jest.fn();

      return render((
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('renders "number" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    function renderTextField() {
      const handleChange = jest.fn();

      return render((
        <TextField
          label="리뷰 설명"
          name="description"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
    });

    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  it('renders value', () => {
    const name = 'score';
    const value = '5';

    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <TextField
        label="평점"
        type="number"
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    expect(getByLabelText('평점').value).toBe(value);
  });

  it('listens change events', () => {
    const name = 'score';
    const value = '5';

    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <TextField
        label="평점"
        type="number"
        name={name}
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('평점'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});