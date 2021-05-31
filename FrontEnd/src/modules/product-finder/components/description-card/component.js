import React from 'react';
import './styles.scss';


var classNames = require('classnames');

export const DescriptionCard = ({ description  }) => {

  return (
    <div className={ classNames("DescriptionCard"  )}  >
      <h3> Descripcíon del producto</h3>
      <p>
       { description } 
      </p>
    </div>);
}

