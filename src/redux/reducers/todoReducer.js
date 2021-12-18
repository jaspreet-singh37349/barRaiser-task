import { ADD_TODO } from '../actions/todo/actionType';

const initialState = {
  items: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [1],
      };
    default:
      return state;
  }
};

export default todoReducer;
