import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//import MiWsp from 'components/propios/MiWsp';
//import WhatsAppWidget from 'react-whatsapp-widget';
//import 'react-whatsapp-widget/dist/index.css';


import Contacto from "components/forms/Contacto";
//import tw from "twin.macro";
//import PortfolioTwoCardsWithImage from 'components/cards/PortfolioTwoCardsWithImage';
//import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
//import Hero from "components/hero/TwoColumnWithVideo.js";
//import Hero2 from "components/hero/BackgroundAsImage.js";
//import Hero1 from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Hero0 from "components/hero/BackgroundAsImageWithCenteredContent.js";

import Features from "components/features/ThreeColSimple.js";
//import MainFeature from "components/features/TwoColWithButton.js";
//import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
//import TabGrid from "components/cards/TabCardGrid.js";
//import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
//import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
//import ThreeColSlider from "components/cards/ThreeColSlider";

//import WhatsAppWidget from 'react-whatsapp-widget';
//import 'react-whatsapp-widget/dist/index.css';
//import chefIconImageSrc from "images/chef-icon.svg";
//import celebrationIconImageSrc from "images/celebration-icon.svg";
//import shopIconImageSrc from "images/shop-icon.svg";
//"Triple función, parrilla-horno-ahumador. Parrilla de hierro redondo de 70x45cm (5 pollos o un lechón de 10kg),permite hornear carnes,verduras,pizzas, empanadas, panes, etc. y si agregamos astillas para humar tendremos un ahumado delicioso en nuestras comidas. Cuenta con termómetro para visualizar la temperatura a la que se está cocinando."

const AreaContactar = tw.div`p-2 bg-white`;
const FormularioCorreo = tw.div`bg-gray-200 p-2 rounded-2xl ml-4`;
const AreaWhatsap =styled.div(props => [
  `background-image: url("${props.imageWsp}");
  `,
  tw`sm:px-2 md:px-32 h-16 w-full bg-no-repeat bg-center rounded-2xl `
]);
const imagenWsp='../../images/wsp.png';


//const Container = styled.div`


//${tw`bg-top bg-white font-sans`}


//`;
export default () => {
  //const Subheading = tw.span`tracking-wider text-sm font-medium`;
  //const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  //const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  //const Description = tw.span`inline-block mt-8`;
  //const imageCss = tw`rounded-6xl`;
  return (
   
    <AnimationRevealPage> 
   
       <Hero0/>
      
      <Features/>
      <AreaContactar><a href="https://api.whatsapp.com/send?phone=5492216701280&text=Hola!%20Quiere%20contactarse%20con%20nosotros!">
      <AreaWhatsap imageWsp={imagenWsp}/></a>
      </AreaContactar>
      <FormularioCorreo> <Contacto/></FormularioCorreo>
   

      <Footer />
      
    </AnimationRevealPage> 
    
  );
}
