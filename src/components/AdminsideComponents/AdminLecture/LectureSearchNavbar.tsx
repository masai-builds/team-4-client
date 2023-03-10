import React from "react";
import { useNavigate} from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  ButtonGroup,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import "../../../App.css";

// this component is  lecture page navbar down below component
const Secondnav = () => {
  const navigate = useNavigate();
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Box bg="white"  zIndex={isLargerThan900? "0":"1"} position="relative" mt="2px" p={2}>
      <Flex
        h={isLargerThan900 ? "50px" : "100px"}
        direction={isLargerThan900 ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
        borderRadius="5px"
        maxW="1200px"
        mx="auto"
      >
        <Box mb={isLargerThan900 ? 0 : 2}>
          <Heading size="md" >Lectures</Heading>
        </Box>
        <ButtonGroup spacing={2} >
          <Button
          w={isLargerThan900 ? "" : "120px"}
          fontSize={isLargerThan900 ? "16px" : "12px"}
            h="35px"
            color="white"
            bg="rgb(31 41 55)"
            _hover={{ bg: "rgb(76, 84, 95)" }}
            onClick={() => navigate("/admin/create-lectures")}
          >
            {" "}
            Create Lectures
          </Button>
          <Button
          fontSize={isLargerThan900 ? "16px" : "12px"}
            w={isLargerThan900 ? "" : "120px"}
            h="35px"
            color="white"
            bg="rgb(31 41 55)"
           _hover={{ bg: "rgb(76, 84, 95)" }}
            onClick={() => navigate("/admin/create-bulk-lectures")}
          >
            {" "}
            Create Bulk Lectures
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Secondnav;