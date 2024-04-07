import { createStore } from "redux";

const addData = (name, age) => ({
  type: "ADD_DATA",
  payload: { name, age },
});

const deleteData = (index) => ({
  type: "DELETE_DATA",
  payload: index,
});

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export { store, addData, deleteData };
