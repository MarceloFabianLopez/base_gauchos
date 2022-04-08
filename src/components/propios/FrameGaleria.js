import React,{ useContext} from 'react';
import tw from "twin.macro";

//import styled from "styled-components";
import { DataContext } from 'context/DataContext';
//escena : "../../standalone/pannellum.htm?config=../tour1.json",
//import useState from 'react';


//const FotosContainer=tw.div`w-2/4 bg-green-500 grid grid-cols-1 md:p-10 grid grid-flow-col   gap-4 align-middle mx-auto
//`;

const FotosContainer = tw.div`mt-2  flex flex-wrap h-56 bg-black p-1 overflow-scroll overscroll-contain rounded-xl `;
const UnaFoto = tw.div`    bg-black p-2 w-1/3  sm:w-1/6 md:w-1/3 lg:w-1/6   rounded-2xl`;
const UnaImagen = tw.div` p-1  bg-white   rounded-xl `;
//const ListadoFoto=tw.div`p-5 bg-blue-400`; 

//const UnaFoto=tw.div`bg-gray-300 h-32 w-32 p-3 object-fill`;

const TextoFoto= tw.p`p-1 text-gray-100 text-xs`;
//const EstiloEscena =tw.div`bg-black p-5`;
 
function FrameGaleria () {
 const {setEscena} = useContext (DataContext);
 const {cantidad} = useContext(DataContext);
 const {conjunto}=useContext(DataContext);
 //console.log("cantidad desde contexto=",cantidad);
//console.log("conjuntodeEscenas=",conjunto)
//console.log ("escenas=",Object.keys(conjunto));
//console.log ("unaescenas=",conjuntoEscenas['Entrada'].title);
let claves =Object.keys(conjunto);
//const EscenaInicial ={idEscena: "Primera"};
  //const [MiEscena,setEscena]= useState({EscenaInicial});
//const [Mirecorrido,setRecorrido] = useState( "../../standalone/pannellum.htm?config=../tour1.json");
  

function CambiaEscena  (index)  {

 // console.log(IdEscena);
 //e.preventDefault();
  //console.log("click",index);
  //console.log("cambio de escena=", Fotos[idFoto])
 // var OtraEscena = {idEscena : idFoto};
  
 //console.log("otraEscena=",OtraEscena);
  setEscena(index);
 // setCounter(2);
  
 // setRecorrido()
}
  
    // {Fotos.map((Foto, index) => (

//<UnaFoto key={index}   onClick= {()=>CambiaEscena(index)}><img src={Foto.panorama} alt={Foto.alt}/>
  //                              <TextoFoto>{Foto.title}</TextoFoto>
   //         </UnaFoto>

if (conjunto[Object.keys(conjunto)[0]]) { 
 // console.log("adentro=",conjunto["Entrada"]);
  //let algo = conjunto["Entrada"];
 // console.log("adentros=",algo["panorama"]);
  return (
<>
 {/*  <EstiloEscena>xx{escena.idEscena}xx</EstiloEscena> */}

   <FotosContainer>
           {  
                                claves.map((conjuntoEscenas, index) => (
                                                                            <UnaFoto key={index}   onClick= {()=>CambiaEscena(index)}>
                                                                              <UnaImagen><img src={"../" + conjunto[claves[index]].panorama}  alt={conjunto[claves[index]]["title"]}/>
                                                                              </UnaImagen>
                                                                            <TextoFoto>{
                                                                           
                                                                            conjunto[claves[index]]["title"]}</TextoFoto>
                                                                            </UnaFoto>
            
                                                                        )
                                                                        )
                                    
        }
  </FotosContainer>   
          
</> );


}
return <p>Cargando escenas</p>
};
export default FrameGaleria;
