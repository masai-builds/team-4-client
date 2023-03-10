import { Action } from "./action";
import { ActionTypes } from "./actionTypes";

export interface IisAuthstate {
  isAuth: boolean;
  username: string;
  userId:number
  isAdmin: boolean;
}
const initialAuthState = {
  isAuth: false,
  username: "",
  userId:1,
  isAdmin: false,
};

export const reducer = (
  state: IisAuthstate = initialAuthState,
  action: Action
): any => {
  const { payload } = action;
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, isAuth: true, username: payload.username };
    default:
      return state;
  }
};
