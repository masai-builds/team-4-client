import React from 'react'
import { masaiimage } from "../../assets/assets";
import { useFormik } from "formik";
import * as yup from "yup";
import { ResetService } from "../../Services/AuthServices";
import {
  Flex,
  Box,
  Input,
  FormLabel,
  Image,
  Button,
  HStack,
  Text,
  Container,
} from "@chakra-ui/react";



interface IFormData {
  password: string;
  confirmPassword:string;
  token: any;
}

const validationSchema = yup.object().shape({
    password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires a uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[_]/, "Password requires a underScore Symbol"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "ReEntered Password must match witch previous password"),
});
const queryParams = new URLSearchParams(window.location.search);
const token = queryParams.get('token');

const initialValues: IFormData = {
  password: "",
  confirmPassword:"",
  token:token
};

const onSubmit = async (values: IFormData) => {
  console.log(values)
   ResetService(values);
};

const ForgetPassword = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <>
      <div className="container">
        <Container w="100%" centerContent>
          <Image
            boxSize="120px"
            mt="0px"
            objectFit="contain"
            src={masaiimage}
            alt="Masai logo"
          />

          <Box
            w={["full", "md"]}
            p="20px"
            mx="auto"
            border={["none"]}
            bg="white"
            borderColor={["", "grey.300"]}
            borderRadius={10}
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <Text fontSize="16px" color="rgb(113, 120, 128)">
              Reset your password
            </Text>
            <form onSubmit={handleSubmit}>
              <div >
                <FormLabel
                  fontWeight="500"
                  color="rgb(31,41,55)"
                  fontSize="15px"
                  mt={4}
                >
                  Password
                </FormLabel>
                <Input
                  name="password"
                  variant="outline"
                  placeholder="New Password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <div className="error-showing-popup">{errors.password}</div>
                )}
              </div>
              <div >
                <FormLabel
                  fontWeight="500"
                  color="rgb(31,41,55)"
                  fontSize="15px"
                  mt={4}
                >
                  Confirm Password
                </FormLabel>
                <Input
                  name="confirmPassword"
                  variant="outline"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && (
                  <div className="error-showing-popup">{errors.confirmPassword}</div>
                )}
              </div>
              {/* <Input type="hidden" name="token" value={values.token} /> */}
              <Input
                  name="token"
                  variant="outline"
                  placeholder=""
                   onChange={handleChange}
                  value={values.token}
                   type="hidden"
                />

              <Flex justifyContent="flex-end">
                <HStack>
                  <Button
                    bg="black"
                    h="40px"
                    mt="20px"
                    w="auto"
                    color="white"
                    rounded="10px"
                    _hover={{bg:"black"}}
                    type="submit"
                  >
                     Password Reset 
                  </Button>
                </HStack>
              </Flex>
            </form>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default ForgetPassword;
