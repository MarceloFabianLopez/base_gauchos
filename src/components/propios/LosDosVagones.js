import React  from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header, { NavLink, NavLinks, PrimaryLink , NavToggle, DesktopNavLinks } from "../headers/light.js";
import{ init } from 'emailjs-com';
import FrameBase from "./FrameBase";
import Contacto from "components/forms/Contacto";
import ReactMarkdown from 'react-markdown';


// -----------------PERSONALIZAR
const hrefLogo="../../images/logo.png";
const urlImagenFondo ="../../images/logo.png"
const urlLogoLink="/";
const linkInicioUrl="/";
const linkInicioTexto="Inicio";
const urlContacto="/components/blocks/Form/Contacto";
const textoContacto="Contacto";
const EscenaLandPage = "../../standalone/pannellum.htm?config=../tour4.json";
const colorHeader=`bg-red-300`;

  const guasap='https://api.whatsapp.com/send?phone=5492216701280&text=Hola!%20Quiere%20contactarse%20con%20nosotros!';
const Negrito=tw.div`text-black  text-sm  md:text-left md:text-2xl  `;
const tituloNegrito = 'Los Dos Vagones';
const bajada= 'Turismo rural - Naturaleza y tranquilidad'
const TextoDescripcion = `
### Para mostrar, vender, promocionar o simplemente para tener un excelente recuerdo.

- La posibilidad de contar con **_contenido multimedia adecuado_** vale para diferentes intereses: Sea usted un agente inmobiliario, 
un promotor turístico o un padre que quiere guardar el recuerdo del cumpleaños de su hija.
- Las nuevas tecnologías permiten **"mostrar"** de otra manera a nuestro público siendo cada día mas necesaria su utilización.

### Servicio que cubre las diferentes etapas

- Generamos los contenidos, los procesamos y los entregamos listos para ser usados cómodamente. Le brindamos la posibilidad de tener sin costo adicional una **_LANDPAGE_** con sus contenidos para que 
su publicidad sea eficiente y logre el efecto esperado.


`;

//-----------------------------------------------------FIN PERSONALIZAR

const MiLogoLink = styled(NavLink)`
  ${tw`top-0 flex items-center font-extrabold border-b-0 text-xl! ml-0!`};

  img {
    ${tw`w-24 mt-0     `}
  }
`;




//const bannerMio=("¿Por qué ud. necesita nuestros servicios?");
 const StyledHeader = styled(Header)`
  ${tw`pt-10 max-w-none w-full `}
  ${DesktopNavLinks} ${NavLink},${MiLogoLink} {
    ${tw`text-gray-200 hover:border-gray-300 hover:text-gray-300  `}
  }
  ${NavToggle}.closed {
    ${tw`text-red-500 p-2 hover:text-primary-500`}
  }
`; 
//const MiHeader=tw(StyledHeader)`bg-blue-100`;
const MiHeader=tw(StyledHeader)`${colorHeader}`;
const HeroContainer = tw.div`z-0 relative  sm:px-0 mx-auto  flex flex-col`;
const Content = tw.div`flex flex-1 flex-col justify-center items-center`;

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
  ${tw`p-0 sm:p-2 md:p-6 ${colorHeader} text-gray-100 rounded-lg relative`}
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
const AreaRegresar = tw.div`p-3 bg-gray-100 text-primary-600 font-extrabold`;
const ViewerPrincipal =tw.div`bg-gray-400 items-center p-2 flex flex-col rounded-2xl`;
const AreaWhatsap =styled.div(props => [
  `background-image: url("${props.imageWsp}");
  `,
  tw`sm:px-2 md:px-32 h-16 w-full bg-no-repeat bg-center rounded-2xl `
]);
const imagenWsp='../../images/wsp.png';
const Container = styled.div`
${tw`relative  z-10 -mx-8 -mb-8 -my-10  bg-top  bg-cover`}
background-image: url("images/aereos2.jpg");
`; 



/* const Container = styled.div`
//${tw`bg-top bg-white font-sans  bg-top  bg-cover`}
//background-image: url("images/aereos2.jpg");
`; `
`}


`;
 


const logoLink = (
  <MiLogoLink href={urlLogoLink}><img src={hrefLogo}  alt="logo" /></MiLogoLink>
);  

export default () => {

  init("user_kfmun1gr4Vx8fC0gf1XpR");

{/*


  
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
        <a href={linkInicioUrl}>{linkInicioTexto}</a>&nbsp;&nbsp;&nbsp;
        <PrimaryLink href={urlContacto}>{textoContacto}</PrimaryLink>
  </NavLinks>
]; 
//bannerMio={bannerMio}
  return (<>
            <Container> 
              <MiHeader logoLink={logoLink}  links={MisLinks}></MiHeader>
                  <HeroContainer>   
                       
                 
                      <CabezaContainer>
                       
                        <CuerpoContainer>
                          <TwoColumn>
                            <ColumnAncha><AreaRegresar>
                           
                            <Negrito>{tituloNegrito} </Negrito>
                            {bajada}

                                                     
                         {/*             <div>  xx {escena.idEscena}xx</div> */}
                                     </AreaRegresar>

                       {/*      <FrameBaseImagenSimple source= {misrcImagen}
                            
                                              Titulo="Importante propiedad"
                                            TextoGrisMayuscula="Tres dormitorios, cochera, 2 baños"/> */}
                                            
                            
                    <ViewerPrincipal>
                            <FrameBase tieneAudio={false} esPortada={false} altura={window.innerWidth>600?450:250} source= {EscenaLandPage} IsRecorrido='true' IsPlano='false'/>
                           {/*  <FrameBase tieneAudio={false} esPortada={true} altura={window.innerWidth>600?450:250} source= "../../standalone/pannellum.htm?config=../tour1.json" IsRecorrido='true' IsPlano='true'/> */}
                  
                  </ViewerPrincipal>              
                            {/* <FrameGaleria/> */}
                          <AreaContactar><a href={guasap}>
                            <AreaWhatsap imageWsp={imagenWsp}/></a></AreaContactar>
              
                            <Descripcion>  {<ReactMarkdown  source={TextoDescripcion} />}
                         
                         
                         
                          
                               

                            </Descripcion>..
                           
                            </ColumnAncha>
                            <ColumnAngosta>
                        
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
      