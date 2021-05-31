import React from 'react';
import './styles.scss';


var classNames = require('classnames');

export const MLButton = ({ text , isDisabled , classAux , icon,onclick}) => {

  let deseableClass =  (isDisabled === true) ? "mlButton--diseable" : "" ;
  return (
    <button className={ classNames("mlButton" ,deseableClass , "mlButton--"+classAux )}  onClick ={onclick}>
      <span className="mlButton-text" > 
        {text} 
      </span>  
    </button>);
}

