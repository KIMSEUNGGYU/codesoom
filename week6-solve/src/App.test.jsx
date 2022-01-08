import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // 테스트 에서는 MemoryRouter 를 사용해서 가볍게 사용 가능?

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('20명에게 추천');
    });
  });

  context('with path /restaurants', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path ', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
