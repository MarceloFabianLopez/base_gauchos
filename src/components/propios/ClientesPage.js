
import React, { Component } from 'react';
import tw from "twin.macro";
import styled from "styled-components";

function ClientesPage () {

 const BannerFondo=tw.div` bg-green-800 bg-left-top bg-auto bg-repeat-x `;
 //const =tw.div` `;
 const Tope=styled.div`-mt-64 `;
 const TextoCentrado=tw.div`w-full text-center`;
 const Subtitulo=tw.div`text-sm tracking-widest text-white`;
 const Titulo=tw.h1`text-sm tracking-widest text-white`;
 const Grilla=tw.div`grid grid-cols-1 gap-4 sm:grid-cols-3`; 
    return (

      

	<BannerFondo>

      <Tope>
        <TextoCentrado>
          <Subtitulo>Subtitle</Subtitulo>
          <Titulo>
              Title
          </Titulo>
      </TextoCentrado>
              
      <Grilla>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                  <div className="space-y-10">
                      <i className="fa fa-spa" ></i>
                      
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Spa</div>
                              <p className="text-gray-700 text-base">
                                  Todo tipo de masajes y técnicas
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer text-white"> 
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                  <div className="space-y-10">
                    <i className="fa fa-head-side-mask" ></i>
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Bioseguridad</div>
                              <p className="text-base">
                                  Altos estandares de bioseguridad
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                  <div className="space-y-10">
                      <i className="fa fa-swimmer" ></i>
                      
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Piscina</div>
                              <p className="text-gray-700 text-base">
                                  Piscina temperada
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
      </Grilla>
      </Tope>
  
      </BannerFondo>





      
    );
  }


export default ClientesPage;