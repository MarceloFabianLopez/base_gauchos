import React from 'react';
import tw from "twin.macro";
//import MiFrame from 'components/propios/MiFrame';
import IconoRecorrido from 'components/propios/IconoRecorrido';
import IconoAerea from './IconoAerea';

const Card = tw.div`relative top-0 bg-white z-0 mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs p-5 `;

//const misrc = "../standalone/pannellum.htm?config=../tour1.json";
//const misrcvideo = "../standalone/pannellum.htm?config=../tour1.json";
const PosicionIcono = tw.div`absolute z-0 top-0 right-0 h-16 w-16 `;
const PosicionImagen = tw.div`z-10 relative mt-0 `;
//const Card = tw.div`relative top-0 bg-white mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs p-5 `;
{/* <div class="relative h-32 w-32 ...">
  <div class="absolute top-0 right-0 h-16 w-16 ...">7</div>
</div> */}
const Frame = ()=> {

    return        (<>     
                        <Card>
                            <PosicionIcono><IconoAerea/></PosicionIcono>
                            <PosicionImagen>
                            <img src="../../images/repu2.png" width="250" alt="Republica de los niños" />
                            </PosicionImagen>
                            
                            <div> 
                                <span className="font-bold">Fotos y videos aéreos.</span>
                                <span className="block  font-bold text-primary-300 ">Calidades 4k y formatos para su publicación en redes</span>
                           
                            </div>
                            
                            
                            
                            
                        </Card>    
                      
                      </>
                        )
                    
};


export default Frame;