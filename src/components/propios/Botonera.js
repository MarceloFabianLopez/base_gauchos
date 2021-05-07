import React, { useEffect,useContext,useState } from 'react';
import tw from "twin.macro";


//import React, { Component } from 'react';
import PropTypes from 'prop-types';
const fondo=tw.div`bg-red-600 p-4 text-blue-400`;



function  Botonera (counter) {
    
    //const [counter, setCounter] = useState(0);
    
    //console.log("counter=",counter);
  
        return (
            <fondo>
                {/* <p>You clicked {counter} times</p> */}
                 <button onClick={() => counter=counter-1}>
    Click me
  </button>
                
            </fondo>
        );
    }




export default Botonera;