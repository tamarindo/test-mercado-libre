import React from 'react';
import { MLPrice } from '../../../../components/price/component';
import iconShipping from "../../../../assets/images/ic_shipping.png";
import './styles.scss';
import { NavLink } from 'react-router-dom';



var classNames = require('classnames');

export const ProductCard = (
  { id, 
    img, 
    price,
    description,
    location,
    isfreeshipping
  }
  ) => {
    let linkString= "/items/"+id
    let imgIsFreeShipping = (isfreeshipping)?<img alt='envio gratis'   src={iconShipping}></img>:"";

  return (
    <div className={ classNames("ProductCard" )}  >
      <div className="ProductCard-leftcontent">
      <NavLink to={linkString}>
        <img className="ProductCard-img" src={img} alt='imagen del producto' ></img>
      </NavLink> 
      </div>
      <div className="ProductCard-mainContent">
       <div className="ProductCard-price">
          <MLPrice currency="$" value={price} ></MLPrice>
          {imgIsFreeShipping}
        </div>
        
        <div className="ProductCard-description">
        <NavLink to={linkString}>
          {description}
        </NavLink >
        </div>
      </div>
      <div className="ProductCard-locationContent">
        {location}
      </div>
      <div>

      </div>
    </div>);
}

