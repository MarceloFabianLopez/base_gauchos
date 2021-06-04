import React   from "react";
import styled from "styled-components";
import tw from "twin.macro";
import swal from "sweetalert";
import {  PrimaryButton as PrimaryButtonBase }  from "components/misc/Buttons.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { imagenes } from "components/propios/fabrica/imagenes.js";

const Container = tw.div`z-0 relative p-2 bg-green-500  rounded-t-2xl `;
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
const SubmitButton = tw.button`w-full sm:w-16 mb-2 py-3 bg-gray-100 text-primary-500 rounded-2xl font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const PrimaryButton = tw(PrimaryButtonBase)`bg-gray-800 mx-auto h-12  rounded-2xl text-center text-sm font-normal`;
const Botones = tw.div`grid grid-cols-2 gap-2 h-12` ;

const GrillaPanoramas = tw.div`p-5  grid grid-cols-2 gap-2 `;
const UnPanorama = tw.div`bg-yellow-400 p-2 `;


function Carpetadetrabajo () {
 
  const [placemessage] = React.useState("Escriba su mensaje");
  const [placecarpeta] = React.useState("carpeta que contiene las fotos");
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

const formik = useFormik({
  initialValues: {
    carpeta: "",
    user_email: "",
    message: ""},

validationSchema: Yup.object({
  carpeta: Yup.string()
    .min(2, "Mínimo 2 characteres")
    .max(15, "Máximo 25 characteres")
    .required("Requerido!"),
    user_email: Yup.string()
    .email("Formato de email invalido")
    .required("Requerido!"),  
    message: Yup.string()
    .min(8,"Mínimo 4 caracteres")
    .required("Requerido!")
}),
onSubmit: values => {
  console.log(imagenes);
  }
});
//------------------------



  return (
    <Container>
      <Content><TituoloFormulario><h3>Creacion de recorridos -Carpeta de trabajo</h3></TituoloFormulario>
        <FormContainer>
            <form id="miform"  onSubmit={formik.handleSubmit}>
            {/* <TwoColumn> */}
                <Column> 
                  <InputContainer>
                   <input type="hidden" name="contact_number" />
                    <Label htmlFor="carpeta">Carpeta de trabajo</Label>
                    <Input id="capeta" type="text" name="carpeta" onChange={formik.handleChange}  value={formik.values.carpeta} placeholder={placecarpeta} />
                    {formik.errors.carpeta && formik.touched.carpeta && (
                    <p><label style={{ color: "red" }}>{formik.errors.carpeta} </label></p>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Su correo electrónico</Label>
                    <Input id="email" type="email" name="user_email" onChange={formik.handleChange}  value={formik.values.user_email} placeholder={placeemail} />
                    {formik.errors.user_email && formik.touched.user_email && (
                    <p><label style={{ color: "red" }}>{formik.errors.user_email}</label></p>
                    )}
                  </InputContainer> 
                  {/*< InputContainer tw="flex-1">
                    <Label htmlFor="message-input">Su mensaje</Label>
                    <TextArea id="message" name="message" onChange={formik.handleChange}   value={formik.values.message} placeholder={placemessage}/>
                    {formik.errors.message && formik.touched.message && (
                    <p><label style={{ color: "red" }}>{formik.errors.message}</label></p>
                    )}
                  </InputContainer> */}
                
              {/* </TwoColumn> */}
                
<GrillaPanoramas>
            {imagenes.map((imagen, key) => {
                                            return (
                                                    <UnPanorama key={key}>
                                                    <img src={"../../vtour/fabrica/"+imagen.imagen} width="50%"/> 
                                      
                                                      </UnPanorama>
                                                );
                                            }
                          )
            }
      </GrillaPanoramas>
     
<Botones><SubmitButton type="submit" value="Send">Enviar</SubmitButton>
                          <PrimaryButton  as="a" href="/">Borrar</PrimaryButton>
              </Botones> 
              </Column>
            </form>
          
          
             
    </FormContainer>
    </Content>
    </Container>
  );
};
export default Carpetadetrabajo;
