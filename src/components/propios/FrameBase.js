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

const Card = tw.div`relative top-auto  bg-blue-900      rounded-2xl   p-2 `;
/* const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded-2xl`
]);
 */
//const CardText = tw.div`mt-0 p-4`;

const CardHeader = tw.div` bg-black  p-0  flex flex-col  rounded-xl  `;
const CardCompany = tw.div`text-primary-500 font-bold mt-2 text-xl bg-black text-center bg-opacity-75 p-4 rounded-2xl`;
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

const IconoReco = tw.div`absolute  z-10 top-0 right-0 h-16 w-16   rounded-2xl bg-opacity-50`;

//const Fondo = ({corriendo}) => (
//<div css={[tw`-mt-4    p-1 border-4 border-gray-200 align-middle mx-auto text-white  max-w-sm font-mono font-thin rounded-xl hover:border-green-800`, corriendo && tw`bg-red-400`]}/>
//); 



//<div className=`flex ${primary ? "bg-indigo-600" : "bg-indigo-300"} inline-flex items-center border border-transparent text-xs font-medium rounded shadow-sm text-white hover:bg-indigo-700 focus:outline-none`>
const Fondo = ({corriendo}) => (
  tw.div`-mt-4    p-1 border-4 border-gray-200 align-middle mx-auto text-white  max-w-sm font-mono font-thin rounded-xl hover:border-green-800`
);
//`;
//const Fondo1 = styled.div`
//${tw`-mt-4    p-1 border-4 border-gray-200 align-middle mx-auto text-white  max-w-sm font-mono font-thin rounded-xl hover:border-green-800`}
//`; 

//const {cantidad,setCantidad} = useContext(DataContext);

  function FrameBase ({ esPortada=true, tieneAudio=false,altura=null,source="" , Titulo="Titulo", Bajada="Bajada", SubTitulo="Subtitulo",TextoGrisMayuscula="Texto en gris y mayusculas",
    
                      IsVideo=false, IsImagen=false, IsRecorrido=false, IsPlano=false,videoJsOptions={},ImageAlt="imagen" ,sourceInicial="../../standalone/pannellum.htm?config=../tour2.json"}) 


