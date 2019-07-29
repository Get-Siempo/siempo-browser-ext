$(document).ready(function () {
    getSettings(function (res) {

        console.log(res)
    })
    // notification()
})


function notification() {
    var notification = new Notification('Notification title', {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: 'Hey there! Youve been notified!',
      });
  
      playSound(notifySound)
}


/* globals Audio, browser */
/* eslint-disable no-unused-vars */
function playSound (volume) {
    if (volume === 0) {
      return
    }
  
    var sound = new Audio(browser.extension.getURL('../sounds/sound.wav'))
    sound.volume = volume
    sound.play()
  }
  