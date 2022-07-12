import {
  GET_TECHS,
  DELETE_TECH,
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        loading: false,
        techs: action.payload,
      };
    case ADD_TECH:
      return {
        ...state,
        loading: false,
        techs: [...state.techs, action.payload],
      };
    case DELETE_TECH:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
