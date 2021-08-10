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
import FrameGaleria from './FrameGaleria';


// xl:mx-0 xl:ml-auto max-w-full md:max-w-full  lg:max-w-full xl:max-w-full p-5

const Card = tw.div`relative top-auto  bg-blue-900 max-w-screen-sm     rounded-2xl   p-4 `;
/* const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded-2xl`
]);
 */
//const CardText = tw.div`mt-0 p-4`;

const CardHeader = tw.div` bg-black  p-2  flex flex-col  rounded-xl  `;
const CardCompany = tw.div`text-primary-500 font-bold mt-2 text-2xl bg-black text-center bg-opacity-75 p-4 rounded-2xl`;
const CardType = tw.div`font-semibold text-sm text-gray-200 text-right p-2`;
const CardTitle = tw.h5`text-xl mt-2 text-white font-extrabold`;

//const Centrador = tw.div`bg-red-400 p-2  items-end`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-200 uppercase text-xs`}
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
 */  const IconoReco = tw.div`absolute  z-10 top-0 right-0 h-16 w-16  bg-black rounded-2xl bg-opacity-75`;
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



const Fondo=tw.div`bg-gray-800 p-2 align-middle mx-auto text-white  max-w-sm font-mono font-extrabold rounded-xl`; 

//const {cantidad,setCantidad} = useContext(DataContext);

  function FrameBase ({ esPortada=true, tieneAudio=false,altura="350",source="" , Titulo="Titulo", Bajada="Bajada", SubTitulo="Subtitulo",TextoGrisMayuscula="Texto en gris y mayusculas",
    
                      IsVideo=false, IsImagen=false, IsRecorrido=false, IsPlano=false,videoJsOptions={},ImageAlt="imagen" ,sourceInicial="../../standalone/pannellum.htm?config=../tour2.json"}) 


