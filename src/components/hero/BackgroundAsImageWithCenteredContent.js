import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
//import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import FrameBase from "../propios/FrameBase";
import { components } from "ComponentRenderer.js";
//import LandPage from 'components/propios/LandPage';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
${tw`relative  z-10 -mx-8 -mb-8 -my-10  bg-top  bg-cover`}
background-image: url("images/aereos2.jpg");
`; 

//const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
//const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

//const Heading = styled.h1`
//  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
//  span {
//    ${tw`inline-block mt-2`}
//  }
//`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm 
sm:text-base sm:mt-16 sm:px-8 
sm:py-4 bg-gray-100 font-bold shadow transition duration-300 
bg-primary-500 text-gray-100 hocus:bg-primary-700 
hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

 const StyledHeader = styled(Header)`
  ${tw`pt-6 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

//const OpacityOverlay = tw.div`-z-10 absolute inset-0  h-full bg-black bg-opacity-50  `;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-0 mx-auto h-full flex flex-col`;
//const HeroContainer = tw.div`z-20   sm:px-0 mx-auto  flex flex-col`;
const Content = tw.div` flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-xl text-center  md:text-4xl  lg:text-4xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:pt-2 md:p-24`}
  span {
    ${tw`inline-block mt-2`}
  }
`; 
const SubHeading = tw.div`sm:text-sm text-purple-600 md:text-4xl`;
const GrillaPortada = tw.div`grid lg:grid-cols-3 gap-5 p-0 sm:grid-cols-1 pt-8  `;
const CajaContenido  = tw.div`bg-white mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs sm:max-w-screen-sm `;
const BannerFondo=tw.div` lg:hidden bg-left-top bg-auto bg-repeat-x  text-white`;

const Tope=styled.div`-mt-64 `;
const Llamador =tw.div`relative flex flex-1 bg-primary-500 w-full p-2 mx-auto text-white font-extrabold items-end`;
const MenuEncabezado =tw.span`bg-primary-500  p-4 text-white font-extrabold `;
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
  width : "450" ,
  projection : 'Cube',
  poster :'../video/jfk-poster.jpg',
  notSupportedMessage: false,
  sources: [{
    src: misrcvideo,
    type: 'video/mp4'
  }]
}
const caracteristicas = components['propios']['LandPage']['url'];
const landpagebase = components['propios']['LandPBase']['url'];

const clientes = components['propios']['ClientesPage']['url'];  //hacerla con mibanner



const contactos =components['blocks']['Form']['elements']['SimpleContactUs']['url'];

 
export default () => {   
  
  const MisLinks = [
   <NavLinks  key={1}>
      
     
              <NavLink href={clientes}>
      Área Clientes
     
      </NavLink> 
      
      <PrimaryLink href={caracteristicas}>Casos de uso</PrimaryLink>
      
      <PrimaryLink href={contactos}>Contacto</PrimaryLink><PrimaryLink href={landpagebase}>Recorridos Ciudad de La Plata</PrimaryLink>
     
    </NavLinks> ];
 return (  
      <> 
           
        <Container> 
          <OpacityOverlay/> 
          <HeroContainer>  
            <StyledHeader links={MisLinks} /> 
             <Content> 
             
               <Heading>
                   Recorridos virtuales<br/>
                   Video 360º y aéreos
                   <SubHeading>vtour.com.ar</SubHeading>
               </Heading>  <BannerFondo > <a href="/components/propios/LandPage">Ejemplos </a>
      
     </BannerFondo> 
                 <GrillaPortada>
                  
                  <CajaContenido>
                     <FrameBase esPortada={true} tieneAudio={false} altura={window.innerWidth>900?350:250} source= {misrc}
                  Titulo="Recorrido 360º"
                  Bajada="La mejor forma de mostrar"
                  SubTitulo="Resalte lo importante"
                  TextoGrisMayuscula="Un recorrido a las virtudes de su producto"
                  videoJsOptions ={ videoParametros}
                  IsRecorrido='true'/> 
                 </CajaContenido>
                 
                 
            <CajaContenido> <FrameBase altura={window.innerWidth>600?450:250} source= {misrcvideo}
                  Titulo="Video 360º"
                  Bajada="Experiencia inmersiva"
                  SubTitulo="Video 360º "
                  TextoGrisMayuscula="Herramienta excelente para promocionar eventos y productos"
                  videoJsOptions ={ videoParametros}
                  IsVideo='true'/> 
                 </CajaContenido> 
                  <CajaContenido> <FrameBase altura={window.innerWidth>600?450:250} source= {misrcImagen}
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
