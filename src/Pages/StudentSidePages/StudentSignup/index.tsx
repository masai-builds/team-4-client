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
  Select,
  Text,
} from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import {
  batchValues,
  gifloader,
  masaiimage,
  sectionValues,
} from "../../../Assets/Assets";

import {
  AdminSignupService,
  IAdminAccountCreate,
} from "../../../Services/AuthServices";
import "./index.css";
import { useNavigate } from "react-router-dom";
interface IFormData {
  name: string;
  batch: string;
  section: string;
  email: string;
  password: string;
  reEnterPassword: string;
  isAuthenticated: boolean;
}

const validationSchema = yup.object().shape({
  name: yup.string().min(3, "name must be 3 character"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .min(8, "password must be 8 characters long")
    .matches(/[0-9]/, "password requires a number")
    .matches(/[A-Z]/, "password requires a uppercase letter")
    .matches(/[a-z]/, "password requires a lowercase letter")
    .matches(/[^\w]/, "password requires a symbol"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "must match password field value"),
});

const initialValues: IFormData = {
  name: "",
  email: "",
  batch: "",
  section: "",
  password: "",
  reEnterPassword: "",
  isAuthenticated: false,
};

const onSubmit = async (values: IFormData) => {
  console.log(values);
  AdminSignupService(values);
};

export default function StudentSignup() {
  const [signupState, setSignupState] = useState(initialValues);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/student/login");
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
                  value={values.name}
                />
                {errors.name && <div className="error-showing-popup">{errors.name}</div>}
              </div>
              <FormLabel
                fontWeight="500"
                color="rgb(55 65 81)"
                fontSize=".900rem"
                mt={4}
              >
                Select batch
              </FormLabel>
              <Select
                className="selectbatch"
                name="batch"
                onChange={handleChange}
                value={values.batch}
                placeholder="Select an option"
              >
                {batchValues.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>

              <FormLabel
                fontWeight="500"
                color="rgb(55 65 81)"
                fontSize=".900rem"
                mt={4}
              >
                Select Section
              </FormLabel>
              <Select
                className="selectbatch"
                placeholder="Select an option"
                name="section"
                onChange={handleChange}
                value={values.section}
              >
                {sectionValues.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
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
                  name="reenterpassword"
                  onChange={handleChange}
                  value={values.reEnterPassword}
                />
                {errors.reEnterPassword && <div className="error-showing-pop-up">{errors.reEnterPassword}</div>}
              </div>

              <Flex justifyContent="flex-between">
                <button className="buttonlogin"  onClick={gotoLogin}>
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
  );
}