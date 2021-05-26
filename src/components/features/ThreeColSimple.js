import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
//import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
//import SupportIconImage from "images/support-icon.svg";
//import ShieldIconImage from "images/shield-icon.svg";
//import CustomizeIconImage from "images/customize-icon.svg";
//import IconoContacto from "components/propios/IconoContacto.js";
import { components } from "ComponentRenderer.js";

//import ContenidosImage from "images/contenidos.jpg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-0 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-2 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-xl p-8 bg-gray-100`}
    img {
      ${tw`w-32 h-32 rounded-md object-cover opacity-75` }
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;
const ContainerFeature=tw(Container)`bg-gray-200  -mt-10`;
export default ({

  contactos =components['blocks']['Form']['elements']['SimpleContactUs']['url'],
  cards = [
    {
      imageSrc: 'images/generacion.jpg',
      title: "Preparamos el material",
      description: "Generamos el contenido audiovisal con la calidad 4k,  fotografía area y 360º.",
      url: {contactos}
    },
    {
      imageSrc: 'images/proceso.jpg',
      title: "Lo procesamos",
      description: "El material se procesa y dispone en los formatos adecuados para poder difundirlo fácilmente y para que esté disponible 24/7 a través de internet. Realizamos trabajos de post producción del material filmado, con edición y musicalzación de los videos y fotos.", 
      
      url: "/#"
    },
    {
      imageSrc: 'images/trabajo_en_redes.png',
      title: "Usted dispone",
      description: "Se entrega el material listo para ser visto mediante enlaces en todas las redes sociales y páginas web. Agregamos sin costo adicional una Landing Page de todo el material aportado para poder darle a nuesros clientes un accesp cómodo al contenido promocionado.",
      url: "/#"
    }
  ],
  linkText = "Conuníquese",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <ContainerFeature>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {/* {linkText && (
                  <a href={contactos}><IconoContacto/></a>
                    
                )} */}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </ContainerFeature>
  );
};
