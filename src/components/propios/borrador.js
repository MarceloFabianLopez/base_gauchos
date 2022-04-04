<HeroContainer>   
                       <MiHeader logoLink={logoLink}  links={MisLinks}></MiHeader>
                 
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