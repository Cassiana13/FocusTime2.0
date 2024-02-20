import { controls, controlsMusic } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function registerControlsMusic() {
  controlsMusic.addEventListener("click", (event) => {
    const music = event.target.dataset.action;

    if (typeof actions[music] != "function") {
      return;
    }

    actions[music]();
  });
}

export function setMore() {
  el.buttonMore.addEventListener("click", function () {
    let minutes = Number(el.minutes.textContent);
    minutes = minutes + 5;
    timer.updateDisplay(minutes);
  });
}
export function setLess() {
  el.buttonLess.addEventListener("click", function () {
    let minutes = Number(el.minutes.textContent);
    minutes = minutes - 5;
    timer.updateDisplay(minutes);
  });
}
