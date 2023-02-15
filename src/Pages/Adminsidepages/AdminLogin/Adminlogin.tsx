import React, { useState } from 'react';
import './Adminlogin.css';
import { masaiimage } from '../../../assets/assets';
import Tooltip from '../../../components/Tooltip/Tooltip';
import { validatePassword, validateEmail } from '../../../components/Emailvalidator';
import Navbar from '../../../components/StudentNavbar/Navbar';
import Secondnav from '../../../components/AdminsideComponents/AdminLecture/Secondnav';
import {
  Flex,
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  Image,
  Checkbox,
  Button,
  Container,
  HStack,
  FormErrorMessage,
} from '@chakra-ui/react';


interface IAdminLoginProps {}
  
//validation Error state
interface IValidationError {
  message: string;
  value?: string | IValidationError;
}

const Adminlogin = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState("");
  const [forgotPass, setForgotPass] = useState(false);
  const [show, setShow] = useState(false);
  const [passwordError, setPasswordError] = useState<IValidationError | undefined>();
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [emailError,setEmailError] = useState(false)
  const [emailError1,setEmailError1] = useState("")



  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
          //validating password
    let res = validatePassword(loginPassword);
    if (res) {
      setPasswordError({ message: res });
      setShowPasswordError(true);
    
            //validating email
    
    
    } else {
      
      // code to submit the form goes here. after get api
    }
  };

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setLoginEmail(e.target.value)
     setEmailError(false)
          if (validateEmail(loginEmail) === false) {
           setEmailError1("email wrong")
            setEmailError(true)

}
  }

  return (
    <div className='container'>
      <Navbar />
      <Secondnav/>
      <Container w='100%' centerContent>
        <Image boxSize='150px' objectFit='contain' mt='40px' src={masaiimage} alt='Masai logo' />
        <Box
          w={['full', 'md']}
          p='10px 20px 20px 30px'
          mx='auto'
          border={['none']}
          bg='white'
          borderColor={['', 'grey.300']}
          borderRadius={10}
          boxShadow='2px 4px 6px rgba(0, 0, 0, 0.1)'
        >
          <FormControl isInvalid={emailError}>
            <FormLabel fontSize='.900rem' fontWeight='500' color='rgb(55 65 81)' mt={4}>
              Email
            </FormLabel>
            <Input variant='outline' placeholder='Email' onChange={handleChange} />
            <FormErrorMessage color={"tomoto"}>{emailError1}</FormErrorMessage>
           
          </FormControl>
          <FormControl>
            <FormLabel fontSize='.900rem' fontWeight='500' color='rgb(55 65 81)' mt={4}>
              Password
            </FormLabel>
            <Input variant='outline' required placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)} />
            {showPasswordError && (
              <Tooltip value={passwordError?.message || ''} show={showPasswordError} setShow={setShowPasswordError} />
            )}
          </FormControl>
          <HStack mt='10px' w='full'>
            <Checkbox  ></Checkbox>
            <Text color={'rgb(75 85 99)'} fontSize='.900rem'>
              Remember Me
            </Text>
          </HStack>
          <Flex justifyContent='flex-end'>
            <HStack>
              <Button variant='link'   _hover={{ color:"black" }} fontSize={'.900rem'} textDecoration='underline' color='rgb(75 85 99)'>
                Forget your password?
              </Button>
              <Button
                bg='rgb(31 41 55)'
           h="35px"   w="80px" color="white"  rounded="10px" onClick={handleSubmit as React.MouseEventHandler<HTMLButtonElement>}>Login</Button>
          </HStack>
      </Flex>
   </Box>
 </Container>
</div>

  )
}

export default Adminlogin;