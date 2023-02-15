import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import { masaiimage } from './../../assets/assets';
import Tooltip from "../../components/Tooltip/Tooltip";
import { validatePassword,validateEmail} from '../../components/Helper';
import {

  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";

const Studentlogin = () => {
  const Navigate=useNavigate()
    const changePath=()=>{
        Navigate("/student/signup")
    }

    const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [forgotPass, setForgotPass] = useState(false);
   const [show,setShow]= useState(false)
   const [passwordError,setPasswordError] = useState()
 const [showPasswordError,setShowPasswordError] =useState(false)

// const passwordError = "Password must have more than 8 characters, contain a capital letter, contain a number, and should not contain an underscore."

const handleSubmit = (e) => {
  e.preventDefault();
  
  let res= validatePassword(loginPassword)
    if(res){
    setPasswordError(res)
     setShowPasswordError(true)
      }

     if (validateEmail(loginEmail)===false) {
    setShow(true)
    } 
    else {
    
    //  code to submit the form goes here. after get api
  
    
  }
};
  return (
    <Box>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={3} mx={"auto"} maxW={"lg"} py={12} px={6} w={"1200px"}>
          <Stack align={"center"}>
            <Image
              w="150px"
              src={masaiimage}
              alt="Dan Abramov"
            />
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={2}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input required="true" variant='outline'  placeholder='email' onChange={(e)=>setLoginEmail(e.target.value)}/>
                    {show && (<Tooltip value={"Please enter a valid email address."} show={show} setShow={setShow}/>)}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input variant='outline' required placeholder='password' onChange={(e)=>setLoginPassword(e.target.value)} />
                   {showPasswordError && (<Tooltip value ={passwordError} show={showPasswordError} setShow={setShowPasswordError}/>)}
              </FormControl>
              <Stack spacing={1}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                </Stack>

                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"flex-end"}
                  gap={6}
                >
                  <Link textDecoration={"underline"}>Forgot password?</Link>
                  <Button
                    bg={"#2D3748"}
                    color={"white"}
                    _hover={{
                      bg: "#171923",
                    }}
                    onClick={handleSubmit}>
                    Sign in
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Don't have an account ? <Link color={"blue.400"} onClick={changePath}>Signup</Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Studentlogin;
