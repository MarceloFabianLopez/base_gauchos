import React from 'react';
//import videojs from 'video.js';
//import videojs from 'videojs-vr';
//import tw from "twin.macro";
import VideoPlayer from 'components/propios/VideoPlayer';
//import IconoRecorrido from 'components/propios/IconoRecorrido';
import IconoVideo360 from './IconoVideo360';
//import styles from 'href="https://vjs.zencdn.net/7.11.4/video-js.css"';


  //const ContenedorVideo =  tw.div`h-24 flex! flex-col bg-red-500 sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-2xl relative focus:outline-none`;
  //`h-40 flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;

 


const MiVideo = ({ source }) => {

    if (!source) {
        return <div>Cargando...</div>;
    }

    const videoJsOptions = {
        autoplay: false,
        preoload : '',
        autoload :true,
        controls: true,
        crossOrigin ='anonymous',
        fluid :true ,
        responsive :true,
        width : "600" ,
        projection : '360',
        poster :'../video/jfk-poster.jpg',
        notSupportedMessage: false,
        sources: [{
          src: source,
          type: 'video/mp4'
        }]
      }
      
//../video/tres.mp4
      
      return (      
         <div className="card hover:shadow-lg"> 
            <div className="embedcontainer sm:p-2  lg:p-5  ">       
            <div className="m-2">
                     
                     
                        <VideoPlayer { ...videoJsOptions } /></div>
                        <div className="m-4">
                            <span className="font-bold">Video 360º</span>
                            <span className="block text-primary-500 text-sm">Experiencia inmersiva, sus clientes sentiran que están presentes en el lugar</span>
            </div>
                        
                        <div className="relative top-5 p-5">
                            
                        </div>
                        <div className="absolute top-0 right-0 px-5 py-5"><IconoVideo360/>
                          </div>
                          
         </div>                 
                  </div>

      );

        
            
    
};
//<img src="../../images/drone2.jpg" alt="stew" className=" sm:h-40  w-full object-cover"/>
//<ContenedorVideo><div className="aspect-w-16 aspect-h-9 bg-gren-500"></div></ContenedorVideo>

//<div className="bg-yellow-500 p-10"><VideoPlayer { ...videoJsOptions } /></div>
export default MiVideo;