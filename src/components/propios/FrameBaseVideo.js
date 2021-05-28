import React from 'react';
import tw from "twin.macro";

import IconoVideo360 from './IconoVideo360';
import styled from "styled-components";

import VideoPlayer from 'components/propios/VideoPlayer';



const Card = tw.div`relative top-auto  bg-blue-900 max-w-screen-sm     rounded-2xl   p-4 `;
const IconoReco = tw.div`absolute  z-10 top-0 right-0 h-16 w-16  bg-black rounded-2xl bg-opacity-75`;




const CardHeader = tw.div` bg-black  p-2  flex flex-col  rounded-xl  `;
const CardCompany = tw.div`text-primary-500 font-bold mt-2 text-2xl bg-black text-center bg-opacity-75 p-4 rounded-2xl`;
const CardType = tw.div`font-semibold text-sm text-gray-600 text-right p-2`;
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
 
videoJsOptions.altura=altura;
console.log("alturavideo=",videoJsOptions.altura);
  return (<>

                      <Card>
                     <IconoReco><IconoVideo360 /></IconoReco>                    
                        <CardHeader>
                                 <VideoPlayer { ...videoJsOptions }/> 
                        </CardHeader>
                        {!IsPlano && <>
                               <CardCompany>{Titulo}</CardCompany> 
                               <CardType>{Bajada}</CardType> 
                              <CardTitle>{SubTitulo}</CardTitle>
                              <CardMeta>
                                <CardMetaFeature>{TextoGrisMayuscula}</CardMetaFeature>
                              </CardMeta>
                              
                              </>
                        }
                     
                      </Card>  
                     
                       

          
     </> )

};

export default FrameBaseVideo;

