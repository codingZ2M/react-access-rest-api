import React from 'react';
import './search-box.styles.css';


//funtional components gets 'props' and returns some html (JSX)

export const SearchBox =   ({ placeholder, handleChange }) => {  // object destructuring...(props)
     // JSX .. React Elements
     // Using a 'Synthetic' event called 'onChange'
     return (
    <input className="search" type='search' placeholder={placeholder} 
         onChange={ handleChange }
    />
     )
}
