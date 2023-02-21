import * as yup from "yup";
import { useFormik } from "formik";

import React from "react";

import React,{useState,useEffect} from "react";

import "./index.css";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { masaiimage } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

import { LoginService } from "../../../Services/AuthServices";

interface IFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email("Invalid email address")
    .required("username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    
});

const initialValues: IFormData = {
  username: "",
  password: "",
  rememberMe: false,
 
};

const onSubmit = async (values: IFormData) => {
  LoginService(values)
  if (values.rememberMe ) {
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);
  }
  if (values.rememberMe) {
    sessionStorage.setItem("username", values.username);
    sessionStorage.setItem("password", values.password);
  }
};

export default function AdminLogin() {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
    
  });

  const navigate = useNavigate()

  const gotoSignup =()=>{
    navigate("/admin/signup")
  }

import { LoginService,IAuthloginResponse } from "../../../Services/AuthServices";

//interface form form data
interface IFormData {
  username: string;
  password: string;
  token: string;
  rememberMe: boolean;
  error:string;
}

//validating schema for yup library
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email("Invalid Email address")
    .required("Email  is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("password is required"),
});

//initial values for form data
const initialValues: IFormData = {
  username: "",
  password: "",
  token: "",
  rememberMe: false,
  error:""
};

//admin login component
export default function AdminLogin() {

  const [isLoading,setLoading] = useState<boolean>(false)
  const [BackendError,setBackendError] =useState({
    backendErrorMessage:"",
    errorFromBackend:false
  })
  const navigate = useNavigate();

  //when clicking on onSubmit button call loginservices for api calling
  const onSubmit = async (values: IFormData) => {



     
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)



    LoginService(values).then((res:IAuthloginResponse)=>{

      if(res.token && res.user.roles[0].name!=="NORMAL_USER"){
       navigate("/admin/dashboard")
        //setting for remember me in
      if (values.rememberMe && res.token) {
       localStorage.setItem("username", values.username);
       localStorage.setItem("password", values.password);
     }
     if (!values.rememberMe) {
       sessionStorage.setItem("username", values.username);
       sessionStorage.setItem("password", values.password);
     }
    }
        if(!res.token){
      setBackendError({ ...BackendError,
      errorFromBackend:true})
     }
      
  })
  
  
       
    if (values.rememberMe) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    }
    if (!values.rememberMe) {
      sessionStorage.setItem("username", values.username);
      sessionStorage.setItem("password", values.password);
    }
  };

  //destructuring the different methods in useformik
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

 

  return (
    <>
      <div className="container">
        <Container mt="120px" alignItems="center" w="100%" centerContent>
          <Image
            height="60px"
            objectFit="contain"
            src={masaiimage}
            alt="Masai logo"
          />
          <Box
            w={["full", "md"]}
            p="10px 20px 20px 30px"
            mx="auto"

            h="auto"

            mt="30px"
            border={["none"]}
            bg="white"
            borderColor={["", "grey.300"]}
            borderRadius={10}
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"

          > 
          

            >
            {
              BackendError.errorFromBackend && 
              <div className="errorlist">
                <ul>
                 <p >Whoops! Something went wrong.
                     <li> These credentials do not match our records.</li>
  
                     </p>
                      </ul>
                </div>}

       

            <form onSubmit={handleSubmit}>
              <div>
                <FormLabel
                  fontSize=".875rem"
                  fontWeight="500"
                  color="rgb(55 65 81)"
                  mt={4}
                >
                  Emial
                </FormLabel>
                <Input
                  variant="outline"
                  type="username"
                  placeholder="Email"
                  name="username"
                  onChange={handleChange}

                  value={values.username}
                />
                {errors.username && <div className="error-showing-popup">{errors.username}</div>}

                  onBlur={handleBlur}
                  value={values.username}
                />
                {touched.username && errors.username && (
                  <div className="error-showing-popup">{errors.username}</div>
                )}

              </div>
              <div>
                <FormLabel
                  fontSize=".875rem"
                  fontWeight="500"
                  color="rgb(55 65 81)"
                  mt={4}
                >
                  Password
                </FormLabel>
                <Input
                  variant="outline"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}

                  value={values.password}
                />
                {errors.password && <div className="error-showing-popup">{errors.password}</div>}

                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <div className="error-showing-popup">{errors.password}</div>
                )}
              </div>
              <HStack mt="10px" w="full">
                <Checkbox
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                ></Checkbox>
                <Text color={"rgb(75 85 99)"} fontSize=".900rem">
                  Remember me
                </Text>
              </HStack>


              <Flex mt ="20px" justifyContent="flex-end">
                <HStack>
                  <Button
                    variant="link"
                    mr="55px"

              <Flex mt ="10px"  justifyContent="space-between" flexWrap="wrap">
                <Box >
                  <Button
                    variant="link"
                   h="auto"
                   mt="20px"

                    _hover={{ color: "black" }}
                    fontSize={".850rem"}
                    textDecoration="underline"
                    color="rgb(75 85 99)"

                    onClick={() => navigate("/forgot-password")}
                  >
                    Forget your password?
                  </Button>
                  <button className="button"  onClick={gotoSignup}>
                    <Text fontSize="14px"> SIGN UP</Text>
                  </button>
                  <button className="button" type="submit">
                    <Text fontSize="14px"> LOG IN</Text>
                  </button>
                </HStack>

                    ml="50px"
                    onClick={() => navigate("/forgotpassword")}
                  >
                    Forget your password?
                  </Button>
                  </Box>
                  <Box>
                  <Button
                bg="rgb(31 41 55)"
                color="white"
                _hover={{ bg: "rgb(55 65 81)" }}
                type="submit"
                w="90px"
                h="35px"
                ml="10px"
                mt="10px"
                onClick={()=>navigate("/admin/signup")}
              >
              <Text fontSize="14px">SIGN UP</Text>
              </Button>
                  <Button
                isLoading={isLoading}
                bg="rgb(31 41 55)"
                color="white"
                _hover={{ bg: "rgb(55 65 81)" }}
                
                type="submit"
                w="90px"
                h="35px"
                ml="10px"
                mt="10px"
              >
              <Text fontSize="14px">LOG IN</Text>
              </Button>
                  </Box>

              </Flex>
            </form>
          </Box>
        </Container>
      </div>
    </>
  );
}
