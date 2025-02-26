import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function UseState1({ OnFormSubmit }) {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    OnFormSubmit({ name, fullName });
  };

  return (
    <>
      <div>UseState1 -- Child</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

UseState1.propTypes = {
  OnFormSubmit: PropTypes.func.isRequired,
};