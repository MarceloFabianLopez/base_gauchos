import React  from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header, { NavLink, NavLinks, PrimaryLink , NavToggle, DesktopNavLinks } from "../headers/light.js";
import FrameBase from "./FrameBase";
import Contacto from "components/forms/Contacto";
import Carpetadetrabajo from "components/forms/Carpetadetrabajo";
import FrameGaleria from "./FrameGaleria.js";
import MuestraRecorridoJson from 'components/propios/fabrica/MuestraRecorridoJson';
const MiLogoLink = styled(NavLink)`
  ${tw`top-0 flex items-center font-extrabold border-b-0 text-xl! ml-0!`};

  img {
    ${tw`w-24 mt-0     `}
  }
`;
 const logoLink = (
   <MiLogoLink href="/">
    <img src="../../images/logo.png"  alt="logo" />
    
  </MiLogoLink>
);  
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

const HeroContainer = tw.div`z-0 relative  sm:px-0 mx-auto  flex flex-col`;

const CabezaContainer = styled.div`
  ${tw`relative my-4 z-40 bg-white text-center p-5`}
  
  h2 {
    ${tw`text-2xl sm:text-2xl font-bold`}
  }
  
  }
`;

const CuerpoContainer = styled.div`
  ${tw`p-4 sm:p-2 md:p-6 bg-blue-100 text-gray-100 rounded-lg relative `}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  
`;
//const TwoColumn = tw.div`flex flex-col sm:flex-row  object-center max-h-screen border-2 `;
const TwoColumn = tw.div`p-4 md:grid grid-cols-2 sm:grid grid-cols-1  object-center max-h-screen border-2 `;
const ColumnAncha = tw.div`sm:w-full flex-auto flex-col`;
const ColumnAngosta = tw.div` min-width[30%]  flex-1 flex-col bg-gray-800 p-4    overflow-scroll	`;
const FormularioCorreo = tw.div`bg-gray-200 p-2 rounded-2xl ml-4`;
const ViewerPrincipal =tw.div`relative bg-gray-400 items-center p-2 flex flex-col rounded-2xl`;
const Container = styled.div`

${tw`bg-top bg-white font-sans`}

`;
const Negrito=tw.div`text-black  text-sm  md:text-left md:text-2xl  `;
export default () => {

   const MisLinks = [<NavLinks key={1}><a href="/">Inicio</a>&nbsp;&nbsp;&nbsp;
    <PrimaryLink href="/components/blocks/Form/Contacto">Contacto</PrimaryLink>
  </NavLinks>];

 const EscenaLandPage =    "../../standalone/pannellum.htm?config=../tour2.json" ;  

return (<>
            <Container> <MiHeader logoLink={logoLink} bannerMio={bannerMio} links={MisLinks}></MiHeader>
                  <HeroContainer>
                    <CabezaContainer>
                      <CuerpoContainer>
                          <TwoColumn>
                           <ColumnAncha>
                            <Carpetadetrabajo titulo="Ordene las panoramicas"/>
                           {/*  <Carpetadetrabajo titulo="Seleccione las vistas principales"/>
                            <Carpetadetrabajo titulo="Para cada panorámica ubique los hotspots"/>
                            <Carpetadetrabajo titulo="Para cada hotspot de cada panoramica configure la vista inicial"/> */}
                           {/*  <ViewerPrincipal>
                              <FrameBase tieneAudio={false} esPortada={true} altura={window.innerWidth>600?450:250} source= {EscenaLandPage} IsRecorrido='true' IsPlano='true'/>
                            </ViewerPrincipal>  */}             
                          </ColumnAncha>
                          <ColumnAngosta>
                            <MuestraRecorridoJson datos1="../../../../tour2.json"/>
                            </ColumnAngosta>
                          </TwoColumn>
                      </CuerpoContainer>
                    </CabezaContainer>
                  </HeroContainer>
            </Container>
            </>);};      
      