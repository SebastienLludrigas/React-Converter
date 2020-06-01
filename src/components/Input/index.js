import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ list }) => (
  <div className="input-container">
    <h1 className="title">Converter</h1>
    <input
      className="input-amount"
      type="text"
      defaultValue="1"
    />
    <select name="currencies" id="currency-selected">
      {list.map((currency) => (
        <option
          key={currency.name}
          data-rate={currency.rate}
          value={currency.name}
          className="one-currency"
        >
          {currency.name}
        </option>
      ))}
    </select>
  </div>
);

Input.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Input;
