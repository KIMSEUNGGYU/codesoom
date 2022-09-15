import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

import { restautrant } from '../fixture/restautrants';

describe('Input', () => {
  const handleChangeRestautrantInfo = jest.fn();
  const handleClick = jest.fn((event) => event.preventDefault());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (value) => render(
    <Input
      restautrant={value}
      onChange={handleChangeRestautrantInfo}
      onClick={handleClick}
    />,
  );

  it('render', () => {
    const { getByPlaceholderText, getByRole } = renderComponent({});

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByRole('button', { name: /추가/ })).toBeInTheDocument();
  });

  describe('각각의 입련 란은', () => {
    it('전달 받은 값을 렌더링한다.', () => {
      const { getByPlaceholderText } = renderComponent(restautrant);

      expect(getByPlaceholderText(/이름/))
        .toHaveAttribute('value', restautrant.name);
      expect(getByPlaceholderText(/분류/))
        .toHaveAttribute('value', restautrant.type);
      expect(getByPlaceholderText(/주소/))
        .toHaveAttribute('value', restautrant.address);
    });

    it('이름 입력창에 입력 시, handleChangeRestautrantInfo 를 name 과 입력 값을 함께 호출한다', () => {
      const { getByPlaceholderText } = renderComponent({});

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: { value: restautrant.name },
      });

      expect(handleChangeRestautrantInfo)
        .toBeCalledWith('name', restautrant.name);
    });

    it('종류 입력창에 입력 시, handleChangeRestautrantInfo 를 type 과 입력 값을 함께 호출한다', () => {
      const { getByPlaceholderText } = renderComponent({});

      fireEvent.change(getByPlaceholderText(/분류/), {
        target: { value: restautrant.type },
      });

      expect(handleChangeRestautrantInfo)
        .toBeCalledWith('type', restautrant.type);
    });

    it('주소 입력창에 입력 시, handleChangeRestautrantInfo 를 address 와 입력 값을 함께 호출한다', () => {
      const { getByPlaceholderText } = renderComponent({});

      fireEvent.change(getByPlaceholderText(/주소/), {
        target: { value: restautrant.address },
      });

      expect(handleChangeRestautrantInfo)
        .toBeCalledWith('address', restautrant.address);
    });
  });

  it('"추가" 버튼을 클릭 하면 onClick 핸들러를 호출한다.', () => {
    const { getByRole } = renderComponent({});

    fireEvent.click(getByRole('button', { name: /추가/ }));

    expect(handleClick).toBeCalled();
  });
});
