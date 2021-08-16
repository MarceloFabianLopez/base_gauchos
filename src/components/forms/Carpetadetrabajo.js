//import React   from "react";
import React from 'react';
//import styled from "styled-components";
import tw from "twin.macro";
import { imagenes } from "components/propios/fabrica/imagenes.js";
//import ReactDragListView from "react-drag-listview";
import ListaDrageable from "components/propios/ListaDrageable";
const Container = tw.div`z-0 relative p-2 bg-black  rounded-t-2xl grid grid-cols-4 gap-4 `;
//const Content = tw.div` bg-white  p-2 mx-auto py-2 lg:py-2 rounded-t-2xl`;
//const Column = tw.div`sm:w-full flex flex-col content-center bg-indigo-400`;
//const Titulo = tw.div`   bg-black text-white font-extrabold p-2 rounded-t-2xl`;



// anda la primer vez despues da error arreglar para no usar clases

/* const ListaArrastrable = ({data1=["nada"]})=> {
  const [data,setData] = useState(data1);
  const [dragProps,setDragProps] = useState(null);
   console.log("lista arrastrable=",data1);
 */

   /*  Ojo esto anda la primera vez y despues da un error
useEffect(() => 
  {
    console.log("useEffect drageable");

var dragProps1=null;
    
      // const that = this;
      
         dragProps1 = {
         onDragEnd(fromIndex, toIndex) {
           //const data = [...that.state.data];
           const data = data;
           const item = data.splice(fromIndex, 1)[0];
           data.splice(toIndex, 0, item);
           setData({ data });
         },
         nodeSelector: 'li',
         handleSelector: 'a'
       }; 
     setDragProps(dragProps1);
    
    return () => {                    ////console.log("limpieza ussefect recorrido");
    }
    
} ,[data,dragProps]
);
if (data) {
  return (
    <>
    {console.log("data=",data)}
     <ReactDragListView {...dragProps}>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            {item.orden}
            <a href="#">Drag</a>
          </li>
        ))}
      </ol>
    </ReactDragListView> 
    <p>Algo</p>
    </>
  )
}
  else {return <p>Cargando</p>}
  */
//console.log("data=",data);
//}



function Carpetadetrabajo ({titulo="Titulo"}) {
 
 
//------------------------

titulo= titulo || "Carpeta de trabajo";

  return (
    <Container>

                    {/* <ListaArrastrable data1={imagenes}/>    */}
                   <div className="p-8 bg-yellow-300 col-span-2">
                   <ListaDrageable data1={imagenes} carpeta="../../vtour/fabrica/"/></div>
                   <div className="w-full bg-red-500 p-4 overflow-auto"> {JSON.stringify(imagenes)} </div>

    </Container>
  );
};
export default Carpetadetrabajo;
