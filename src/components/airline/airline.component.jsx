import React from 'react';
import './airline.styles.css';

export const Airline = (props) => {
    return (
        <div className="airline-container">
            
                <h5>{props.airline.iata_code}</h5>
                 <h5>{props.airline.name}</h5>
                <h5>{props.airline.icao_code}</h5>
            
        </div>
    )

}

