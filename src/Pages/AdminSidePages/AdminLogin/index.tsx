import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
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
            mt="30px"
            border={["none"]}
            bg="white"
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
                    _hover={{ color: "black" }}
                    fontSize={".850rem"}
                    textDecoration="underline"
                    color="rgb(75 85 99)"
                    onClick={() => navigate("/forgotpassword")}
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
              </Flex>
            </form>
          </Box>
        </Container>
      </div>
    </>
  );
}