{
  const [sourcelocal,setSourcelocal]=useState(source);
  const {cantidad,setCantidad} = useContext(DataContext);
  const {conjunto,setConjunto} = useContext(DataContext);
  const {intervalo}=useContext(DataContext);                                                     
 // const [archivo,setArchivo]  = useState('');
  const [run, setRun] = useState(true);
  const [counter, setCounter] = useState(-1);
  //const countRef = useRef(count);
  //countRef.current = count;
 const [recorrido, setRecorrido] = useState(null);
// const {recorrido,setRecorrido} = useContext(DataContext);
  const [conjuntoEscenas,setConjuntoEscenas]=useState([]);
  const {escena} = useContext (DataContext);
  const [huboUnCambio, setHuboUnCambio]=useState(false);

   
//------------------------------------------------------------------------------------------------------------------
  useEffect(() => 
  {
    //console.log("useEffect corrige recorrido");
    //console.log("Datos actuales , parametro del componente:  source=",source);
    //console.log("contexto escena=",escena);
    //console.log("state contador=",counter);
    //console.log("state sourcelocal=",sourcelocal);
    //console.log("..........................................................");
let arrayClavesEscenas =[];
let mesirve =[];
let unaEscena ={
  idEscean : "",
  urlpanorama:"",
  title:""
}   
    var sourceCorregido="../../" +source.slice(38);
   
         console.log("Escena recibida",escena);        
         if (escena){
                     ////console.log("escena....=",escena['idEscena']);      
                   // setSourcelocal( "Escena numero="+escena) ; 
                    setCounter(escena);
                    setRun(true);
         
                  } else 
                  {
                    //console.log("todavia no carga escena");
                  
                  }               // eslint-disable-next-line react-hooks/exhaustive-deps 

  
        
        
                    if (sourcelocal) {
                                console.log("sourcedopolocal------------------------------------------=",sourcelocal);
                                sourceCorregido="../../" +sourcelocal.slice(38);

                                } else {//console.log("todavia no carga surcelocal");
                                }
         


                    //console.log("leyando datos desde sourcecorregido=",sourceCorregido);
                    fetch(sourceCorregido)
                               .then(res => res.json())
                                                                .then(datos => {
                                                                                //console.log("tengo los datos=",datos["scenes"]["Banio"]["title"],"panorama=",datos["scenes"]["Banio"]["panorama"]);
                                                                                //setRecorrido(datos);
                                                                                setCounter(-1);
                                                                               // arrayClavesEscenas = Object.keys(datos["scenes"]) ;
                                                                               // console.log("arrayclaves=",arrayClavesEscenas);
                                                                                // mesirve = arrayClavesEscenas.map( function( escenita){
                                                                                  //console.log(datos["scenes"][escenita]);
                                                                                 // return datos["scenes"][escenita];
                                                                               // }
                                                                               

                                                                                //);
                                                                                 //console.log("mesirce=",mesirve);
                                                                                setConjuntoEscenas(Object.keys(datos["scenes"]));
                                                                                //setConjuntoEscenas(mesirve);
                                                                                setConjunto(datos["scenes"]);
                                                                               // console.log("conjuntodeEscenas",conjuntoEscenas);
                                                                                setCantidad((Object.keys(datos["scenes"]).length));
                                                                                setHuboUnCambio(true);
                                                                                setRecorrido(datos);
                                                                              }
                                                                        )
                                                                        .catch(function() {
                                                                        //  alert("eror de descarga");
                                                                          ////console.log("cargando");
                                                                        }
                                                                        ); 

                                     

                    return () => {                    ////console.log("limpieza ussefect recorrido");
                                  }
                                  
  } ,[escena,source]
                 );
  
//-------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {

          //console.log("usefect counter navegacion");
      function Navegacion(){
  
        var ifrm = document.getElementById('mipannellum')
          var miviewer= ifrm.contentWindow.viewer
        var pitch=0;
        var yaw=0;
        var hfov=120;
                  if(miviewer&&conjuntoEscenas){
                    ////console.log("tengo viewer y conjuntoescenas:",conjuntoEscenas);
                     let pitch0=recorrido['default']['pitch'];
                      let    yaw0=recorrido['default']['yaw'];
                      let hfov0 =recorrido ['default']['hfov'];
                    if (counter===-1){
                      //console.log("inicioooooo");
                      console.log('ptch0,yaw0,hfov0 :>> ', pitch0,yaw0,hfov0);

                      miviewer.loadScene("Ingreso",pitch0,yaw0,hfov0)} else {
                        if (recorrido&conjuntoEscenas) {  
                          //console.log("recorrido=",recorrido);
                          //console.log("navegacion conjuntoEscenas=",conjuntoEscenas[counter]);
                          //console.log("Navegacion Recorrido=",recorrido['scenes'][conjuntoEscenas[counter]]);
                          ////console.log(recorrido);
                          pitch=recorrido['scenes'][conjuntoEscenas[counter]]['pitch'];
                          yaw=recorrido['scenes'][conjuntoEscenas[counter]]['yaw'];
                          hfov=recorrido['scenes'][conjuntoEscenas[counter]]['hfov'];
                        }
                      //console.log("Cambiando a escena=",conjuntoEscenas[counter]);
                  miviewer.loadScene(conjuntoEscenas[counter],pitch,yaw,hfov)}
                    miviewer.lookAt(pitch,yaw,hfov,4000);
                  //  miviewer.lookAt(0,0,120,4000);
                }
          }



     ////console.log("useeffect run=",intervalo);
     //console.log("empieza aumentando el contador .......=",counter);
     const   lacuenta =  setTimeout(() => setCounter(counter + 1), intervalo);
          //console.log("termina aumentando el contador .......=",counter);
     if (run&&sourcelocal) { 
      Navegacion(); 
     }
     // counter < (cantidad + 1) && lacuenta() ;
     // ////console.log("counter useEffect=",counter,"cantidad=",cantidad);

     
     if (counter===(cantidad) ) {
      //console.log("reiniciando secuencia:",counter); 
      
      setCounter(-1);
      
      }
      if (huboUnCambio){
        //console.log("hubo un cambio");
        setHuboUnCambio(false);
       /*  return() => {
          //console.log("cleanup counter");   
          clearTimeout(lacuenta);}   */
      }
      
    
     return() => {
      //console.log("cleanup counter");   
      clearTimeout(lacuenta);} 
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
      



 /*  function verViewer (){
setCounter(counter-1);
  } */

  function  Botonera () {

  function handleClick(event) {
    //alert('clicked');
   //console.log("botonera run=",run);
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

                 <button onClick={handleClick}>{run?"Parar recorrido automático":"Recorrido automático"}</button>
                 
                  
                                     
                                     
                                   
            </Fondo>
        );
        //////console.log("counter en botonera=",counter);
   }




 
if (!sourcelocal) { return <div></div>; }
else {
const src = sourcelocal;
//setArchivo(source);
//reco height={esPortada? 220 :altura}  width={220*1.33}
// imagenheight={altura}  alt={ImageAlt}
  return (<>

                      <Card>
                 
                         { IsVideo && <IconoReco><IconoVideo360 /></IconoReco>}
                         { IsRecorrido && <IconoReco><IconoRecorrido /></IconoReco>}
                         {IsImagen &&  <IconoReco><IconoAerea /></IconoReco>}
                       
                        <CardHeader>
                                { IsVideo && <VideoPlayer { ...videoJsOptions }/> }

                                { IsRecorrido &&
                                    <>
                                   {/*  <Centrador> */}
                                        <iframe id="mipannellum" title="recorrido"    allowFullScreen src={src}/>
                                         
                                     {tieneAudio && <audio controls autoPlay="autoplay"  loop="loop" src="../../images/audio.mp3" ></audio>
                                     }
                                     
                                      
                                    {/* </Centrador> */}
                                   
                                   
                                      <Botonera/>
                                   
                                    </>
                                  }
                                {IsImagen && <img src={source?source:sourceInicial}  height={altura}  alt={ImageAlt} />}
                        
                        </CardHeader>
                        {!IsPlano && <>
                             <CardCompany>{Titulo}</CardCompany> 
                               <CardType>{Bajada}</CardType> 
                              <CardTitle>{SubTitulo}</CardTitle>
                              <CardMeta>
                                <CardMetaFeature>{TextoGrisMayuscula}</CardMetaFeature>
                                
                              </CardMeta>
                              ....
                              </>
                        }
                    {!esPortada  && <FrameGaleria/> }
                      </Card> 
                     
                       

          
     </> )
}
};

export default FrameBase;

