import React, { useState } from 'react'
import { masaiimage } from "../../assets/assets";
import { useFormik } from "formik";
import * as yup from "yup";
import { ResetService } from "../../Services/AuthServices";
import { useParams } from "react-router-dom";

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
    confirmPassword: string;
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

const initialValues: IFormData = {
    password: "",
    confirmPassword: "",
    token: ""
};

const ForgetPassword = () => {
    const { token = "" } = useParams<{ token: string }>();
    const [isLoading, setLoading] = useState<boolean>(false)
    const [message, setMessage]= useState<string>("")
    const onSubmit = async (values: IFormData) => {
        values.token = token;
        ResetService(values).then((res)=>{
            setMessage(res)
        })
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    };

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
                        {message==="Reset Password Successfully" ? <Box color="#48BB78" >{message}</Box>:<Box color="#E53E3E" >{message}</Box>}
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
                                        isLoading={isLoading}
                                        bg="rgb(31 41 55)"
                                        color="white"
                                        _hover={{ bg: "rgb(55 65 81)" }}
                                        h="40px"
                                        mt="20px"
                                        w="auto"
                                        rounded="10px"
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
