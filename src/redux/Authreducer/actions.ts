import * as types from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export interface ILoginFormState {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface IAuthDetailSignup {
  name: string;
  email: string;
  password: string;
  reEnteredPassword: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetFormState {
  email: string;
  password: string;
  confirm: string;
}

export const AdminLoginAction =
  ({ email, password, rememberMe }: ILoginFormState) =>
  (dispatch: Dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    console.log(email, password, rememberMe);
    axios
      .post("admin/login", { email, password })
      .then((r) => {
        dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      })
      .catch((e) => {
        dispatch({ type: types.LOGIN_ERROR, payload: e });
      });
  };

export const AdminsignupAction =
  ({ name, email, password, reEnteredPassword }: IAuthDetailSignup) =>
  (dispatch: Dispatch) => {
    dispatch({ type: types.SIGNUP_REQUEST });
    console.log(name, email, password, reEnteredPassword);
    axios
      .post("/admin/signup", { name, email, password, reEnteredPassword })
      .then((r) => {
        dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data.token });
      })
      .catch((e) => {
        dispatch({ type: types.SIGNUP_ERROR, payload: e });
      });
  };

export const ForgotpasswordAction =
  ({ email }: IForgotPassword) =>
  (dispatch: Dispatch) => {
    axios.post("/forgot-password", { email }).then((r) => {
      dispatch({ type: types.FORGOT_EMAIL_REQUEST });
    });
  };

export const ResetAction =
  ({ email, password, confirm }: IResetFormState) =>
  (dispatch: Dispatch) => {
    dispatch({ type: types.RESET_REQUEST });
    console.log(email, password, confirm);
    axios
      .post("/reset-password/:token", { email, password, confirm })
      .then((r) => {
        dispatch({ type: types.RESET_SUCCESS, payload: r.data.token });
      })
      .catch((e) => {
        dispatch({ type: types.RESET_ERROR, payload: e });
      });
  };
