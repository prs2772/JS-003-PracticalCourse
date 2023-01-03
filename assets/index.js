import MediaPlayer from './MediaPlayer/mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlayPause = document.querySelector('#playButton');
const buttonMuteUnmute = document.querySelector('#muteButton');
const player = new MediaPlayer({ element: video, plugins: [
  new AutoPlay()
] });

buttonPlayPause.onclick = () => {
  if(player.media.paused){
    player.play();
  }else{
    player.pause();
  }
}

buttonMuteUnmute.onclick = () => {
  if(player.media.muted){
    player.unmute();
  }else{
    player.mute();
  }
}
