import React from 'react';
import tw from "twin.macro";


import IconoVideo360 from './IconoVideo360';
import styled from "styled-components";

import VideoPlayer from 'components/propios/VideoPlayer';



const Card = tw.div`relative top-auto  bg-blue-900 max-w-screen-sm     rounded-2xl   p-2 `;

const CardHeader = tw.div` bg-black  p-2  flex flex-col  rounded-xl  `;
const CardTitle = tw.h5`text-xl mt-2 text-white font-extrabold`;
const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;
const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

  function FrameBaseVideo ({ esPortada=true, tieneAudio=false,altura="350",source="" , Titulo="Titulo", Bajada="Bajada", SubTitulo="Subtitulo",TextoGrisMayuscula="Texto en gris y mayusculas",
    
                       IsPlano=false,videoJsOptions={}}) 


{
 

  return (<>

                      <Card>
                 
                         <IconoVideo360 />                       
                        <CardHeader>
                                 <VideoPlayer { ...videoJsOptions }/> 
                        </CardHeader>
                        {!IsPlano && <>
                              {/* <CardCompany>{Titulo}</CardCompany> */}
                             {/*  <CardType>{Bajada}</CardType> */}
                              <CardTitle>{SubTitulo}</CardTitle>
                              <CardMeta>
                                <CardMetaFeature>{TextoGrisMayuscula}</CardMetaFeature>
                              </CardMeta></>
                        }
                     
                      </Card>  
                     
                       

          
     </> )

};

export default FrameBaseVideo;

