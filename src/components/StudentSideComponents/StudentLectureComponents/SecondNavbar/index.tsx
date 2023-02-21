import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";


// this component is navbar below component in dash board page
const SecondNavbar = () => {
  const navigate = useNavigate();
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Box bg="white" p={2}>
      <Flex
        h={isLargerThan900 ? "50px" : "auto"}
        direction={isLargerThan900 ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
        borderRadius="5px"
        maxW="1200px"
        mx="auto"
      >
        <Box mb={isLargerThan900 ? 0 : 2}>
          <Heading size="md">Lectures</Heading>
        </Box>

       
      </Flex>
    </Box>
  );
};

export default SecondNavbar;
