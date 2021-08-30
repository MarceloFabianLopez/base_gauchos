import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
//import YouTube from 'react-youtube';

//import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks,  LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import FrameBase from "../propios/FrameBase";
import { components } from "ComponentRenderer.js";
//import LandPage from 'components/propios/LandPage';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
//import FrameBaseImagen from "components/propios/FrameBaseImagen.js";
import FrameBaseVideo from "components/propios/FrameBaseVideo"
//const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
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

/* const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm 
sm:text-base sm:mt-16 sm:px-8 
sm:py-4 bg-gray-100 font-bold shadow transition duration-300 
 text-gray-100 hocus:bg-primary-700 
hocus:text-gray-200 focus:outline-none focus:shadow-outline`;


*/
/* 
const opts = {
  height: '200',
  width: '300',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    'controls': 0 ,
  },
};
 */
const StyledHeader = styled(Header)`
  ${tw`pt-6 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-200 hover:border-primary-500 hover:text-primary-500 `}
  }
  ${NavToggle}.closed {
    ${tw`text-red-500 hover:text-primary-500`}
  }
`;
 
//const OpacityOverlay = tw.div`-z-10 absolute inset-0  h-full bg-black bg-opacity-50  `;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-2 mx-auto h-full flex flex-col`;
//const HeroContainer = tw.div`z-20   sm:px-0 mx-auto  flex flex-col`;
const Content = tw.div`flex-1 flex-col  items-center`;
// ${tw` text-xl text-center  md:text-4xl  lg:text-4xl xl:text-6xl font-bold text-gray-200 leading-snug  sm:-mt-20  md:p-24`}
const Heading = styled.h1`
  ${tw` text-xl text-center  text-white -mt-10  md:text-4xl  lg:text-4xl xl:text-6xl font-bold     sm:mt-4`}
  span {
    ${tw`inline-block mt-0`}
  }
`; 
//xl:grid-cols-3     sm:grid-cols-1 pt-8 justify-items-center
const SubHeading = tw.div`relative sm:text-sm text-purple-600 md:text-4xl`;
//quitando justtify-center se expande la grilla hasta los costados
const GrillaPortada = tw.div`  flex-grow  grid  gap-0 lg:grid-flow-col     sm:grid grid-flow-row md:justify-center`;
const CajaContenido  = tw.div`bg-blue-200    p-1  bg-opacity-25 rounded-xl xl:max-w-lg`;

const ContieneGrilla = tw.div`flex-1  bg-gray-800`;

const BannerFondo=styled.div` ${tw`   p-4
bg-gray-500  rounded-2xl   text-center font-extrabold text-primary-500 border-indigo-500 hover:bg-orange-300 hover:shadow-lg hover:border-transparent `}

`;
//const Tope=styled.div`-mt-64 `;
//const Llamador =tw.div`relative flex flex-1 bg-primary-500 w-full p-2 mx-auto text-white font-extrabold items-end`;
//const MenuEncabezado =tw.span`bg-primary-500  p-4 text-white font-extrabold `;
//const misrc = "../standalone/pannellum.htm?config=../tour1.json";
const misrc = "../standalone/pannellum.htm?config=../laplata.json";
//const misrcvideo = "../video/entrada_VP9.webm";
const misrcvideo = "../video/video360.webm";
//const misrcvideo = "../video/hoynomas.mp4";
//const misrcvideo = "../video/VIDEO360_H.264.mp4";

//const misrcvideospot = "https://youtu.be/hXexvLhDWbY";
const misrcvideospot = "../video/vtourspot_720p_H.264.mp4";
//const misrcImagen="../../images/repu2.png";
const videoParametros = {
  autoplay: false,
  preoload : 'auto',
  autoload :true,
  controls: true,
  vr:true,
  fluid :true ,
  responsive :true,
  width : "200" ,
  altura :"300",
  projection : 'EAC',
  poster :'../video/miniatura_video360.jpg',
  notSupportedMessage: false,
  sources: [{
    src: misrcvideo,
    type: 'video/mp4'
  }]
}
const videoParametrosSpot = {
  vr : false ,
  autoplay: false,
  preoload : 'auto',
  autoload :true,
  controls: true,
  
  fluid :true ,
  responsive :true,
  width : "250" ,
  altura :"370",
  
  poster :'../video/miniatura_spot_vtour_alto_2.1.1.jpg',
  notSupportedMessage: false,
  sources: [{
    src: misrcvideospot,
    type: 'video/webm'
  }]
}
//const caracteristicas = components['propios']['LandPage']['url'];
const landpagebase = components['propios']['LandPBase']['url'];

