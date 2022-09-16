import React from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!</p>
      <p>HI!!</p>
      <Buttons
        onClick={onClick}
      />
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
  );
}
