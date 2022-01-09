import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

// RestaurantPage 는 리액트 라우터 연결고리로 돌아감 (리액트 라우터 만 사용) - 어떤 id 값을 가졌는지만 알면 됨
// 컨테이너는 id 값을 props 로 받아서 사용(react-router 라이브러리 모름)
// 컴포넌트는 컨테이너에서 props 로 restaurant 을 받아서 처리하므로 리덕스를 모름
// => 각 역할별로 분리해서 개발
export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <RestaurantContainer restaurantId={id} />
  );
}
