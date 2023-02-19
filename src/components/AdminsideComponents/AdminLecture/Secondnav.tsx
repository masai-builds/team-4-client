import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import "../../../App.css";

// this component is  lecture page navbar down below component
const Secondnav = () => {
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

        <ButtonGroup spacing={2}>
          <Button
            bg="rgb(51, 61, 76)"
            h="35px"
            color="white"
            _hover={{ bg: "rgb(41, 51, 66)" }}
            onClick={() => navigate("/bookmarks")}
          >
            {" "}
            Create Lectures
          </Button>
          <Button
            bg="rgb(51, 61, 76)"
            h="35px"
            color="white"
            _hover={{ bg: "rgb(41, 51, 66)" }}
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
