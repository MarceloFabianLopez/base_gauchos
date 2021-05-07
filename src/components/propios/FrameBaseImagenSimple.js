import React from 'react';
import tw from "twin.macro";

import styled from "styled-components";
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

//import { ReactComponent as VrIcon } from "feather-icons/dist/icons/nuevovr.svg";

const Card = tw.div`relative top-0  bg-white mx-auto  p-5 `;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 w-full bg-cover bg-center rounded-2xl`
]);

//const CardText = tw.div`mt-0 p-4`;

const CardHeader = tw.div`flex justify-between items-center `;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
//const CardType = tw.div`font-semibold text-sm text-gray-600 text-right `;
//const CardTitle = tw.h5`text-xl mt-2 font-bold`;

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

 
// TipoMedio puede ser Imagen, Video, Video360, Recorrido
  function FrameBaseImagenSimple ({ source ,

    Titulo="Titulo",
   
    TextoGrisMayuscula="Texto en gris y mayusculas",
    
    ImageAlt="imagen"
    
  }) 
  {

  //if (!source) { return <div>Cargando...</div>; }

  //const src = source;


  return (<>

          
                      <Card>
                        
                        <CardHeader>
                         
{/* 
                          <img src={source} width="100%" alt={ImageAlt} />
                          
                           */}
                          {Titulo}
                        
                        </CardHeader>
                        <CardImage imageSrc={source}></CardImage>

                        <CardCompany>{Titulo}</CardCompany>
                        
                      <CardMeta>
                        <CardMetaFeature>
                          {TextoGrisMayuscula} 
                        </CardMetaFeature>
                      </CardMeta>
                     
                      </Card> 

          
     </> )

};

export default FrameBaseImagenSimple;
