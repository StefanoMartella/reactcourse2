import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from "./../action-types/counter-action-types";

export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}

export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER,
  };
}
