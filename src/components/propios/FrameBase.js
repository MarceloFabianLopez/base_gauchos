import React, { useEffect,useContext,useState } from 'react';
import tw from "twin.macro";
import IconoRecorrido from './IconoRecorrido';
import IconoAerea from './IconoAerea';
import IconoVideo360 from './IconoVideo360';
import styled from "styled-components";
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import VideoPlayer from 'components/propios/VideoPlayer';


//import { ReactComponent as VrIcon } from "feather-icons/dist/icons/nuevovr.svg";
import { DataContext } from 'context/DataContext';
//import Botonera from 'components/propios/Botonera';
//import Datos from 'components/propios/Datos';

//import { DataProvider } from './context/DataContext';

//import ReactPannellum, { getConfig ,getViewer,getAllScenes,addScene, loadScene, lookAt} from "react-pannellum";



const Card = tw.div`relative top-0  bg-white  mx-auto xl:mx-0 xl:ml-auto max-w-full md:max-w-full  lg:max-w-full xl:max-w-full p-5 `;
/* const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded-2xl`
]);
 */
//const CardText = tw.div`mt-0 p-4`;

const CardHeader = tw.div` bg-black `;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600 text-right `;
const CardTitle = tw.h5`text-xl mt-2 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;
const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
//const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;
//const TituloPrimary = tw.div`text-primary-500 font-bold text-lg`;
/* const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Recorridos 360º",
      type: "Recorrido virtual",
      title: "Resalte puntos de interés",
      durationText: "24hs para entrega",
      locationText: "Zona Gran La Plata"
    },
     {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Video 360º",
      type: "Experiencia inmersiva",
      title: "La sensación de estar en el lugar",
      durationText: "24 hs para entrega",
      locationText: "Apto visores Realidad Virtual"
    } 
     ,
     {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Aéreos",
      type: "Tenga una nueva perspectiva",
      title: "Imprescindible",
      durationText: "24 hs para entrega",
      locationText: "Consultar zonas"
    }  
  ];
 */  const IconoReco = tw.div`absolute  z-10 top-0 right-0 h-16 w-16 `;
  //const PosicionImagen = tw.div`z-0 relative mt-0 `;
 // const EmbedContainer =tw.div`relative bg-green-300 w-full h-full overflow-hidden `;
  
  //const EembedContainerIframe =tw.div`absolute  bg-red-300 pb-2 top-0 ml-0  h-full     `;


// TipoMedio puede ser Imagen, Video, Video360, Recorrido
//const Escenario = tw.div`bg-gray-500 p-2 w-full`;


/* function getIframe (){
   document.getElementsById('mipannellum');
}
 */


//const proximaEscena="Entrada";

//const configPannellum = "../tour1.json";



const Fondo=tw.div`bg-red-600 p-4 text-blue-400`; 

//const {cantidad,setCantidad} = useContext(DataContext);

  function FrameBase ({ source="" , Titulo="Titulo", Bajada="Bajada", SubTitulo="Subtitulo",TextoGrisMayuscula="Texto en gris y mayusculas",
    
                      IsVideo=false, IsImagen=false, IsRecorrido=false, IsPlano=false,videoJsOptions={},ImageAlt="imagen" ,sourceInicial="../../standalone/pannellum.htm?config=../tour2.json"}) 


