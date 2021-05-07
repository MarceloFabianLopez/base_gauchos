import React from 'react';
import tw from "twin.macro";
import IconoRecorrido from './IconoRecorrido';
import styled from "styled-components";
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

//import { ReactComponent as VrIcon } from "feather-icons/dist/icons/nuevovr.svg";

const Card = tw.div`relative top-0 bg-white mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs p-5 `;
//const CardImage = styled.div(props => [

//`background-image: url("${props.imageSrc}");`,
//  tw`h-80 bg-cover bg-center rounded`
//]);

//const CardText = tw.div`mt-0 p-4`;

const CardHeader = tw.div`flex justify-between items-center `;
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
  const IconoReco = tw.div`absolute  top-0 right-0 h-16 w-16 `;

  function MiFrame({ source }) {

  if (!source) { return <div>Cargando...</div>; }

  const src = source;

  return (<>

          
                      <Card>
                       <IconoReco><IconoRecorrido /></IconoReco>
                        <CardHeader>
                        <iframe title="recorrido" width="100%" allowFullScreen src={src}></iframe>
                        
                        </CardHeader>
                        <CardCompany>{cards[0].company}</CardCompany>
                        <CardType>{cards[0].type}</CardType>
                        <CardTitle>{cards[0].title}</CardTitle>
                      <CardMeta>
                        <CardMetaFeature>
                          Quis enim exercitation adipisicing nulla irure dolor. 
                        </CardMetaFeature>
                      </CardMeta>
                     
                      </Card> 

          
     </> )

};

export default MiFrame;
