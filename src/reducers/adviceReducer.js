import { FETCH_POST } from "../actions/types";
const initialState = {
  item: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