//const clientes = components['propios']['ClientesPage']['url'];  //hacerla con mibanner

//const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
//const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const contactos =components['blocks']['Form']['elements']['Contacto']['url'];
// const about =components['innerPages']['AboutUsPage']['url'];
// const Gancho =tw.div`bg-gray-300`;




export default () => {   
  
  const MisLinks = [
   <NavLinks  key={1}>
      
      
             
   {/*     <NavLink href={clientes}>Área Clientes</NavLink> */}
     
      
 <NavLink href={landpagebase}>¿Por qué usted necesita nuestros servicios? </NavLink>
    <NavLink href={contactos}>Contactos</NavLink>
   {/*  <NavLink href={about}>Acerca de nosotros</NavLink> */}
      
    </NavLinks> ];
 return (  
      <> 
           
        <Container> 
            <OpacityOverlay/>  
          <HeroContainer> 
            
             <Content> <StyledHeader links={MisLinks} /> 
             
               <Heading>
                   Recorridos virtuales<br/>
                   Video 360º y aéreos
                   <SubHeading>vtour.com.ar</SubHeading>
               </Heading>  
                <BannerFondo > <a href={landpagebase}> ¿Por qué usted necesita nuestros servicios?</a></BannerFondo> 
              <ContieneGrilla>
              <GrillaPortada>
                  
              


                   <CajaContenido>
                 
                      <FrameBase esPortada={true} tieneAudio={false}  altura={window.innerWidth>600?450:200} source= {misrc} IsPlano={false}
                  Titulo="Recorrido 360º"
                  Bajada="La mejor forma de mostrar"
                  SubTitulo="Resalte lo importante"
                  TextoGrisMayuscula="Un recorrido a las virtudes de su producto"
                  videoJsOptions ={ videoParametros}
                  IsRecorrido='true'/>   
                 </CajaContenido>
                {/*    <CajaContenido>
                   <FrameBaseImagen altura={window.innerWidth>600?350:250} source= {misrcImagen}/>
                  
                  </CajaContenido> */}  
                  <CajaContenido>  
                {/*    <YouTube videoId="hXexvLhDWbY" opts={opts}  />  */}
     
                    <FrameBaseVideo esAerea={true} esYoutuber={false} altura={window.innerWidth>600?450:200} source= {misrcvideospot}
                  Titulo="Tomas aéreas"
                  Bajada="Agregue una dimensión extra"
                  SubTitulo="Perspectivas inigualables"
                  TextoGrisMayuscula="Herramienta imprescindible"
                  videoJsOptions ={ videoParametrosSpot}
                   />
                 </CajaContenido>  
             <CajaContenido>  <FrameBaseVideo esYoutuber={false} altura={window.innerWidth>600?450:200} source= {misrcvideo}
                  Titulo="Video 360º"
                  Bajada="Experiencia inmersiva"
                  SubTitulo="Video 360º "
                  TextoGrisMayuscula="Herramienta excelente para 
                  promocionar "
                  videoJsOptions ={ videoParametros}
                   />
                 </CajaContenido>  
                 
                    </GrillaPortada> 
                    </ContieneGrilla> 
                    
                   </Content>  <WhatsAppWidget phoneNumber='542216701280'
                                    textReplyTime='Este es un mensaje automatizado, lo antes posible una persona de nuestro equipo lo contactará! '
                                      message= 'Hola!  En que podemos ayudarlo/a?'
                                      companyName="VTOUR"
                                      sendButton="ENVIAR WSP" className="relative t-0"
                                      />  
             </HeroContainer>
        </Container>
      </>
  );

};
