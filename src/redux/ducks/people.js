const ADD = "add";
const REMOVE = "remove";

export const add = () => ({
  type: ADD,
});

const initialState = {
  people: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log(action);
      return {
        ...state,
        people: [...state.people, action.value],
      };
    case REMOVE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
