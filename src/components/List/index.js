import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './list.scss';

const List = ({ list }) => {
  const dispatch = useDispatch();

  const changeAmount = (evt) => {
    dispatch({
      type: 'UPDATE',
      // Je récupère la valeur de la devise à convertir
      payloadInputValue: document.querySelector('.input-amount').value,
      // Je récupère le taux de change de la devise à convertir
      payloadInputRate: document.querySelector('#currency-selected').options[document.querySelector('#currency-selected').selectedIndex].dataset.rate,
      // Je récupère le taux de change de la devise cible
      payloadValue: evt.target.dataset.rate,
      // Je récupère le nom de la devise cible
      payloadName: evt.target.textContent,
    });
  };

  return (
    <div className="list-container">
      <h2 className="list-name">Currencies</h2>
      <ul className="list">
        {list.map((currency) => (
          <li
            key={currency.name}
            data-rate={currency.rate}
            className="one-currency"
            onClick={changeAmount}
          >
            {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default List;
