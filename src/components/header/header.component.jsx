import React from 'react';
import './header.styles.css';

 const Header = (props) => {
    return (
        <div className="header-container">
             <h1>Airlines - IATA and ICAO Codes</h1> 
            <img alt="monster"   src={'https://cdn.pixabay.com/photo/2017/11/01/17/30/airline-2908745_1280.png' } />
    </div>
        
    )
}

export default Header;