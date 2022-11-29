import {
  btnPlay,
  btnStop,
  btnPlusMinutes,
  btnMinusMinutes,
  soundForestCard,
  soundRainCard,
  soundCafeteriaCard,
  soundFireplaceCard,
  soundForest,
  soundRain,
  soundCafeteria,
  soundFireplace
} from "./elements.js"

export default function Events ({controls, timer, sounds}) {
  btnPlay.addEventListener('click', function() {
    controls.playTimer()
    timer.timerCountdown()
  })
  
  btnStop.addEventListener('click', function() {
    controls.stopTimer()
    timer.pause()
    controls.resetTimer()
  })
  
  btnPlusMinutes.addEventListener('click', function() {
    controls.plusMinutes()
  })
  
  btnMinusMinutes.addEventListener('click', function(){
    controls.minusMinutes()
  })
  
  soundForestCard.addEventListener('click', function() {
    controls.soundForestCardOn()
    sounds.soundForestOn()
    soundRain.pause()
    soundCafeteria.pause()
    soundFireplace.pause()
  })
  
  soundRainCard.addEventListener('click', function() {
    controls.soundRainCardOn()
    sounds.soundRainOn()
    soundForest.pause()
    soundCafeteria.pause()
    soundFireplace.pause()
  })
  
  soundCafeteriaCard.addEventListener('click', function() {
    controls.soundCafeteriaCardOn()
    sounds.soundCafeteriaOn()
    soundForest.pause()
    soundRain.pause()
    soundFireplace.pause()
  })
  
  soundFireplaceCard.addEventListener('click', function() {
    controls.soundFireplaceCardOn()
    sounds.soundFireplaceOn()
    soundForest.pause()
    soundRain.pause()
    soundCafeteria.pause()
  })
}