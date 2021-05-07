import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "../headers/light.js";
import {NavLinks,NavLink,PrimaryLink,LogoLink, NavToggle, DesktopNavLinks} from '../headers/light';
//import { css } from "styled-components/macro"; //eslint-disable-line
//import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import emailjs from 'emailjs-com';
//import PrimaryButton from 'components/misc/Buttons';
import{ init } from 'emailjs-com';
//import WhatsAppWidget from "react-whatsapp-widget";
//import { Link } from 'react-router-dom'
import FrameBase from "../propios/FrameBase";
//import { components } from "ComponentRenderer.js";
import FrameBaseImagenSimple from "../propios/FrameBaseImagenSimple";
import SimpleContactUs from "components/forms/SimpleContactUs.js";

import ReactMarkdown from 'react-markdown';
//import rehypeRaw from 'rehype-raw';
//import gfm from 'remark-gfm';
//import MiMarkDown from "../propios/MiMarkDown"
import FrameGaleria from '../propios/FrameGaleria';
//import MiFrame from "./MiFrame.js";
//import FrameBase from "./FrameBase";
import  {DataProvider} from '../../context/DataContext';
const logoLink = (
  <LogoLink href="/paginaprincipal">
    <img src="../../images/logo.png" width="100%" alt="logo1" />
    
  </LogoLink>
);
//<img src="../../media_landpages/dacal/logoverde.jpg" width="100%" alt="logo1" />
const StyledHeader = styled(Header)`
  ${tw`pt-10 max-w-none w-full `}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300  `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const MiHeader=tw(StyledHeader)`bg-blue-100`;

const CajaContenido  = tw.div`bg-white mx-auto  `;

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
  ${tw`relative my-4 z-40 bg-white text-justify p-5 text-gray-800 font-poppins rounded-3xl`}
  
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

/* const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent  text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`; */
const misrc = "../../standalone/pannellum.htm?config=../tour1.json";
const misrcvideo = "../video/tres.mp4";
const misrcImagen="../../media_landpages/dacal/dos.jpg";
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


const TwoColumn = tw.div`flex flex-col md:flex-row  object-center`;
const ColumnAncha = tw.div`sm:w-full flex-auto flex-col`;
const ColumnAngosta = tw.div`max-w-screen-sm  flex-1 flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mb-20 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const CancelButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

//const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`
const AreaLogo = tw.div`bg-green-300`;
const AreaContactar = tw.div`p-2 bg-white`;
const FormularioCorreo = tw.div`bg-gray-200 p-2 rounded-2xl ml-4`;
const AreaMenuSuperior =tw.div`p-5 bg-blue-300`;

const AreaRegresar = tw.div`p-3 bg-gray-100 text-gray-500 font-bold`;

const AreaWhatsap =styled.div(props => [
  `background-image: url("${props.imageWsp}");
  `,
  tw`sm:px-2 md:px-32 h-16 w-full bg-no-repeat bg-center rounded-2xl `
]);
const imagenWsp='../../images/wsp.png';

/* const Container = styled.div`
  ${tw`   bg-top  bg-cover
    `}
  background-image: url("../../images/aereos2.jpg");
`; */
const Container = styled.div`


${tw`bg-top bg-white font-sans`}


`;
const NavLinkMio=tw(NavLink)`bg-blue-300 p-4`;
const MisLinks = [
    
  <NavLinks key={1}>
    <NavLinkMio href="/#">
    Enlace a su página web
   
    </NavLinkMio>
  
    <PrimaryLink href="/#">Contacto</PrimaryLink>
   
  </NavLinks>
];
const Negrito=tw.div`text-black  text-sm  md:text-left md:text-2xl  `;
const TextoDescripcion = `
### Descripción
- Casa construida en 1 sola planta con techo de losa y cielo raso de yeso con pisos de madera maciza en todos los ambientes.
-
- Cuenta con 3 dormitorios con puerta ventana al parque, 1 de ellos en suite con vestidor y los secundarios con placard de piso a techo en madera, además cuenta con 2 baños completos.
-
- Pasillo ancho con muebles y paredes revestidas en madera de piso a techo, muebles a medida en piso a techo en todos los ambientes.
- Calefacción por Losa radiante, AA frío calor en todas las habitaciones, AA frío calor central en living comedor.
- **Living-comedor** con estufa hogar a leña con extractor eléctrico de humo, en cocina parrilla con extractor eléctricode humo integrada a la cocina remodelada a nuevo en el año 2020.\n\Parrilla y comedor con apertura total de ventanal de 3,5 metros a la galería semicubierta.
- **_Pisos de Madera Maciza_**.`

//const algo = MiMarkDown;
const markdown = `
  # Header 1
  ## Header 2
- Esta es una linea 
- Esta es otra
- 
# Hello, *world*!
  _italic_

  **bold**
  [Heading IDs](/)
 

  `;

  /* const markdown2 = `
  ![Fullstack React](https://dzxbosgk90qga.cloudfront.net/fit-in/504x658/n/20190131015240478_fullstack-react-cover-medium%402x.png)
  `;
  const ReactMarkdownWithHtml = require('react-markdown/with-html') ;
 */

export default () => {

  init("user_kfmun1gr4Vx8fC0gf1XpR");

  function sendEmail(e) {
    e.preventDefault();
    e.target.reset();


emailjs.sendForm('service_anxnkre', 'template_09kyzrp', e.target, 'user_kfmun1gr4Vx8fC0gf1XpR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
 
  return (<>
            <Container>
                 
                  <HeroContainer>   
                    <MiHeader logoLink={logoLink} links={MisLinks}/>  
                      <CabezaContainer>
                       
                        <CuerpoContainer>
                          <TwoColumn>
                            <ColumnAncha><AreaRegresar><Negrito>13 e/ 478 y 478 bis n 5681</Negrito>
                                    City Bell , La Plata, Buenos Aires, Argentina</AreaRegresar>

                       {/*      <FrameBaseImagenSimple source= {misrcImagen}
                            
                                              Titulo="Importante propiedad"
                                            TextoGrisMayuscula="Tres dormitorios, cochera, 2 baños"/> */}
                            <FrameBase source= {misrc}
                 // Titulo="Recorrido 360º"
                 // Bajada="La mejor forma de mostrar"
                 // SubTitulo="Resalte lo importante"
                 // TextoGrisMayuscula="Un recorrido a las virtudes de su producto"
                  //videoJsOptions ={ videoParametros}
                  IsRecorrido='true'
                  IsPlano='true'/>
                            <FrameGaleria/>
                          
              
                            <Descripcion>  {<ReactMarkdown  source={TextoDescripcion} />}
                            
                            </Descripcion>
                            </ColumnAncha>
                            <ColumnAngosta>
                            <AreaContactar>
                            <a href="https://api.whatsapp.com/send?phone=5492216701280&text=Hola!%20Quieres%20contactarte%20con%20nosotros!">
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
      