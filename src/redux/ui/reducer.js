import actions from './action';

const initState = {
  loading: false,
  isOpen: [],
  menuOpen: true,
};

function UseReducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case actions.SET_MENU:
      return {
        ...state,
        isOpen: [...action.payload],
      };
    case actions.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return {
        ...state,
      };
  }
}

export default UseReducer;
