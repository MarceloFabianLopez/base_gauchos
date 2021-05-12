import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
//import MiWsp from 'components/propios/MiWsp';
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

//import logo from "../../images/logo1.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import ContainerBanner from 'components/propios/ContainerBanner';

const Header = tw.header`
  flex justify-between items-center 
   max-w-full  
`;
//const ColorBanner=tw(ContainerBanner)`bg-green-500`;

export const NavLinks = tw.div`inline-block`; 

/*  hocus: stands for "on hover or focus"
 hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
`; */
export const NavLink = tw.a`
  text-xl my-10 lg:text-sm lg:mx-6 lg:my-0 
  font-semibold tracking-wide transition  duration-300 
  pb-2 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`top-0 flex items-center font-extrabold border-b-0 text-xl! ml-0!`};

  img {
    ${tw`relative  bg-white  mt-2 mx-2  p-2 rounded-xl w-12  sm:mt-0 sm:mx-0  md:w-24     `}
  }
`;

export const MobileNavLinksContainer = tw.nav`z-40 flex flex-1 items-center justify-between md:px-5 md:mt-4`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden  fixed  inset-x-0  my-6 p-8  text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center 
 
  `;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */


  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">Trabajos realizados</NavLink>
      <NavLink href="/#">VTOUR MISION </NavLink>
      <NavLink href="/#" tw="lg:ml-12!">
        Envíos
      </NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Especificaciones</PrimaryLink>
    </NavLinks>
  ];


 /*  const ContainerBanner = styled.div`
  ${tw` hidden lg:flex -my-10   -mb-8 bg-left  w-full bg-cover bg-black bg-opacity-75 px-5 `}
  
`; */
// background-image: url("images/aereos.jpg") ;




  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src="../images/logo.png" alt="logo1" />
      
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;
//const colorPersonalizado="bg-black";
  return (
    <Header className={className || "header-light"}>
      <ContainerBanner>
         <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks> 
      </ContainerBanner>
      

  
     
      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
         </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle> 
      </MobileNavLinksContainer> 
   

    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:flex`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
    ContainerBanner :tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
    ContainerBanner :tw`md:flex`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
    ContainerBanner :tw`lg:flex`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
    ContainerBanner :tw`lg:flex`
  }
};