{
  const [sourcelocal]=useState(source);
  const {cantidad,setCantidad} = useContext(DataContext);
  const {setConjunto} = useContext(DataContext);
  const {intervalo}=useContext(DataContext);                                                     
 // const [archivo,setArchivo]  = useState('');
  const [run, setRun] = useState(true);
  const {escena,setEscena} = useContext (DataContext);
  const [counter, setCounter] = useState(null);
  //const countRef = useRef(count);
  //countRef.current = count;
 const [recorrido, setRecorrido] = useState(null);
// const {recorrido,setRecorrido} = useContext(DataContext);
  const [conjuntoEscenas,setConjuntoEscenas]=useState([]);
  
  const [huboUnCambio, setHuboUnCambio]=useState(false);

   
//------------------------------------------------------------------------------------------------------------------
  
function Navegacion(){
  
  var ifrm = document.getElementById('mipannellum')
    var miviewer= ifrm.contentWindow.viewer
  let pitch=0;
  var yaw=0;
  var hfov=120;
//  console.log("Navegacion.............................................................................")
            if(miviewer&&conjuntoEscenas){
                        //console.log("tengo viewer y conjuntoescenas:",conjuntoEscenas);
                        let pitch0=recorrido['default']['pitch'];
                        let    yaw0=recorrido['default']['yaw'];
                        let hfov0 =recorrido['default']['hfov'];
                        if (counter===-1)
                                  {
                                   // console.log("inicioooooo");
                                    //console.log('ptch0,yaw0,hfov0 :>> ', pitch0,yaw0,hfov0);

                                    miviewer.loadScene("Ingreso",pitch0,yaw0,hfov0);
                                    //miviewer.loadScene(conjuntoEscenas[0],pitch,yaw,hfov)
                                  } 
                            else 
                                  {   //console.log("recorrido=",recorrido);

                                    if (recorrido&&conjuntoEscenas) {  
                                                                     // console.log("contador=",counter," cantidad=",cantidad);
                                                                    //console.log("navegacion conjuntoEscenas=",conjuntoEscenas[counter]);
                                                                    //console.log("Navegacion Recorrido=",recorrido['scenes'][conjuntoEscenas[counter]]);
                                                                    ////console.log(recorrido);
                                                                    if (counter <cantidad) {
                                                                    pitch=recorrido['scenes'][conjuntoEscenas[counter]]['pitch'];
                                                                    yaw=recorrido['scenes'][conjuntoEscenas[counter]]['yaw'];
                                                                    hfov=recorrido['scenes'][conjuntoEscenas[counter]]['hfov'];
                                                                    //console.log("escena=",recorrido['scenes'][conjuntoEscenas[counter]]['title']); 
                                                                    
                                                                    }
                              
                                                                  }
                            miviewer.loadScene(conjuntoEscenas[counter],pitch,yaw,hfov)}
                            //alternate
                            var signo = (-1) ** counter;

                            miviewer.lookAt(pitch+5*signo ,yaw-5*signo,hfov+5*signo,1000);
                            //miviewer.lookAt(pitch ,yaw,hfov-20,4000);
                          //console.log("Cambiando a escena=",conjuntoEscenas[counter]);
                    
                      // miviewer.lookAt(0,-100,10,10000);
          }
    }
useEffect(() => 
  {
   
   var sourceCorregido="../../" +source.slice(38);
   //console.log("Framebase...................................................useffect recorrido................");
   //console.log("Escena recibida",escena);        
  
     
                               // eslint-disable-next-line react-hooks/exhaustive-deps 
        
                    if (sourcelocal) {
                                sourceCorregido="../../" +sourcelocal.slice(38);
                                } 
                    fetch(sourceCorregido)
                               .then(res => res.json())
                                                       .then(datos => {
                                                                                setConjuntoEscenas(Object.keys(datos["scenes"]));
                                                                                setConjunto(datos["scenes"]);
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
   } ,[]);

   useEffect(() => 
  {
      //console.log("Useffect cambio de escena --------------------------------------")
      setCounter(escena);
      setRun(true);
  } ,[escena]);
     

  
  
//-------------------------------------------------------------------------------------------------------------------------------------------


useEffect(() => {
                                      

                
                  
                

                //const   lacuenta =  setTimeout(() => setCounter(escena&&(escena!=counter)?escena:counter+1), intervalo); 
                const   lacuenta =  setTimeout(() => setCounter(counter+1), intervalo); 
                //setEscena(counter);
                //setEscena(counter)      ;
                  
                if (run&&sourcelocal) {
                  //console.log("Navegacion") ;
                  Navegacion(); 
                }
                
                if (counter===(cantidad) ) { setCounter(0); }
                //setEscena(counter)  ;
                
                if (huboUnCambio){ setHuboUnCambio(false); }
                  
                return() => {
                        if (lacuenta) {  
                        clearTimeout(lacuenta);}} 


                  // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [counter ] );



  
  function  Botonera () {

  function handleClick(event) {
    //alert('clicked');
   //console.log("botonera run=",run);
    if(run){
    setRun(false);
    //setCounter(escena);
    } else {setRun(true)}
    //setCounter(escena+1);
     event.preventDefault();
    event.stopPropagation(); 
  }


 //<Fondo css={tw`bg-red-400`}>
  return (
                <Fondo>
                
                
             
             
           
                {/* <p>You clicked {counter} times</p> */}
                
                  
                 
                 {/*  <button onClick={(e) => setCounter(0)}>Inicio</button> 
                 
                 <button onClick={() => setCounter(counter+1)}>Adelante</button>
                 <button onClick={() => setCounter(counter-1)}>Atras</button> */}
                 
                
                 <button onClick={handleClick}>{run?"Parar":"Arrancar"}</button> 
                 
                         
                         </Fondo>         
            
        );
        //////console.log("counter en botonera=",counter);
   }
 
if (!sourcelocal) { return <div></div>; }
else {
const src = sourcelocal;

  return (<>

                      <Card>
                 
                         { IsVideo && <IconoReco><IconoVideo360 /></IconoReco>}
                         { IsRecorrido && <IconoReco tw=" -mt-8 pt-8 " ><IconoRecorrido /></IconoReco>}
                         {IsImagen &&  <IconoReco><IconoAerea /></IconoReco>}
                       
                        <CardHeader>
                                { IsVideo && <VideoPlayer { ...videoJsOptions }/> }

                                { IsRecorrido &&
                                    <>
                                   {/*  <Centrador> */}<Botonera/>
                                   <small>Para detener el cambio automático de imagenes click en "Parar","Arrancar" para continuar</small>
                                        <iframe id="mipannellum" title="recorrido"  height={altura} allowFullScreen src={src}/>
                                         
                                     {tieneAudio && <audio controls autoPlay="autoplay"  loop="loop" src="../../images/audio.mp3" ></audio>
                                     }
                                     
                                      
                                    {/* </Centrador> */}
                                   
                                   
                                      
                                   
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

