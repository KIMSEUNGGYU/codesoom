import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

jest.mock('react-redux');

describe('MenuItems', () => {
  context('with menu items', () => {
    it('renders menu items', () => {
      const menuItems = [
        { id: 1, name: '공기밥' },
      ];

      const { container } = render((
        <MenuItems menuItems={menuItems} />
      ));

      expect(container).toHaveTextContent('공기밥');
    });
  });

  context('with undefined menu items', () => {
    it('renders no items message', () => {
      const { container } = render((
        <MenuItems />
      ));

      expect(container).toHaveTextContent('메뉴가 없어요!');
    });
  });

  context('without menu items', () => {
    it('renders no items message', () => {
      const menuItems = [];

      const { container } = render((
        <MenuItems menuItems={menuItems} />
      ));

      expect(container).toHaveTextContent('메뉴가 없어요!');
    });
  });

  // 위 no items messgae 를 아래와 같이 표현 가능
  // context('without menu items', () => {
  //   it('renders no items message', () => {
  //     [[], null, undefined].forEach((menuItems) => {
  //       const { container } = render((
  //         <MenuItems menuItems={menuItems} />
  //       ));

  //       expect(container).toHaveTextContent('메뉴가 없어요!');
  //     });
  //   });
  // });
});
