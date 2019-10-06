export const initialState = {
  count: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_ER_QS":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

export const 
