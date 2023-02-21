import React from "react";
import Secondnavbar from "./Secondnavbar";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
// import "../../App.css";
import Navbar from "../StudentNavbar/Navbar";

// this component displays student side dashboard
const Dashborad = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Secondnavbar />
        <Box
          w="80%"
          p="10px"
          borderRadius="10px"
          minHeight="40px"
          maxHeight="auto"
          bg="white"
          ml="10%"
          mt="70px"
        ></Box>
      </div>
    </>
  );
};

export default Dashborad;
