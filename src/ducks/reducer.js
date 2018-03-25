import axios from "axios";

//Actions

const TEST_ACTION = "TEAT_ACTION";

//ACTION CREATORS

export function testAction() {
  return {
    type: TEST_ACTION,
    payload: axios
      .get("/api/test")
      .then(response => response.data)
      .catch(err => err)
  };
}

// INITIAL STATE

const initialState = {
  testData: []
};

export default function reducer(state = initialState, action) {
  //each action is currently just async actions
  switch (action.type) {
    case `${TEST_ACTION}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${TEST_ACTION}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        testData: action.payload
      });

    case `${TEST_ACTION}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });

    default:
      return state;
  }
}
