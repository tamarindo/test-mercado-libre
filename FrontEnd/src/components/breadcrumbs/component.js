import React from 'react';
import './styles.scss';


var classNames = require('classnames');

export const MLBreadCrumbs = ({ array = [] ,classAux ,}) => {

  let items = array.map((x,i)=>{
    return <div key={i} className="mlBreadCrumbs-item"> {x}</div>
  })

  return (
    <div className={ classNames("mlBreadCrumbs")}  >
      {items}
    </div>);
}

