import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import HomeButton from 'compone
//import {PrimaryLink} from '../headers/light';

//import { css } from "styled-components/macro"; //eslint-disable-line
//import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import emailjs from 'emailjs-com';
//import PrimaryButton from 'components/misc/Buttons';
import{ init } from 'emailjs-com';
import WhatsAppWidget from "react-whatsapp-widget";
//import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

//import { NavLink } from 'react-router-dom'; 
//import HookForm from 'components/Forms/TestForm.jsx';
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-2 lg:py-2`;

const FormContainer = styled.div`
  ${tw`sm:p-4 xl:p-4  top-0 w-full bg-white text-gray-800 rounded-2xl`}
  form {
    ${tw` sm:mt-2 xl:mt-2 `}
  }
  h2 {
    ${tw`  sm:text-sm font-bold xl:text-xl `}
  }
  input,textarea {
    ${tw`w-full bg-gray-200  text-gray-800 text-base font-medium  hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-700`}
    }
  }
`;

//const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-full flex flex-col content-center`;
const InputContainer = tw.div`relative py-5 mt-5 `;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`bg-gray-200`;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mb-20 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
//const CancelButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

//const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {

  init("user_kfmun1gr4Vx8fC0gf1XpR");

  function sendEmail(e) {
    e.preventDefault();
    //e.target.reset();


emailjs.sendForm('service_anxnkre', 'template_uk97428', e.target, 'user_kfmun1gr4Vx8fC0gf1XpR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
 
  return (
    <Container>
      <Content>
        <FormContainer>

          
            <h3>Contactarse</h3>

           
            <form className="contact-form" onSubmit={sendEmail}>
            {/* <TwoColumn> */}
                <Column> 
                <InputContainer tw="flex-1">
                    <Label htmlFor="message-input">Su mensaje</Label>
                    <TextArea id="message" name="message" placeholder="Hola, quería recibir info....."/>
                  </InputContainer>
                  <InputContainer>
                   <input type="hidden" name="contact_number" />
                    <Label htmlFor="name-input">Su nombre y apellido</Label>
                    <Input id="name-input" type="text" name="user_name" placeholder="Su nombre" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Su correo electrónico</Label>
                    <Input id="email-input" type="email" name="user_email" placeholder="Por ej. juan@xmail.com" />
                  </InputContainer>
                
                 
                </Column>
              {/* </TwoColumn> */}

              <SubmitButton type="submit" value="Send">Enviar</SubmitButton>
              <br/>


           {/* <p className="sm:text-center p-10">

           
 <a href="/components/propios/LandPage">Cancelar</a></p> */}

         
              
               </form>
          
         
         {/*   <SvgDotPattern1 /> */}
         {/* <div className="absolute top-0  pd-20"> 
              <WhatsAppWidget phoneNumber='542214597362'
                                    textReplyTime='Este es un mensaje automatizado, lo antes posible una persona de nuestro equipo lo contactará! '
                                      message= 'Hola!  En que podemos ayudarlo/a?'
                                      companyName="MCHAMA BIENES RAICES"
                                      sendButton="ENVIAR WSP" 
                                      /></div> */}
        </FormContainer>
   
      </Content>
    </Container>
  );
};
