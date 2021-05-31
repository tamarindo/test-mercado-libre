import React, { useState,useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import mainLogo from "../../assets/images/Logo_ML.png";
import iconLens from "../../assets/images/ic_Search.png";
import './styles.scss';
const queryString = require('query-string');


var classNames = require('classnames');

export const MLHead = ({  FucUpdateArray, classAux,}) => {
  let history = useHistory()

  const [search, setsearch] = useState("");
  const [count, setcount] = useState(false);

  const changeValeuSearch= (value) => {
    setsearch(value.target.value);
  }
  const searchProduct = (event,it) =>{
    if(search){
    history.push("/items?search="+search);
    FucUpdateArray(search);
    }
    setcount(false)  
  }

  useEffect(()=>{
    let params  = queryString.parse(history.location.search).search;
    if(!count && params ){
      if(params !== search){
        setsearch(params);
        FucUpdateArray(params);
      }
      setcount(true);
    }


  })

  return (
    <header className={ classNames("mlHead" , "mlHead--"+classAux )}  >
      <div className="mlHead-container">
      <NavLink to="/"  className="mlHead-linkLogo w-10">
          <img 
          alt='logo mercado libre' 
            className="mlHead-logo"
            src={mainLogo} 
          />
        </NavLink>
        <div className="mlHead-search w-90" >
          <input className="mlHead-input" placeholder="Nunca ares de buscar" defaultValue={search} onChange={changeValeuSearch} 
          onKeyDown={(e)=>{if(e.key === 'Enter'){searchProduct()}}} ></input>
          <button className="mlHead-button" onClick={(e)=>searchProduct()}>
            <img 
              alt='lupa' 
              className="mlHead-iconButton" 
              src={iconLens} 
            />
          </button>
        </div>
      </div>
    </header>);
}

