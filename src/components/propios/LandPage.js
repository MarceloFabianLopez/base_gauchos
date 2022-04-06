import React , { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import Header, { NavLink, NavLinks, PrimaryLink , NavToggle, DesktopNavLinks } from "../headers/light.js";
//import { components } from "ComponentRenderer.js";

//import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
//import Header from "../headers/light.js";
//import {NavLinks,NavLink,PrimaryLink,LogoLink, NavToggle, DesktopNavLinks} from '../headers/light';
//import { css } from "styled-components/macro"; //eslint-disable-line
//import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
//import emailjs from 'emailjs-com';
//import PrimaryButton from 'components/misc/Buttons';
import{ init } from 'emailjs-com';
//import WhatsAppWidget from "react-whatsapp-widget";
//import { Link } from 'react-router-dom'
import FrameBase from "../propios/FrameBase";
//import { components } from "ComponentRenderer.js";
//import FrameBaseImagenSimple from "../propios/FrameBaseImagenSimple";
import SimpleContactUs from "components/forms/SimpleContactUs.js";

import ReactMarkdown from 'react-markdown';
//import rehypeRaw from 'rehype-raw';
//import gfm from 'remark-gfm';
//import MiMarkDown from "../propios/MiMarkDown"
//import FrameGaleria from '../propios/FrameGaleria';
//import MiFrame from "./MiFrame.js";
//import FrameBase from "./FrameBase";
//import  {DataProvider} from '../../context/DataContext';
import { DataContext } from 'context/DataContext';
//import Datos from "./Datos.js";
//const gfm = require('remark-gfm');
const MiLogoLink = styled(NavLink)`
  ${tw`top-0 flex items-center font-extrabold border-b-0 text-xl! ml-0!`};

  img {
    ${tw`w-64     `}
  }
`;
//const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
 const logoLink = (
   <MiLogoLink href="https://www.mchama.com.ar/ficha/354103">
    <img src="../../images/logo_mchama.jpg"  alt="logoMCHAMA" />
    
  </MiLogoLink>
);  
/* const StyledHeader = styled(Header)`
  ${tw`pt-6 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`; */
//<img src="../../media_landpages/dacal/logoverde.jpg" width="100%" alt="logo1" />
 const StyledHeader = styled(Header)`
  ${tw`pt-10 max-w-none w-full `}
  ${DesktopNavLinks} ${NavLink}, ${MiLogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300  `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-800 p-2 hover:text-primary-500`}
  }
`; 
const MiHeader=tw(StyledHeader)`bg-blue-100`;

//const CajaContenido  = tw.div`bg-white mx-auto  `;

const HeroContainer = tw.div`z-0 relative  sm:px-0 mx-auto  flex flex-col`;


const Content = tw.div`flex flex-1 flex-col justify-center items-center`;

// cambiar tipografia

const CabezaContainer = styled.div`
  ${tw`relative my-4 z-40 bg-white text-center p-5`}
  
  h2 {
    ${tw`text-2xl sm:text-2xl font-bold`}
  }
  
  }
`;
const Descripcion = styled.div`
  ${tw`relative my-4 z-40 bg-white text-justify p-16 text-gray-800 font-poppins rounded-3xl`}
  
  h2 {
    ${tw`text-2xl sm:text-2xl font-bold`}
  }
  h3 {
    ${tw`text-xl sm:text-xl font-bold text-center`}
  }
  }
`;

const CuerpoContainer = styled.div`
  ${tw`p-0 sm:p-2 md:p-6 bg-blue-100 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  
`;


const TwoColumn = tw.div`flex flex-col md:flex-row  object-center`;
const ColumnAncha = tw.div`sm:w-full flex-auto flex-col`;
const ColumnAngosta = tw.div`max-w-screen-sm  flex-1 flex-col`;

const AreaContactar = tw.div`p-2 bg-white`;
const FormularioCorreo = tw.div`bg-gray-200 p-2 rounded-2xl ml-4`;
//const AreaMenuSuperior =tw.div`p-5 bg-blue-300`;


const AreaRegresar = tw.div`p-3 bg-gray-100 text-primary-600 font-extrabold`;
const ViewerPrincipal =tw.div`bg-black`;
const AreaWhatsap =styled.div(props => [
  `background-image: url("${props.imageWsp}");
  `,
  tw`sm:px-2 md:px-32 h-16 w-full bg-no-repeat bg-center rounded-2xl `
]);
const imagenWsp='../../images/wsp.png';


const Container = styled.div`


${tw`bg-top bg-white font-sans`}


`;
//const NavLinkMio=tw(NavLink)`bg-primary-400 p-4`;

const Negrito=tw.div`text-black  text-sm  md:text-left md:text-2xl  `;
const TextoDescripcion = `
### Venta en exclusiva!
- 
- Vivienda familiar en barrio residencial, sobre un lote de terreno de **_16x60_**.
- La misma consta de **4 dormitorios, el principal en suite, con vestidor.**
-  Escritorio. Amplio comedor, 2 livings, 1 en desnivel, con estufa hogar a leña, cocina equipada con muebles bajo y
sobre mesada, y desayunador. 
- Hermoso jardín de invierno y parque arbolado. 
- **Toilette** en planta baja
y **2 baños completos** en planta alta. 
- Al fondo del terreno se encuentra un comodo **quincho** con
parrilla y otra habitación con baño.
- Cuenta con **calefacción central y completo sistema de alarma.**
- Garage descubierto para 3 autos.
- La casa tiene una **_inmejorable_** calidad constructiva e impecable
diseño de ladrillo a la vista y aberturas de viraró.

`;


export default () => {

  init("user_kfmun1gr4Vx8fC0gf1XpR");
 // console.log("ancho=",window.innerWidth);
  /* function sendEmail(e) {
    e.preventDefault();
    e.target.reset();


emailjs.sendForm('service_anxnkre', 'template_09kyzrp', e.target, 'user_kfmun1gr4Vx8fC0gf1XpR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  } */

   const MisLinks = [
    
  <NavLinks key={1}>
    
    <a href="https://www.mchama.com.ar/ficha/354103">MCHAMA BIENES RAICES</a>&nbsp;&nbsp;&nbsp;
    <PrimaryLink href="/components/blocks/Form/SimpleContactUs">Contacto</PrimaryLink>
    
   
  </NavLinks>
]; 
 //const {escena} = useContext (DataContext); // 2
 const EscenaLandPage =    "../../standalone/pannellum.htm?config=../tour5.json" ;  
 //const contactos = components['blocks']['Form']['elements']['SimpleContactUs']['url']; 
//logoLink={logoLink}
 // const markdown = `Just a link: https://reactjs.com.`
  return (<>
            <Container>
                 
                  <HeroContainer>   
                     <MiHeader logoLink={logoLink} links={MisLinks}/>   
                 
                      <CabezaContainer>
                       
                        <CuerpoContainer>
                          <TwoColumn>
                            <ColumnAncha><AreaRegresar><Negrito>CASA EN VENTA 4 DORM PRECIO U$D370.000 </Negrito>
                                    21 E/ 32 Y 33
                         {/*             <div>  xx {escena.idEscena}xx</div> */}
                                     </AreaRegresar>

                       {/*      <FrameBaseImagenSimple source= {misrcImagen}
                            
                                              Titulo="Importante propiedad"
                                            TextoGrisMayuscula="Tres dormitorios, cochera, 2 baños"/> */}
                    <ViewerPrincipal>
                            <FrameBase tieneAudio="true" esPortada="false" altura={window.innerWidth>600?450:250} source= {EscenaLandPage}
                 
                  IsRecorrido='true'
                  IsPlano='true'/>
                  
                  </ViewerPrincipal>              
                            {/* <FrameGaleria/> */}
                          
              
                            <Descripcion>  {<ReactMarkdown  source={TextoDescripcion} />}
                          {/*   <Datos/> */}
                         
                         
                          
                               

                            </Descripcion>..
                           
                            </ColumnAncha>
                            <ColumnAngosta>
                            <AreaContactar>
                            <a href="https://api.whatsapp.com/send?phone=5492214597362&text=Hola!%20Quiere%20contactarse%20con%20nosotros!">
                            <AreaWhatsap imageWsp={imagenWsp}/></a>
                            
                            
                           
                            </AreaContactar><FormularioCorreo> <SimpleContactUs/></FormularioCorreo>
                           
                            </ColumnAngosta>

                          </TwoColumn> 
                          

                        </CuerpoContainer>
 
                      </CabezaContainer>
                      
                        
                        
                        <Content>
                           
                        </Content>

                  </HeroContainer>
            </Container>
            </>);};      
      