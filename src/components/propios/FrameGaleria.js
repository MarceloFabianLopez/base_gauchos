import React,{ useContext} from 'react';
import tw from "twin.macro";

//import styled from "styled-components";
import { DataContext } from 'context/DataContext';
//escena : "../../standalone/pannellum.htm?config=../tour1.json",
//import useState from 'react';
const Fotos = [
  {
alt:"alt1",
url:"../../media_landpages/dacal/uno.jpg",
texto :"Primera",
escena : "../../standalone/pannellum.htm?config=../tour1.json",
  },
  {
    alt:"alt2",
    url:"../../vtour/chamas/21_32_33/chama_21_32_33.jpg",
    texto :"M.Chama Imobiliaria",
    escena :  "../../standalone/pannellum.htm?config=../tour2.json",
      },
      {
        alt:"alt1",
        url:"../../media_landpages/dacal/tres.jpg",
        texto :"Tercera",
        escena :  "../../standalone/pannellum.htm?config=../tour3.json",
          },
          {
            alt:"alt1",
            url:"../../media_landpages/dacal/cuatro.jpg",
            texto :"Cuarta",
            escena : "Catedral",
              },
              {
                alt:"alt1",
                url:"../../media_landpages/dacal/cinco.jpg",
                texto :"Quinta",
                escena : "Catedral",
                  },
                  {
                    alt:"alt1",
                    url:"../../media_landpages/dacal/seis.jpg",
                    texto :"Sexta",
                    escena : "Catedral",
                      },
];
//const FotosContainer=tw.div`w-2/4 bg-green-500 grid grid-cols-1 md:p-10 grid grid-flow-col   gap-4 align-middle mx-auto
//`;

const FotosContainer = tw.div`-mt-10 flex flex-wrap sm:-mr-2 md:-mr-6 lg:-mr-6`;
const UnaFoto = tw.div`mt-4 w-1/3 p-2 sm:w-1/6 md:w-1/3 lg:w-1/6 sm:pr-2 md:pr-6 lg:pr-6`;
//const ListadoFoto=tw.div`p-5 bg-blue-400`; 

//const UnaFoto=tw.div`bg-gray-300 h-32 w-32 p-3 object-fill`;

const TextoFoto= tw.p`p-1 text-gray-800 font-bold`;
//const EstiloEscena =tw.div`bg-black p-5`;

 
function FrameGaleria () {
 const {setEscena} = useContext (DataContext);

//const EscenaInicial ={idEscena: "Primera"};
  //const [MiEscena,setEscena]= useState({EscenaInicial});
//const [Mirecorrido,setRecorrido] = useState( "../../standalone/pannellum.htm?config=../tour1.json");
  function CambiaEscena  (idFoto)  {
 // console.log(IdEscena);
 //e.preventDefault();
  console.log("click");
  var OtraEscena = {idEscena : Fotos[idFoto].escena};
  setEscena(OtraEscena);
 // setRecorrido()
}
  return (
<>
 {/*  <EstiloEscena>xx{escena.idEscena}xx</EstiloEscena> */}
  <FotosContainer>
           {Fotos.map((Foto, index) => (
            <UnaFoto key={index}   onClick= {()=>CambiaEscena(index)}><img src={Foto.url} alt={Foto.alt}/>
                                <TextoFoto>{Foto.texto}</TextoFoto>
            </UnaFoto>
          ))}  
  </FotosContainer>  
          
</> )

};

export default FrameGaleria;
