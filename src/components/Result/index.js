import React from 'react';
import { useSelector } from 'react-redux';

import './result.scss';

const Result = () => {
  const value = useSelector((state) => state.value);
  const name = useSelector((state) => state.name);

  return (
    <div className="result-container">
      <p className="amount">{value}</p>
      <p className="currency-name">{name}</p>
    </div>
  );
};

export default Result;
