import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
import "./index.css";
import {
  Container,
  Flex,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { masaiimage } from "../../assets/assets";
import { ResetService } from "../../Services/AuthServices";

interface IFormData {
  email: string;
  password: string;
  confirm: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
  confirm: yup.string().min(8, "Password must be at least 8 characters"),
});

const initialValues: IFormData = {
  email: "",
  password: "",
  confirm: "",
};

const onSubmit = async (values: IFormData) => {
  ResetService(values);
};

export default function ResetPassword() {
  const { handleSubmit, handleChange, values, errors } = useFormik({
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
                {errors.email && (
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
                  value={values.password}
                />
                {errors.password && (
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
                  Confirm Password
                </FormLabel>
                <Input
                  variant="outline"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm"
                  onChange={handleChange}
                  value={values.confirm}
                />
                {errors.password && (
                  <div className="error-showing-popup">{errors.confirm}</div>
                )}
              </div>

              <Flex mt="20px" justifyContent="flex-end">
                <HStack>
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
