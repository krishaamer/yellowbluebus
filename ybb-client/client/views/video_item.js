import videojs from 'video.js';
import cloudinary from "cloudinary-core";
import "cloudinary-video-player";
import 'videojs-youtube';

Template.video_item.onRendered(() => {

  const self = Template.instance();

  const cl = cloudinary.Cloudinary.new({ cloud_name: "yellow-blue-bus"});
  const url = cl.url(self.data.file, { width: 400, crop: "pad", ac: "none", quality: "auto:low", video_codec: "auto"});

  /*
  const player = cl.videoPlayer('example-player');
  player.source('encouraged_2', { sourceTypes: ['hls'] });
  */

	videojs(document.querySelector('.video-player'), {
    preload: 'auto',
    muted: true,
    controls: false,
    forceSSL: true,
    autoplay: true,
    loop: false,
    textTrackSettings: false,
    techOrder: ['html5', 'youtube'],
    youtube: {
      ytControls: 0,
      rel: 0,
      autohide: 0,
      origin: "",
      widget_referrer: "",
      iv_load_policy: 3,
      modestbranding: 1, 
      disablekb: 1, 
      showinfo: 0,
      fs: 0,
      enablejsapi: 1,
    },
  }).ready(function() {

    this.poster('');
    /*
    this.src({
      src: 'https://www.youtube.com/watch?v=' + self.data.file,
      type: 'video/youtube',
    });
    */

    this.src({
      src: url,
      type: 'video'
    });
    this.play();
  });

});