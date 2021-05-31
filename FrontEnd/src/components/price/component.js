import React from 'react';
import './styles.scss';


var classNames = require('classnames');

export const MLPrice = ({ currency, value, decimal }) => {
  value = (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
  return (
    <div className={ classNames("mlPrice" )} >
      <span className="mlPrice-currency">{currency+" "}</span>
      <span className="mlPrice-value">{value}</span>
      <span className="mlPrice-decimal">{decimal}</span>
    </div>);
}

