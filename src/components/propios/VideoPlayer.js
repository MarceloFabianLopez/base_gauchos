import React from 'react';
//import THREE from   'three';
import videojs from 'video.js';
//import videojs-vr.js from 'videojs-vr';
import 'videojs-vr/dist/videojs-vr.min.js';
//import 'videojs-vr';
import '../../../node_modules/video.js/dist/video-js.css';
import '../../../node_modules/videojs-vr/dist/videojs-vr.css';


export default class VideoPlayer extends React.Component {
  componentDidMount() {

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this)
        const player = this
        player.mediainfo = player.mediainfo || {}
        player.mediainfo.projection = 'equirectangular'
        player.bigPlayButton = true
        player.loadingSpinner = true
        
        player.vr({
          projection: '360',
          debug: false,
          forceCardboard: true

        })
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
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div className="video-js vjs-theme-city ">	
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } ></video>
        </div>
      </div>
    )
  }
}
//className="video-js vjs-theme-city"