import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function setMinutes() {
  controls.addEventListener("click", (event) => {
    let minutes = Number(el.minutes.textContent);
    const somaMinutes = minutes + 5;

    return somaMinutes;
  });
}
