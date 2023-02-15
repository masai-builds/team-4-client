import React, { useRef, useReducer, useState } from "react";
import Tooltip from "../../../components/Tooltip/Tooltip";
import {
  validateEmail,
  validatePassword,
} from "../../../components/Emailvalidator";
import ReCAPTCHA from "react-google-recaptcha";
import {
  masaiimage,
  recaptchasitekey,
  reacptchasecret,
} from "../../../assets/assets";
import "../../../App.css";
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
  Container,
} from "@chakra-ui/react";

// type of elements of form state
interface SignupFormState {
  name: string;
  email: string;
  password: string;
  reEnteredPassword: string;
}

// reducer action types  for handling reducer  function
type SignupFormAction =
  | { type: "name"; payload: string }
  | { type: "email"; payload: string }
  | { type: "password"; payload: string }
  | { type: "reEnteredPassword"; payload: string };

// initial state signup form
const initialState: SignupFormState = {
  name: "",
  email: "",
  password: "",
  reEnteredPassword: "",
};

// set email and password values through useReducer
const reducer = (state: SignupFormState, action: SignupFormAction) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reEnteredPassword":
      return { ...state, reEnteredPassword: action.payload };
    default:
      return state;
  }
};

const AdminSignup = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showRetypePassword, setShowRetypeError] = useState(false);
  const [showempty, setShowEmpty] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const reRef = useRef<ReCAPTCHA>(null);

  // onclicking on recaptcha set recaptcha token
  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token);
    console.log(token);
  };

  // validating for reacptcha
  const handleRecaptchaSubmit = async () => {
    try {
      const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${reacptchasecret}&response=${recaptchaToken}`,
        }
      );
      const result = await response.json();
      if (result.success) {
        console.log("reCAPTCHA validation succeeded");
      } else {
        console.error("reCAPTCHA validation failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleRecaptchaSubmit();

    if (!state.name) {
      setShowEmpty(true);
    }
    // validating email
    if (validateEmail(state.email) === false) {
      setShow(true);
    }

    //validating password
    let res = validatePassword(state.password);
    if (res) {
      setPasswordError(res);
      setShowPasswordError(true);
    }
    if (state.password !== state.reEnteredPassword) {
      setShowRetypeError(true);
    } else {
      setPasswordError("");
      //  code to submit the form goes here. after get api
    }
  };

  return (
    <>
      <div className="container">
        <Container mt= "20px" w="100%" centerContent>
          <Image
            height="60px"
            objectFit="contain"
            mt="40px"
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
            {/* {<p>Whoops! Something went wrong
  <ul>  These credentials do not match our records.</ul></p>} */}

            <FormControl>
              <FormLabel
                fontWeight="500"
                color="rgb(55 65 81)"
                fontSize=".900rem"
                mt={4}
              >
                Name
              </FormLabel>
              <Input
                isRequired
                variant="outline"
                placeholder="Name"
                onChange={(e) =>
                  setState({ type: "name", payload: e.target.value })
                }
              />
              {showempty && (
                <Tooltip
                  value={"please fill all feilds"}
                  show={showempty}
                  setShow={setShowEmpty}
                />
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="500"
                color="rgb(55 65 81)"
                fontSize=".900rem"
                mt={4}
              >
                Email
              </FormLabel>
              <Input
                variant="outline"
                placeholder="Email"
                onChange={(e) =>
                  setState({ type: "email", payload: e.target.value })
                }
              />
              {show && (
                <Tooltip
                  value={"Please enter a valid email address."}
                  show={show}
                  setShow={setShow}
                />
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="500"
                color="rgb(55 65 81)"
                fontSize=".900rem"
                mt={4}
              >
                Password
              </FormLabel>
              <Input
                variant="outline"
                required
                placeholder="Password"
                onChange={(e) =>
                  setState({ type: "password", payload: e.target.value })
                }
              />
              {showPasswordError && (
                <Tooltip
                  value={passwordError}
                  show={showPasswordError}
                  setShow={setShowPasswordError}
                />
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="500"
                color="rgb(55 65 81)"
                fontSize=".900rem"
                mt={4}
              >
                Re-enter Password
              </FormLabel>
              <Input
                variant="outline"
                placeholder="Re-enter Password"
                onChange={(e) =>
                  setState({
                    type: "reEnteredPassword",
                    payload: e.target.value,
                  })
                }
              />
              {showRetypePassword && (
                <Tooltip
                  value={"password did not matched"}
                  show={showRetypePassword}
                  setShow={setShowRetypeError}
                />
              )}
            </FormControl>

            <FormControl mt="20px">
              <ReCAPTCHA
                sitekey={recaptchasitekey}
                ref={reRef}
                onChange={handleRecaptcha}
              />
            </FormControl>

            <Flex justifyContent="flex-end">
              <HStack>
                <Button
                 bg="rgb(31 41 55)"
                  h="35px"
                  w="90px"
                  color="white"
                  rounded="10px"
                  _hover={{bg: "black" }}
                  onClick={handleSubmit}
                >
                  Signup
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default AdminSignup;
