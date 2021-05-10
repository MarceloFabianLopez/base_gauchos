import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
//import IconoAerea from 'components/propios/IconoAerea';
//import IconoRecorrido from 'components/propios/IconoRecorrido';
import Header from "../headers/light.js";
import {NavLinks,NavLink,PrimaryLink,LogoLink, NavToggle, DesktopNavLinks} from '../headers/light';

//import MiFrame from "../propios/MiFrame";
//import Frame from "../propios/Frame";
//import MiVideo from "../propios/MiVideo";
import FrameBase from "../propios/FrameBase";
//import IconoVideo360 from "components/propios/IconoVideo360.js";
import { components } from "ComponentRenderer.js";
//import LandPage from 'components/propios/LandPage';
import WhatsAppWidget from 'react-whatsapp-widget';

import 'react-whatsapp-widget/dist/index.css';
//import IconoInmoPack from "components/propios/IconoInomPack.js";
//import PortfolioTwoCardsWithImage from "components/cards/PortfolioTwoCardsWithImage.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

//const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -z-50 -mx-8 -mb-8 -my-10  bg-top  bg-cover
    `}
  background-image: url("images/aereos2.jpg");
`;

const OpacityOverlay = tw.div`-z-10 absolute inset-0  h-full bg-black bg-opacity-50  `;

const HeroContainer = tw.div`z-20   sm:px-0 mx-auto  flex flex-col`;
const Content = tw.div`flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-xl text-center  md:text-4xl  lg:text-4xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:p-20 md:p-24`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const SubHeading = tw.div`sm:text-sm text-purple-600 md:text-4xl`;
const GrillaPortada = tw.div`mx-auto   grid lg:grid-cols-3 gap-5 p-5 sm:grid-cols-1  `;
const CajaContenido  = tw.div`bg-white mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs `;
const BannerFondo=tw.div` bg-green-800 bg-left-top bg-auto bg-repeat-x `;
//const =tw.div` `;
const Tope=styled.div`-mt-64 `;
const Llamador =tw.div`relative flex flex-1 bg-primary-500 w-full p-2 mx-auto text-white font-extrabold items-end`;

const misrc = "../standalone/pannellum.htm?config=../tour1.json";
const misrcvideo = "../video/tres.mp4";
const misrcImagen="../../images/repu2.png";
const videoParametros = {
  autoplay: false,
  preoload : 'auto',
  autoload :true,
  controls: true,
  
  fluid :true ,
  responsive :true,
  width : "600" ,
  projection : '360',
  poster :'../video/jfk-poster.jpg',
  notSupportedMessage: false,
  sources: [{
    src: misrcvideo,
    type: 'video/mp4'
  }]
}

export default ({
  
  //caracteristicas = components['blocks']['Features']['elements']['ThreeColWithSideImage']['url'],
 }) => {

const caracteristicas = components['propios']['LandPage']['url'];

const clientes = components['propios']['ClientesPage']['url'];  //hacerla con mibanner



const contactos =components['blocks']['Form']['elements']['SimpleContactUs']['url'];



  const MisLinks = [
    
    <NavLinks key={1}>
       <NavLink href={caracteristicas}>
      Ejemplos
     
      </NavLink> 
       <NavLink href={clientes}>
      Área Clientes
     
      </NavLink>
             
      <PrimaryLink href={contactos}>Contacto</PrimaryLink>
     
    </NavLinks>
  ];

  return (  
      <> 
           
        <Container>{/*  <OpacityOverlay/>  */}
          
          <HeroContainer>   <StyledHeader links={MisLinks} />  
             <Content>
             <BannerFondo> <Llamador>Vea ejemplos</Llamador></BannerFondo>
               <Heading> 
                   Recorridos virtuales<br/>
                   Video 360º y aéreos
                   <SubHeading>vtour.com.ar</SubHeading>
               </Heading> 
                 <GrillaPortada>
                  
                  <CajaContenido><FrameBase source= {misrc}
                  Titulo="Recorrido 360º"
                  Bajada="La mejor forma de mostrar"
                  SubTitulo="Resalte lo importante"
                  TextoGrisMayuscula="Un recorrido a las virtudes de su producto"
                  videoJsOptions ={ videoParametros}
                  IsRecorrido='true'/>
                 </CajaContenido>
                 
                 
                 <CajaContenido><FrameBase source= {misrcvideo}
                  Titulo="Video 360º"
                  Bajada="Experiencia inmersiva"
                  SubTitulo="Es como estar ahí..."
                  TextoGrisMayuscula="Herramienta excelente para promocionar eventos y productos"
                  videoJsOptions ={ videoParametros}
                  IsVideo='true'/>
                 </CajaContenido>
                  <CajaContenido><FrameBase source= {misrcImagen}
                  Titulo="Vistas aéreas"
                  Bajada="La otra mirada"
                  SubTitulo="Imprescindible"
                  TextoGrisMayuscula="Agregue una dimensión a sus ventas"
                  videoJsOptions ={ videoParametros}
                  IsImagen='true'/>
                  </CajaContenido>
                    </GrillaPortada>
                    <WhatsAppWidget phoneNumber='542216701280'
                                    textReplyTime='Este es un mensaje automatizado, lo antes posible una persona de nuestro equipo lo contactará! '
                                      message= 'Hola!  En que podemos ayudarlo/a?'
                                      companyName="VTOUR"
                                      sendButton="ENVIAR WSP" className="relative t-0"
                                      />
                   </Content>
            </HeroContainer>
        </Container>
      </>
  );

};
/*   <div className=" -mx-8 -mb-8"> */