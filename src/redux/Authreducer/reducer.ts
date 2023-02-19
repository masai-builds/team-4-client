import * as types from "./actionTypes";
const initialState = {
  isAdmin: false,
  isAuthenticated: false,
  token: "",
  isLoading: false,
  isError: false,
};
export interface IAuthInitialState {
  isAdmin: boolean;
  isAuthenticated: boolean;
  token: string;
  isLoading: boolean;
  isError: boolean;
}

export const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        isAdmin: true,
        token: payload,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
      case types.FORGOT_EMAIL_REQUEST:
        return {
          ...state
        }
        case types.RESET_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
        case types.RESET_SUCCESS:
          return {
            ...state,
            isLoading: false,
            isError: false
          };
        case types.RESET_ERROR:
          return {
            ...state,
            isLoading: false,
            isError: true
          };
    default:
      return state;
  }
};