{
  
  const {cantidad,setCantidad} = useContext(DataContext);
 // const [archivo,setArchivo]  = useState('');
  const [run, setRun] = useState(true);
  const [counter, setCounter] = useState(-1);
  //const countRef = useRef(count);
  //countRef.current = count;
 // const [recorrido, setRecorrido] = useState([]);
 //const {recorrido,setRecorrido} = useContext(DataContext);
  const [conjuntoEscenas,setConjuntoEscenas]=useState([]);
  const {escena} = useContext (DataContext);
  const [huboUnCambio, setHuboUnCambio]=useState(false);

   

  useEffect(() => {

   // 
   // var myHeaders = new Headers();
    //var myInit = { method: 'GET',
      //         headers: myHeaders,
        //       mode: 'cors',
         //      cache: 'default' };
         
var sourceCorregido="../../" +source.slice(38);
//var myRequest = new Request(sourceCorregido, myInit);
                    //////console.log("useEffect recorrido");
                    //console.log("sourceCorregido =" ,sourceCorregido);
                    //console.log("source =" ,source);
                   // fetch("../../../tour1.json")
                   // fetch(myRequest)
                   fetch(sourceCorregido)
                               .then(res => res.json())
                                                                .then(datos => {
                                                                  //setRecorrido(datos);
                                                                  setCounter(-1);
                                                                  //console.log("corregido=",sourceCorregido);
                                                                  //console.log('datos obtenidos=',datos);
                                                                     // debugger;
                                                                  //console.log("Recorrido=",recorrido);
                                                                  setConjuntoEscenas(Object.keys(datos["scenes"]
                                                                  ));
                                                                  setCantidad((Object.keys(datos["scenes"]).length));
                                                                  setHuboUnCambio(true);
                                                                  //console.log("cantidad=",cantidad);
                                                                  //console.log("conjuntEscenas",conjuntoEscenas);
                                                                  //console.log("Object=",Object.keys(datos["scenes"]));
                                                                 // setCounter(0);
                                                                  
                                                                 // //console.log("escenas=",conjuntoEscenas.length,"counter=",counter);

                                                                }
                                      )
                                      .catch(function() {
                                      //  alert("eror de descarga");
                                        //console.log("cargando");
                                      }); 

                 return () => {
                  //console.log("limpieza ussefect recorrido");

                }
                 // eslint-disable-next-line react-hooks/exhaustive-deps 
                                    },[escena,source]);
  


    useEffect(() => {


      function Navegacion(){
  
        var ifrm = document.getElementById('mipannellum')
          var miviewer= ifrm.contentWindow.viewer
        
                  if(miviewer&&conjuntoEscenas){
                    //console.log("tengo viewer y conjuntoescenas");
                    if (counter===-1){
                      //console.log("inicioooooo");
                      miviewer.loadScene("Ingreso",0,0,120,true)} else {
                        //console.log("no es inicio");
                  miviewer.loadScene(conjuntoEscenas[counter],0,0,120,true)}
                    miviewer.lookAt(-5,0,60,4000);
                    miviewer.lookAt(0,0,120,4000);
                }
          }



     // //console.log("useeffect run=",run);
     const   lacuenta =  setTimeout(() => setCounter(counter + 1), 3000);

     if (run) { 
     Navegacion();
     }
     // counter < (cantidad + 1) && lacuenta() ;
      //console.log("counter useEffect=",counter,"cantidad=",cantidad);
     
     if (counter===(cantidad) ) {
      //console.log("reiniciando secuencia:",counter); 

      setCounter(-1);
      
      }
      if (huboUnCambio){
        //console.log("hubo un cambio");
        setHuboUnCambio(false);
        
      }
      
    
    return() => {
      //console.log("cleanup");   
      clearTimeout(lacuenta);}
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
      



 /*  function verViewer (){
setCounter(counter-1);
  } */

  function  Botonera () {

  function handleClick(event) {
    //alert('clicked');
   // //console.log("botonera run=",run);
    if(run){
    setRun(false) } else {setRun(true)}
    
     event.preventDefault();
    event.stopPropagation(); 
  }



  return (
            <Fondo>
                {/* <p>You clicked {counter} times</p> */}
                
                  
                 
                 {/*  <button onClick={(e) => setCounter(0)}>Inicio</button> 
                 
                 <button onClick={() => setCounter(counter+1)}>Adelante</button>
                 <button onClick={() => setCounter(counter-1)}>Atras</button> */}

                 <button onClick={handleClick}>{run?"Parar":"Automático"}</button>

                
            </Fondo>
        );
        //console.log("counter en botonera=",counter);
   }




 
if (!source) { return <div></div>; }
else {
const src = source;
//setArchivo(source);
  return (<>

                      <Card>
                 
                         { IsVideo && <IconoReco><IconoVideo360 /></IconoReco>}
                         { IsRecorrido && <IconoReco><IconoRecorrido /></IconoReco>}
                         {IsImagen &&  <IconoReco><IconoAerea /></IconoReco>}
                       
                        <CardHeader>
                                { IsVideo && <VideoPlayer { ...videoJsOptions }/> }

                                { IsRecorrido &&
                              
                                    <div>
                                        <iframe id="mipannellum" title="recorrido"  width="100%" allowFullScreen src={src}/>
                                        <Botonera/>
                                    </div>
                                  }
                                {IsImagen && <img src={source?source:sourceInicial} width="100%" alt={ImageAlt} />}
                        
                        </CardHeader>
                        {!IsPlano && <>
                              <CardCompany>{Titulo}</CardCompany>
                              <CardType>{Bajada}</CardType>
                              <CardTitle>{SubTitulo}</CardTitle>
                              <CardMeta>
                                <CardMetaFeature>{TextoGrisMayuscula}</CardMetaFeature>
                              </CardMeta></>
                        }
                     
                      </Card>  
                     
                       

          
     </> )
}
};

export default FrameBase;


/* var pano = document.getElementById('pano').contentWindow; 
var pitch = pano.config.pitch; 
var yaw = pano.config.yaw; 
var scene = pano.config.activeScene; 

will allow you to read values; after changing a value 
(except activeScene), 
run pano.animate(); */