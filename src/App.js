import React, { useState, useEffect } from 'react'
import './App.css';
import { AirlineList } from './components/airline-list/airline-list.component';
import Header from './components/header/header.component';
import {SearchBox} from './components/search-box/search-box.component';

const  App = () => {
  
  const [airlines, setAirLines] = useState([])
  const [searchField, setSearchField] = useState("")


  useEffect(() => {

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("https://iata-and-icao-codes.p.rapidapi.com/airlines", {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "78cf854d11msh83e405a201dcac2p11a0c5jsn528da480c8ab",
      "x-rapidapi-host": "iata-and-icao-codes.p.rapidapi.com"
                 }
    })     
        .then(response => response.json() )   // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
        .then( airlines => setAirLines(airlines) ); // 
  }, [searchField])
 


// Writing Metods in class..user defined
  // Arrow functions binds the context 'this' &  The context of this arrow function is App component
      // Note: setState() is asynchronous method
      // Note: If you wnat do something with our 'state' right after we set it, then do it as 2nd argument 
  const handleChange = (e) => {
                           setSearchField(  e.target.value);
          
    }

     // filter() returns a new array based on the function we pass into it...here we are iterating 'airlines' array
     // https://www.w3schools.com/jsref/jsref_includes.asp
      const filteredAirlines = airlines.filter( airline =>
            airline.name.toLowerCase().includes(searchField.toLowerCase())
       );


    return (
      <div className="App">        
         <Header/>
         <SearchBox                         // <-- A component we buit..
                placeholder="Search Airlines"
                handleChange= { handleChange}
        />   
       
       <AirlineList airlines = {filteredAirlines}></AirlineList>     
     </div>

    )
 }
export default App;
