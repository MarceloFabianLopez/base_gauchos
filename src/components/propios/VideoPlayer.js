import React from 'react';
//import THREE from   'three';
import videojs from 'video.js';
//import videojs
//import videojsvr from 'videojs-vr';
import 'videojs-vr/dist/videojs-vr.min.js';
//import 'videojs-panorama/dist/videojs-panorama.v4.min.js';
//import 'videojs-vr';
import 'video.js/dist/video-js.css';
import 'videojs-vr/dist/videojs-vr.css';


export default class VideoPlayer extends React.Component {
  
  /* constructor(props) {
    super(props);
    //const data = this.props.data1 ||[];
    //const carpeta =this.props.carpeta;
   const opciones= this.props.videoJsOptions;
    /* this.state = {
      opciones
    }; */
  //} */
  componentDidMount() {

    //var videojs = require('video.js');
  //require('videojs-vr');
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this.options_.vr);
        const player = this
        player.mediainfo = player.mediainfo || {}
        player.mediainfo.projection = 'EAC'
        player.bigPlayButton = true
        player.loadingSpinner = true
        player.debug = true
        player.notSupportedMessage= false
       console.log('player.mediainfo.projection :>> ', player.mediainfo.projection);
        

       /*  player.panorama({
          clickAndDrag: true,
          callback: function () {
            player.play();
          }
      }); */
         if (this.options_.vr) { 
          player.vr({
          projection: 'EAC',
          debug: true,
          forceCardboard: true 
          

        })  
      }
      
       // player.poster('../video/jfk-poster.jpg')
      })
//equirectangular para gear 360


    /* // instantiate Video.js
    var videojs = require('video.js');
    require('videojs-vr');
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
    this.player.vr({projection: '360'}); */
    this.player.responsive(true);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
//className="video-js vjs-theme-city"
  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div  >	
        <div className="video-js vjs-4-3">
          <video   ref={ node => this.videoNode = node } ></video>
        </div>
      </div>
    )
  }
}
//className="video-js vjs-theme-city"
//data-vjs-player