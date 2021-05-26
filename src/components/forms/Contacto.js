import React   from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import HomeButton from 'compone
//import {PrimaryLink} from '../headers/light';

//import { css } from "styled-components/macro"; //eslint-disable-line
//import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import emailjs from 'emailjs-com';
//import PrimaryButton from 'components/misc/Buttons';
import{ init } from 'emailjs-com';
//import WhatsAppWidget from "react-whatsapp-widget";
import swal from "sweetalert";
//import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';
import {  PrimaryButton as PrimaryButtonBase }  from "components/misc/Buttons.js";
//import { NavLink } from 'react-router-dom'; 
//import HookForm from 'components/Forms/TestForm.jsx';
const Container = tw.div`z-0 relative p-2 bg-gray-200  rounded-t-2xl `;
const Content = tw.div` bg-white  p-2 mx-auto py-2 lg:py-2 rounded-t-2xl`;
const TituoloFormulario = tw.div`   bg-black text-white font-extrabold p-2 rounded-t-2xl`;
const FormContainer = styled.div`
  ${tw` p-2 sm:p-4 xl:p-4  top-0 w-full bg-gray-500 text-gray-800  `}
  form {
    ${tw` sm:mt-2 xl:mt-2 `}
  }
  h2 {
    ${tw`  sm:text-sm font-bold xl:text-xl `}
  }
  input,textarea {
    ${tw`w-full  p-2 bg-white  text-gray-800 text-base font-medium  hocus:border-pink-400 focus:outline-none transition duration-200 rounded-xl`};

    ::placeholder {
      ${tw`text-gray-700`}
    }
  }
`;

//const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-full flex flex-col content-center`;
const InputContainer = tw.div`relative py-5 mt-2 `;
const Label = tw.label`absolute -mt-8 ml-2 tracking-wide font-semibold text-sm`;
const Input = tw.input`bg-gray-200`;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mb-20 py-3 bg-gray-100 text-primary-500 rounded-2xl font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const PrimaryButton = tw(PrimaryButtonBase)`h-12 rounded-2xl`;
const Botones = tw.div`grid grid-cols-2 gap-2 h-12` ;
//const CancelButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

//const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

function Contacto () {

  //export default () => {


  init("user_kfmun1gr4Vx8fC0gf1XpR");
  const [hayerror,setHayerror] =React.useState(true);
  const [message, setMessage] = React.useState("");
  //const [messagename, setMessagename] = React.useState("");
  //const [messageemail, setMessageemail] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [erroremail, setErroremail] = React.useState(null);
  const [errorname, setErrorname] = React.useState(null);
  const [placemessage] = React.useState("Escriba su mensaje");
  const [placenombre] = React.useState("Nombre y apellido");
  const [placeemail] = React.useState("ej juan@gmail.com");

  const mostrarAlerta =()=>{
    swal({
      title: "Enviado",
      text: "Nos comunicaremos con Ud. a la brevedad!",
      type: "success"
  }).then(function() {
      window.location = "/";
  });
  }
  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
      return 'Invalid Email';
    }
}

  function handleChange(event) {
    console.log("cambio message campo=",event.target.id," valor=",event.target.value);
    const value = event.target.value;
   
    if (event.target.id==="message"){
      if (value.includes("<")) setError("Solamente texto está permitido");
          else setError(null);
      setMessage(value);}
    if (event.target.id==="email-input"){
      
      if (value.includes("<")) setErroremail("escriba un correo válido");
          else setErroremail(null);
      setEmail(value);}
      if (event.target.id==="name-input"){
        if (value.includes("<")) setErrorname("Escriba su nombre y apellido");
            else setErrorname(null);
        setName(value);}
      if(error||erroremail||errorname) {setHayerror(true)}
      else {setHayerror(false)}
  }

  function sendEmail(e) {
    e.preventDefault();
    //e.target.reset();
    
    if (hayerror) {
      console.log("error _");
      //e.target.reset();
    } else {
      //if (isEmail(e.target.email-input.value)){console.log("email correcti");}
      //console.log("e.target-------------------------------=",e.target.user_email.value);
        if (!isEmail(e.target.user_email.value)){
                                                      console.log("email correcto");
                                                      emailjs.sendForm('service_anxnkre', 'template_uk97428', e.target, 'user_kfmun1gr4Vx8fC0gf1XpR')
                                                            .then((result) => {
                                                                                    console.log(result.text);
                                                                                    mostrarAlerta();
                                                                                }, (error) => {
                                                                                    console.log(error.text);
                                                                                });
                                                            //setTimeout(window.location.href="/",3000);
                                                          }
                                                  
                                                  else  {console.log("email incorrecto");}
             // document.getElementById("miform").reset();
  }
}
const IraInicio = () => {
window.location.href="/";
}
  return (
    <Container>
      <Content><TituoloFormulario><h3>Contactarse</h3></TituoloFormulario>
        
        <FormContainer>

          
            

           
            <form id="miform" className="contact-form" onSubmit={sendEmail}>
            {/* <TwoColumn> */}
                <Column> 
               
                  <InputContainer>
                   <input type="hidden" name="contact_number" />
                    <Label htmlFor="name-input">Su nombre y apellido</Label>
                    <Input id="name-input" type="text" name="user_name" onChange={handleChange} value ={name} placeholder={placenombre} />
                    {errorname && (
          <label style={{ color: "red" }} htmlFor="messagename">
            {errorname}
          </label>
        )}
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Su correo electrónico</Label>
                    <Input id="email-input" type="email" name="user_email" onChange={handleChange} value ={email} placeholder={placeemail} />
                    {erroremail && (
          <label style={{ color: "red" }} htmlFor="messageemail">
            {erroremail}
          </label>
        )}
                  </InputContainer> 
                  <InputContainer tw="flex-1">
                    <Label htmlFor="message-input">Su mensaje</Label>
                    <TextArea id="message" name="message" onChange={handleChange} value ={message} placeholder={placemessage}/>
                    {error && (
          <label style={{ color: "red" }} htmlFor="message">
            {error}
          </label>
        )}
                  </InputContainer>
                
                 
                </Column>
              {/* </TwoColumn> */}
                <Botones>      
              <SubmitButton type="submit" value="Send">Enviar</SubmitButton>
              <PrimaryButton  as="a" href="/">Cancelar</PrimaryButton>
              </Botones>      

         
              
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
export default Contacto;
