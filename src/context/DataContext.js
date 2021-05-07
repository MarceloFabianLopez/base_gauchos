import  React, {createContext, useState}  from 'react';
export const DataContext = createContext();


export const DataProvider = ({children}) => {

   // const EscenaInicial =   {idEscena :    " ../../standalone/pannellum.htm?config=../tour2.json"    };
   const EscenaInicial =   {idEscena :    "../../standalone/pannellum.htm?config=../tour1.json"    };
   //const EscenaInicial =   {idEscena :    " ../../../tour2.json"    };
    const conjuntoEscenasInicial = [];
    const cantidadInicial = 0;
   // const escenario = {}
    //const RecorridoInicial = {        idRecorrido:  "../../standalone/pannellum.htm?config=../tour1.json"    };
    const RecorridoInicial = {};
    const [escena,setEscena] = useState (EscenaInicial);
    const [conjuntoEscenas,setConjuntoEscenas]= useState(conjuntoEscenasInicial);
    const [recorrido,setRecorrido] = useState (RecorridoInicial);
    const [cantidad,setCantidad] =useState (cantidadInicial);

    return (
            <DataContext.Provider value={
               { escena,setEscena ,
               conjuntoEscenas,setConjuntoEscenas,
               recorrido,setRecorrido,
            cantidad,setCantidad}
            }>
                        {children}
            </DataContext.Provider>

    )
}