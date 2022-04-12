import React   from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Contacto from "components/forms/Contacto";
const FormularioCorreo = tw.div`bg-gray-200 p-2 rounded-2xl ml-4`;

export default () => {
    console.log("wraper");
    return (
      <>
      <h1>HOla wreapper </h1>
      <FormularioCorreo> <Contacto linkRegreso="/components/propios/LosDosVagones" textoLink="Regresar" service="service_iq8bowe" template="template_tp629ui"/></FormularioCorreo>
      </>
    );
  };
  