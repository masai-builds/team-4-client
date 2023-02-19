import React, { useState, Dispatch } from "react";
import { masaiimage } from "../../assets/assets";
import { useFormik } from "formik";
import * as yup from "yup";
import { ForgotPasswordService } from "../../Services/AuthServices";

import { useDispatch } from "react-redux";
import {
  Flex,
  Box,
  Input,
  FormControl,
  FormLabel,
  Image,
  Checkbox,
  Button,
  HStack,
  Text,
  Container,
} from "@chakra-ui/react";

interface IFormData {
  email: string;
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email("Invalid email address")
    .required("email is required"),
});

const initialValues: IFormData = {
  email: "",
};

const onSubmit = async (values: IFormData) => {
  ForgotPasswordService(values);
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
              Forgot your password no problem just let us know your email
              address and we will email password reset link. That will allow to
              chooose new one.
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel
                  fontWeight="500"
                  color="rgb(31,41,55)"
                  fontSize="15px"
                  mt={4}
                >
                  Email
                </FormLabel>
                <Input
                  variant="outline"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  value={values.username}
                />
                {errors.username && (
                  <div className="error-showing-popup">{errors.username}</div>
                )}
              </FormControl>

              <Flex justifyContent="flex-end">
                <HStack>
                  <Button
                    bg="black"
                    h="40px"
                    mt="20px"
                    w="auto"
                    color="white"
                    rounded="10px"
                  >
                    Email Password Reset Link
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
