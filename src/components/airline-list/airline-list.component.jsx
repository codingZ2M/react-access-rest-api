import React from 'react';
import './airline-list.styles.css';
import { Airline } from '../airline/airline.component';

export const AirlineList = (props) => {
    return (
             <div className="airline-list"> 
                  {
                    props.airlines.map(airline => (
                        <Airline key={airline.id} airline={airline} /> 
                                        ))   
                }      
            </div>
           )
}

