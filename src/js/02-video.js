import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const playerContainer = document.getElementById('vimeo-player');

const playerOptions = {
  url: 'https://player.vimeo.com/video/236203659',
  width: 640,
  height: 360,
  autoplay: true,
};

const player = new Player(playerContainer, playerOptions);

const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}, 1000);

player.on('timeupdate', saveCurrentTime);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}
