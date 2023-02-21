import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";





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
import { gifloader, masaiimage } from "../../../assets/assets";

import {
  AdminSignupService,
  IAdminAccountCreate,

} from "../../../Services/AuthServices";
import "./index.css";
import { useNavigate } from "react-router-dom";

  IAuthsignupResponse,

} from "../../../Services/AuthServices";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Captcha from "./Captcha";

//interface for form data

interface IFormData {
  name: string;
  email: string;
  password: string;
  reEnterPassword: string;

  captchaMatched: boolean;
 
}

const validationSchema = yup.object().shape({
  name: yup.string().required("This feild is required").min(3, "Name should not be less than 3 character"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()

}

interface Icaptchamatched {
  captchaMatch: boolean;
}

//validation Schema for validating values using yupp library
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("This feild is required")
    .min(3, "Name should not be less than 3 character"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")

    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires a uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[_]/, "Password requires a underScore Symbol"),

  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "ReEntered Password must match witch previous password"),
});


  reEnterPassword: yup
    .string()
    .required("Please Re-Enter password")
    .oneOf(
      [yup.ref("password")],
      "ReEntered Password must match witch previous password"
    ),
});

//initial values of form data

const initialValues: IFormData = {
  name: "",
  email: "",
  password: "",
  reEnterPassword: "",

  captchaMatched: false,
  
};

const onSubmit = async (values: IFormData) => {
  console.log(values);
  AdminSignupService(values);
};

export default function AdminSignup() {
  const [signupState, setSignupState] = useState(initialValues);
  const navigate = useNavigate();
  const handleSuccess = () =>
    setSignupState({ ...signupState, captchaMatched: true });
  const handleFailure = () =>
    setSignupState({ ...signupState, captchaMatched: false });



  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


};

const initialCaptcha: Icaptchamatched = {
  captchaMatch: false,
};

//signup for admin component start here
export default function AdminSignup() {
  const [signupState, setSignupState] = useState(initialValues);
  const [BackendError,setBackendError] = useState({
    backendErrorMessage:"",
    errorFromBackend:false
  })
const [isLoading,setLoading] = useState(false)
  const [CaptchaMatched, setCaptchaMatched] = useState(initialCaptcha);
  const navigate = useNavigate();

  const setCaptcha1 = (value: boolean) => {
    setCaptchaMatched({ ...CaptchaMatched, captchaMatch: value });
  };
  // using formik and yup library just checking validations using useformik
  //onSubmitting value call the services for api call
  const onSubmit = async (values: IFormData) => {
   
    if (CaptchaMatched.captchaMatch) {

       
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)


    AdminSignupService(values).then((res:IAuthsignupResponse)=>{
       
      
      if(res.name && res.roles[0].name!=="NORMAL_USER"){
   navigate("/admin/login")
        }
        
        if(!res.name){
         setBackendError({...BackendError, errorFromBackend:true});
        }
     })
   
     }
    
  };

  //destructuring all values from useformik
  const { handleSubmit, handleBlur, touched, handleChange, values, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  // when clicking login button user goes to login page

  const gotoLogin = () => {
    navigate("/admin/login");
  };



  return (
    <>
      <div className="container">
        <Container mt="60px" alignItems="center" w="100%" centerContent>
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
            mt="30px"
            border={["none"]}
            bg="white"
            borderColor={["", "grey.300"]}
            borderRadius={10}
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <form  onSubmit={handleSubmit}>
              <div>
                <FormLabel
                  fontSize=".875rem"
                  fontWeight="500"
                  color="rgb(55 65 81)"
                  mt={4}
                >
                  Name
                </FormLabel>
                <Input
                  variant="outline"
                  type="name"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && <div className="error-showing-popup">{errors.name}</div>}
              </div>

              <div>
                <FormLabel
                  fontSize=".875rem"
                  fontWeight="500"
                  color="rgb(55 65 81)"
                  mt={4}
                >
                  Email
                </FormLabel>
                <Input
                  variant="outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && <div className="error-showing-popup">{errors.email}</div>}
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
              </div>
              <div>
                <FormLabel
                  fontSize=".875rem"
                  fontWeight="500"
                  color="rgb(55 65 81)"
                  mt={4}
                >
                  Re Enter Password
                </FormLabel>
                <Input
                  variant="outline"
                  type="password"
                  placeholder="Re Enter Password"
                  name="reEnterPassword"
                  onChange={handleChange}
                  value={values.reEnterPassword}
                />
                {errors.reEnterPassword && <div className="error-showing-popup">{errors.reEnterPassword}</div>}
              </div>

              <Box w="200px" mt="20px">
              

                {/* {signupState.captchaMatched ? (
                  <p className="captchamatched">captcha matched</p>
                ) : (
                  <p className="captchanotmatched">captcha not matched</p>
                )} */}
              </Box>
              <Flex justifyContent="flex-end">
                <button className="buttonlogin" onClick={gotoLogin}>
                  <Text fontSize="14px">
                    If Already Signup? please Log in here
                  </Text>
                </button>
                <button className="button" type="submit">
                  <Text fontSize="14px">SIGN UP</Text>
                </button>
              </Flex>
            </form>
          </Box>
        </Container>
      </div>
    </>

  return (
    <div className="container">
      <Container mt="60px" alignItems="center" w="100%" centerContent>
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
          mt="30px"
          border={["none"]}
          bg="white"
          h="auto"
          borderColor={["", "grey.300"]}
          borderRadius={10}
          boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <form onSubmit={handleSubmit}>
            <div>
              <FormLabel
                fontSize=".875rem"
                fontWeight="500"
                color="rgb(55 65 81)"
                mt={4}
              >
                Name
              </FormLabel>
              <Input
                variant="outline"
                type="name"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <div className="error-showing-popup">{errors.name}</div>
              )}
            </div>

            <div>
              <FormLabel
                fontSize=".875rem"
                fontWeight="500"
                color="rgb(55 65 81)"
                mt={4}
              >
                Email
              </FormLabel>
              <Input
                variant="outline"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="error-showing-popup">{errors.email}</div>
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
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className="error-showing-popup">{errors.password}</div>
              )}
            </div>
            <div>
              <FormLabel
                fontSize=".875rem"
                fontWeight="500"
                color="rgb(55 65 81)"
                mt={4}
              >
                Re Enter Password
              </FormLabel>
              <Input
                variant="outline"
                type="password"
                placeholder="Re Enter Password"
                name="reEnterPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reEnterPassword}
              />
              {touched.reEnterPassword && errors.reEnterPassword && (
                <div className="error-showing-popup">
                  {errors.reEnterPassword}
                </div>
              )}
            </div>

            <Box w="100%" mt="20px">
              <Captcha setCaptcha1={setCaptcha1} />
            </Box>
            <Flex justifyContent="center">
              <button className="buttonlogin" onClick={gotoLogin}>
                <Text fontSize="14px">
                  If Already Signup? please Log in here
                </Text>
              </button>
              <Button
                isLoading={isLoading}
                bg="rgb(31 41 55)"
                color="white"
                _hover={{ bg: "rgb(55 65 81)" }}
                
                type="submit"
                w="90px"
                h="35px"
                ml="10px"
                mt="20px"
              >
              <Text fontSize="14px">SIGN UP</Text>
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
    </div>

  );
}
