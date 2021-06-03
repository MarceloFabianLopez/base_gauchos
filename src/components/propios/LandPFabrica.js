import React  from "react";
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
import FrameBase from "./FrameBase";
//import { components } from "ComponentRenderer.js";
//import FrameBaseImagenSimple from "../propios/FrameBaseImagenSimple";
import Contacto from "components/forms/Contacto";
import Carpetadetrabajo from "components/forms/Carpetadetrabajo";
import ReactMarkdown from 'react-markdown';
import FrameGaleria from "./FrameGaleria.js";
//import rehypeRaw from 'rehype-raw';
//import gfm from 'remark-gfm';
//import MiMarkDown from "../propios/MiMarkDown"
//import FrameGaleria from '../propios/FrameGaleria';
//import MiFrame from "./MiFrame.js";
//import FrameBase from "./FrameBase";
//import  {DataProvider} from '../../context/DataContext';
//import { DataContext } from 'context/DataContext';
//import Datos from "./Datos.js";
//const gfm = require('remark-gfm');
const MiLogoLink = styled(NavLink)`
  ${tw`top-0 flex items-center font-extrabold border-b-0 text-xl! ml-0!`};

  img {
    ${tw`w-24 mt-0     `}
  }
`;
//const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
 const logoLink = (
   <MiLogoLink href="/">
    <img src="../../images/logo.png"  alt="logo" />
    
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

const bannerMio=("¿Por qué ud. necesita nuestros servicios?");
 const StyledHeader = styled(Header)`
  ${tw`pt-10 max-w-none w-full `}
  ${DesktopNavLinks} ${NavLink},${MiLogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300  `}
  }
  ${NavToggle}.closed {
    ${tw`text-red-500 p-2 hover:text-primary-500`}
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
  ${tw`relative my-4 z-40 bg-white  p-4 text-gray-800 font-poppins rounded-3xl`}
  
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
const ColumnAngosta = tw.div`max-w-screen-sm  min-width[30%]  flex-1 flex-col`;

const AreaContactar = tw.div`p-2 bg-white`;
const FormularioCorreo = tw.div`bg-gray-200 p-2 rounded-2xl ml-4`;
//const AreaMenuSuperior =tw.div`p-5 bg-blue-300`;


const AreaRegresar = tw.div`p-3 bg-gray-100 text-primary-600 font-extrabold`;
const ViewerPrincipal =tw.div`bg-gray-400 items-center p-2 flex flex-col rounded-2xl`;
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
### Para mostrar, vender, promocionar o simplemente para tener un excelente recuerdo.

- La posibilidad de contar con **_contenido multimedia adecuado_** vale para diferentes intereses: Sea usted un agente inmobiliario, 
un promotor turístico o un padre que quiere guardar el recuerdo del cumpleaños de su hija.
- Las nuevas tecnologías permiten **"mostrar"** de otra manera a nuestro público siendo cada día mas necesaria su utilización.

### Servicio que cubre las diferentes etapas

- Generamos los contenidos, los procesamos y los entregamos listos para ser usados cómodamente. Le brindamos la posibilidad de tener sin costo adicional una **_LANDPAGE_** con sus contenidos para que 
su publicidad sea eficiente y logre el efecto esperado.


`;


export default () => {

  init("user_kfmun1gr4Vx8fC0gf1XpR");
 // console.log("ancho=",window.innerWidth);
 /*  function sendEmail(e) {
    e.preventDefault();
    e.target.reset();


emailjs.sendForm('service_anxnkre', 'template_09kyzrp', e.target, 'user_kfmun1gr4Vx8fC0gf1XpR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
*/
   const MisLinks = [
    
  <NavLinks key={1}>
    
    <a href="/">Inicio</a>&nbsp;&nbsp;&nbsp;
    <PrimaryLink href="/components/blocks/Form/Contacto">Contacto</PrimaryLink>
    
   
  </NavLinks>
]; 
 //const {escena} = useContext (DataContext);
 const EscenaLandPage =    "../../standalone/pannellum.htm?config=../tour2.json" ;  
 //const contactos = components['blocks']['Form']['elements']['SimpleContactUs']['url']; 
//logoLink={logoLink}
 // const markdown = `Just a link: https://reactjs.com.`
  return (<>
            <Container> <MiHeader logoLink={logoLink} bannerMio={bannerMio} links={MisLinks}> 
                 </MiHeader>
                  <HeroContainer>   
                       
                 
                      <CabezaContainer>
                       
                        <CuerpoContainer>
                          <TwoColumn>
                            <ColumnAncha>
                            <Carpetadetrabajo/>

                      
                    <ViewerPrincipal>
                            <FrameBase tieneAudio={false} esPortada={true} altura={window.innerWidth>600?450:250} source= {EscenaLandPage} IsRecorrido='true' IsPlano='true'/>
                           {/*  <FrameBase tieneAudio={false} esPortada={true} altura={window.innerWidth>600?450:250} source= "../../standalone/pannellum.htm?config=../tour1.json" IsRecorrido='true' IsPlano='true'/> */}
                  
                  </ViewerPrincipal>              
                            {/* <FrameGaleria/> */}
                          
              {/* 
                            <Descripcion>  {<ReactMarkdown  source={TextoDescripcion} />}
                          
                         
                         
                          
                               

                            </Descripcion>.. */}
                           
                            </ColumnAncha>
                            <ColumnAngosta>
                            {/* <AreaContactar><a href="https://api.whatsapp.com/send?phone=5492216701280&text=Hola!%20Quiere%20contactarse%20con%20nosotros!">
                            <AreaWhatsap imageWsp={imagenWsp}/></a></AreaContactar>
                             */}
                            <FormularioCorreo> <Contacto/></FormularioCorreo>
                           
                            </ColumnAngosta>

                          </TwoColumn> 
                     

                        </CuerpoContainer>
 
                      </CabezaContainer>
                      
                        
                        
                        <Content>
                           
                        </Content>

                  </HeroContainer>
            </Container>
            </>);};      
      