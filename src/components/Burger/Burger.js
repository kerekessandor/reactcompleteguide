import React from 'react';
import './burger.css';
import Ingredients from './Ingredients/Ingredients';

const burger = () => {
    return (
        <div className="burger" >
            <Ingredients type="bread-top" />
            <Ingredients type="cheese" />
            <Ingredients type="meat" />
            <Ingredients type="bread-bottom" />
        </div>
    );
}

export default burger;