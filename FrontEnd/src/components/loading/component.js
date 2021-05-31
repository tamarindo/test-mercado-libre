import React from 'react';
import iconLoading from "../../assets/images/giphy.gif";
import './styles.scss';

export const MLLoading = () => {
  return (
    <div className="MLLoading">
      <img alt='loading'  src={iconLoading} ></img>
    </div>);
}

