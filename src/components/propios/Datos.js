import  { useEffect, useState } from "react"
//import JSONPretty from 'react-json-pretty';
function useDatos() {
  const [recorrido, setRecorrido] = useState([])

  useEffect(() => {
    fetch("../../../tour2.json")
      .then(response => response.json())
      .then(datos => {
        setRecorrido(datos)
      })
  }, [])

  return recorrido
}

export default function Datos() {
 
 
    const recorrido = useDatos();
   //escenas=recorrido["scenes"];
  /* if(recorrido["scenes"]) {
           
            return (
     
             <div>
      
           
            
   
          { Object.keys(recorrido["scenes"]).map(clave => { return (<p>  {clave}</p>); }                          
                      ) }

          
          </div>);


  }
    else {return (<div>Esperando la carroza</div>)}
} */ 
return recorrido;
}