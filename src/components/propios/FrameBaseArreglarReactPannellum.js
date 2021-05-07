import React, { useContext } from 'react';
import tw from "twin.macro";
import IconoRecorrido from './IconoRecorrido';
import IconoAerea from './IconoAerea';
import IconoVideo360 from './IconoVideo360';
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import VideoPlayer from 'components/propios/VideoPlayer';


import { ReactComponent as VrIcon } from "feather-icons/dist/icons/nuevovr.svg";
import { DataContext } from 'context/DataContext';



//import { DataProvider } from './context/DataContext';

import ReactPannellum, { getConfig ,getViewer,getAllScenes,addScene} from "react-pannellum";



const Card = tw.div`relative top-0 bg-white  mx-auto xl:mx-0 xl:ml-auto max-w-full md:max-w-full lg:max-w-full xl:max-w-full p-5 `;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded-2xl`
]);

const CardText = tw.div`mt-0 p-4`;

const CardHeader = tw.div`flex justify-between   items-center`;
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
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;
const TituloPrimary = tw.div`text-primary-500 font-bold text-lg`;
const cards = [
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
  const IconoReco = tw.div`absolute  z-10 top-0 right-0 h-16 w-16 `;
  const PosicionImagen = tw.div`z-0 relative mt-0 `;
 // const EmbedContainer =tw.div`relative bg-green-300 w-full h-full overflow-hidden `;
  
  //const EembedContainerIframe =tw.div`absolute  bg-red-300 pb-2 top-0 ml-0  h-full     `;


// TipoMedio puede ser Imagen, Video, Video360, Recorrido
const Escenario = tw.div`bg-black p-2`;




const circle = {
    
    "author": "VTOUR",
   
    "panorama": "../../../images/distribuidor.jpg",
    "hotSpotDebug" : false,
    
    "type": "equirectangular",
    
    "hotSpots": [
        {
            "pitch": -2.1,
            "yaw": 132.9,
            "type": "scene",
            "text": "Spring House or Dairy",
            "sceneId": "house"
        }
    ]
  }
;



const configPannellum = "../tour1.json";
  function FrameBase ({ source ,

    Titulo="Titulo",
    Bajada="Bajada",
    SubTitulo="Subtitulo",
    TextoGrisMayuscula="Texto en gris y mayusculas",
    
    IsVideo=false,
    IsImagen=false,
    IsRecorrido=false,
    IsPlano=false,
    videoJsOptions={},
    ImageAlt="imagen"
    
  }) 

  { 




    function agregarEscenas() {
    
    console.log("datos");
    const viewer = getViewer();
    viewer.addScene('circle',{
      
      "author": "VTOUR",
   
      "panorama": "../../../images/distribuidor.jpg",
      "hotSpotDebug" : false,
      
      "type": "equirectangular",
      
      "hotSpots": [
          {
              "pitch": -2.1,
              "yaw": 132.9,
              "type": "scene",
              "text": "Spring House or Dairy",
              "sceneId": "house"
          }
      ]
    }
    )
      
    
 
    
    //viewer.loadScene('circle');
  console.log(getAllScenes());
  console.log(getConfig());
  //viewer.loadScene('circle');
  };

  
  const viewer = ReactPannellum.getViewer();
  const todasEscenas = ReactPannellum.getAllScenes();
  

const {escena} = useContext (DataContext);
  if (!source) { return <div>Cargando...</div>; }

  const src = source;
  /* const config = {
    autoRotate: -2,
  }; */
  //"imageSource":"https://pannellum.org/images/alma.jpg",
 const config1 = {
  
    "author": "VTOUR",
    "sceneFadeDuration": 1000,
    "crossOrigin" : "anonymous",
    "autoLoad": false,
    "preview" : "../../../images/uno.jpeg",
    "panorama": "https://pannellum.org/images/alma.jpg",

    "hotSpotDebug" : false,
    "autoRotate":"3",
    "hotSpots": [
        {
            "pitch": -0.6,
            "yaw": 37.1,
            "type": "scene",
            "text": "Circle",
            "sceneId": "circle",
           
            "targetYaw": -23,
            "targetPitch": 2
        },
        {
            "Pitch": 5.779161585054486, "yaw": -177.90427227551993, "Center Pitch": 7.147551615146719, "Center Yaw": 159.9220040972827, "HFOV": 100,
            "type": "scene",
            "text": "Nuevo",
            "sceneId": "house",
            "targetYaw": -23,
            "targetPitch": 2
        }

    ]

}


 
 
  return (<>

                      <Card>
                         { IsVideo && <IconoReco><IconoVideo360 /></IconoReco>}

                        { IsRecorrido && <IconoReco><IconoRecorrido /></IconoReco>}
                        {IsImagen &&  <IconoReco><IconoAerea /></IconoReco>}
                       
                        <CardHeader>
                          { IsVideo && <VideoPlayer { ...videoJsOptions }/> }

                          { IsRecorrido &&
                         // <EmbedContainer>
                         // <EembedContainerIframe>
                         <>
                           
                           <iframe title="recorrido" height="63%" width="100%" allowFullScreen src={src}/>  
                           <Escenario>{escena.idEscena}</Escenario>
                           <div>
        <ReactPannellum
          id="1"
           sceneId="primera"
           imageSource="https://pannellum.org/images/alma.jpg"

           //imageSource = "../../../images/uno.jpeg"
          
           config ={config1}
         
                  />
                  
    
        <div onClick={()=> agregarEscenas()}>Click me</div>
      </div> 
                           </>

                          //</CardHeader> </EembedContainerIframe>
                          // </EmbedContainer>
                           }
                          {IsImagen &&  <img src={source} width="100%" alt={ImageAlt} />}
                          
                          
           
                        
                        </CardHeader>
                        {!IsPlano && <>
                        <CardCompany>{Titulo}</CardCompany>
                        <CardType>{Bajada}</CardType>
                        <CardTitle>{SubTitulo}</CardTitle>
                      <CardMeta>
                        <CardMetaFeature>
                          {TextoGrisMayuscula} 
                        </CardMetaFeature>
                      </CardMeta></>
                      }
                     
                      </Card> 

          
     </> )

};

export default FrameBase;


/* var pano = document.getElementById('pano').contentWindow; 
var pitch = pano.config.pitch; 
var yaw = pano.config.yaw; 
var scene = pano.config.activeScene; 

will allow you to read values; after changing a value 
(except activeScene), 
run pano.animate(); */