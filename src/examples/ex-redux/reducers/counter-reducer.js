import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from "./../action-types/counter-action-types";

const initialState = {
  counter: 0,
  key: "value",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
