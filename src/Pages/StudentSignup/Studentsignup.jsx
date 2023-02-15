import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { masaiimage } from '../../assets/assets';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
    Select
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Studentsignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const Navigate=useNavigate()
    const changePath=()=>{
        Navigate("/student/login")
    }
  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={"center"}>
            <Image
              w="150px"
              src={masaiimage}
              alt="Dan Abramov"
            />
          </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
          <Select placeholder='Select Batch'>
  <option value='FTWEB15'>FT WEB 15</option>
  <option value='FTWEB16'>FT WEB 16</option>
  <option value='FTWEB17'>FT WEB 17</option>
</Select>
          </Stack>
          <Stack spacing={10} pt={2}>
          <Select placeholder='Select Section'>
  <option value='JS101'>JS 101</option>
  <option value='JS201'>JS 201</option>
  <option value='RCT101'>RCT 101</option>
  <option value='RCT201'>RCT 201</option>
  <option value='NEM101'>NEM 101</option>
  <option value='NEM201'>NEM 201</option>
  <option value='REVISION'>REVISION</option>
</Select>
          </Stack>
         
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'#2D3748'}
              color={'white'}
              _hover={{
                bg: '#171923',
              }}>
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <Link color={'blue.400'} onClick={changePath}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Studentsignup