import React from 'react'
import { masaiimage } from '../../assets/assets';
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

const Resetpassword = () => {
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
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={1}>
                {/* <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                </Stack> */}

                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"flex-end"}
                  gap={6}
                >
                  {/* <Link textDecoration={"underline"}>Forgot password?</Link> */}
                  <Button
                    bg={"#2D3748"}
                    color={"white"}
                    _hover={{
                      bg: "#171923",
                    }}
                  >
                    Reset Password
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Resetpassword