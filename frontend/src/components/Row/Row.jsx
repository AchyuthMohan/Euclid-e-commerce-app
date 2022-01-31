import React from 'react';
import './Row.css';
import Cards from '../Cards/Cards';

const Row = (props) => {
  return <div className='items'>
      <h1 >{props.category}</h1>
     
      <div className='products'>
            <Cards pname='iphone 13'/>
            <Cards pname='iphone 13'/>
            <Cards pname='iphone 13'/>
            
        </div>
        </div>;
};

export default Row;
