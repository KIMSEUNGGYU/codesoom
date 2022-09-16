/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function LogoutForm({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  );
}
