import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>

        {/* <li><a href="/about">About</a></li>
        <li><a href="/restaurants">Restaurants</a></li>
        <li><a href="/xxx">멸망의 길</a></li>
        */}
      </ul>
    </div>
  );
}
