import React from 'react';

export default function Review({ reviews = [] }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <div>
            {name}
          </div>
          <div>
            {`${score}점`}
          </div>
          <div>
            {description}
          </div>
        </li>
      ))}
    </ul>
  );
}
