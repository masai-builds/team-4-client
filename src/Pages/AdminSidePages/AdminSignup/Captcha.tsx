import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import "./index.css";
import { setLocale } from "yup";
interface User {
  username: string;
  captchaMatch: boolean;
}

//captcha function goes here
const Captcha = ({ setCaptcha1 }: any) => {
  const [user, setUser] = useState<User>({
    username: "",
    captchaMatch: false,
  });

  const characters = "K3+fMabcZ?#9123GTrsd@SO";

  //this function  is for generating random captcha
  const generateString = (length: number): string => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [captcha, setCaptcha] = useState<string>(generateString(6));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);

  //onsubmitting bttton it checks validate coreect captcha entered or not
  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (captcha === user.username) {
        setCaptcha1(true);
        setIsCaptchaVerified(true);
      } else {
        setCaptcha(generateString(6));
      }
      setIsLoading(false);
    }, 3000);
    return user.captchaMatch;
  };

  // when click on handle retry button this function again genearate recaptcha
  const handleRetry = () => {
    setCaptcha(generateString(6));
    setUser({ username: "", captchaMatch: false });
    setIsCaptchaVerified(false);
  };

  return (
    <div>
      <Container w="100%">
        {isCaptchaVerified ? (
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Text mt="8" fontSize="xl" color="green.500">
              Captcha Verified
            </Text>
            <Button
              ml="20px"
              mt="8"
              bg="rgb(31 41 55)"
              minWidth="90px"
              h="35px"
              borderRadius="10px"
              color="white"
              _hover={{ bg: "rgb(55 65 81)" }}
              onClick={handleRetry}
            >
              Retry
            </Button>
          </Flex>
        ) : (
          <>
            <h4
              id="captcha"
              style={{
                marginTop: "16px",
                marginLeft: "10px",
                position: "relative",
                fontStyle: "italic",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              {captcha}
            </h4>
            <div className="form-group row"></div>

            <FormLabel
              fontSize=".875rem"
              fontWeight="500"
              color="rgb(55 65 81)"
              mt={4}
            >
              Enter Captcha
            </FormLabel>
            <Flex w="100%" justifyContent={"space-between"} flexWrap="wrap">
              <Input
                id="inputType"
                placeholder="Enter Captcha"
                name="username"
                onChange={handleChange}
                autoComplete="off"
                w="60%"
                mt="10px"
              />

              <Button
                isLoading={isLoading}
                bg="rgb(31 41 55)"
                color="white"
                _hover={{ bg: "rgb(55 65 81)" }}
                width="auto"
                onClick={onSubmit}
                w="auto"
                ml="5px"
                mt="10px"
              >
                Verify Captcha
              </Button>
            </Flex>
          </>
        )}
      </Container>
    </div>
  );
};

export default Captcha;
