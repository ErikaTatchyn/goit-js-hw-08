import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', function () {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const setTimeFromLS = () => {
  try {
    const videoCurrentTime = localStorage.getItem('videoplayer-current-time');
    if (videoCurrentTime === null) {
      return;
    }
    player.setCurrentTime(videoCurrentTime);
  } catch (err) {
    console.log(err);
  }
};

setTimeFromLS();
