import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function setmore() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
function resetButton() {
  sounds.buttonPressAudioFlorest.pause();
  sounds.buttonPressAudioRain.pause();
  sounds.buttonPressAudioCoffee.pause();
  sounds.buttonPressAudioFirePlace.pause();
  el.buttonFlorest.style.backgroundColor = "var(--bg-button-white)";
  el.buttonRain.style.backgroundColor = "var(--bg-button-white)";
  el.buttonCoffe.style.backgroundColor = "var(--bg-button-white)";
  el.buttonFirePlace.style.backgroundColor = "var(--bg-button-white)";
}

export function Florest() {
  resetButton();
  sounds.buttonPressAudioFlorest.play();
  el.buttonFlorest.style.backgroundColor = "var(--bg-button-blue)";
}

export function Rain() {
  resetButton();
  sounds.buttonPressAudioRain.play();
  el.buttonRain.style.backgroundColor = "var(--bg-button-blue)";
}

export function coffee() {
  resetButton();
  sounds.buttonPressAudioCoffee.play();
  el.buttonCoffe.style.backgroundColor = "var(--bg-button-blue)";
}
export function fireplace() {
  resetButton();
  sounds.buttonPressAudioFirePlace.play();
  el.buttonFirePlace.style.backgroundColor = "var(--bg-button-blue)";
}
