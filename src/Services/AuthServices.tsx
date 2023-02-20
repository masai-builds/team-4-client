import axios, { AxiosResponse } from "axios";
import bcrypt from "bcryptjs";

export interface IAuthlogin {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface IStudentAccountCreate {
  name: string;
  batch: string;
  section: string;
  email: string;
  password: string;
}

export interface IAdminAccountCreate {
  name: string;
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IReset {
  // email: string;
  password: string;
  confirmPassword: string;
}

export async function LoginService(data: IAuthlogin): Promise<IAuthlogin> {
  const { username, password } = data;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const response = await axios.post<IAuthlogin>("/api/login", {
    username,
    hashedPassword,
  });
  return response.data;
}

export async function StudentSignupService(
  data: IStudentAccountCreate
): Promise<IStudentAccountCreate> {
  const response = await axios.post<IStudentAccountCreate>(
    "/api/student/signup",
    { studentaccountDetails: data }
  );
  return response.data;
}

export async function AdminSignupService(
  data: IAdminAccountCreate
): Promise<IAdminAccountCreate> {
  const response = await axios.post<IAdminAccountCreate>("/api/admin/signup", {
    studentaccountDetails: data,
  });
  return response.data;
}

interface IbatchArray {
  id: number;
  batchName: string;
  student: string[];
}

export async function getBatchArrray() {
  const response: AxiosResponse<IbatchArray[]> = await axios.get("api/batch");
  return response.data;
}
interface IsectionArray {
  id: number;
  sectionName: string;
  student: string[];
}

export async function getSectionArrray(): Promise<IsectionArray[]> {
  const response: AxiosResponse<IsectionArray[]> = await axios.get(
    "/api/section"
  );
  return response.data;
}

export async function ForgotPasswordService(
  data: IForgotPassword
): Promise<IForgotPassword> {
  const { email } = data;

  const response = await axios.post<IForgotPassword>(
    "/forgot-password",
    {
      email,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
}

export async function ResetService(data: IReset): Promise<IReset> {
  // const { password, confirmPassword } = data;
  // const salt = bcrypt.genSaltSync(10);
  // const hashedPassword = bcrypt.hashSync(password, salt);

  const response = await axios.post<IReset>(
    "/reset-password",
    data,

    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("response", response);
  return response.data;
}
