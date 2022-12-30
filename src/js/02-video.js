import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', function () {
  console.log('paused the video!');
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
    console.log(videoCurrentTime);
    if (videoCurrentTime === null) {
      return;
    }
    player.setCurrentTime(videoCurrentTime);
  } catch (err) {
    console.log(err);
  }
};

setTimeFromLS();
