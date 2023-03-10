import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  ButtonGroup,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { referAndEarnLink, sprintplanlink } from "../../../assets/assets";

// this component is navbar below component in dash board page
const DashboardNavbar= () => {
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
          <Heading size="md">Todays Schedule</Heading>
        </Box>
       <ButtonGroup spacing={2}>
          <Button
            h="35px"
            color="white"
            bg="rgb(31 41 55)"
            _hover={{ bg: "rgb(76, 84, 95)" }}
            onClick={() => navigate("/student/bookmarks")}
          >
            Bookmarks
          </Button>
          <Button
            bg="rgb(31 41 55)"
            _hover={{ bg: "rgb(76, 84, 95)" }}
            h="35px"
            color="white"
          >
            <Link to={sprintplanlink}>Sprint Plan</Link>
          </Button>
          <Button
           bg="rgb(31 41 55)"
           _hover={{ bg: "rgb(76, 84, 95)" }}
            h="35px"
            color="white"
          >
            <Link to={referAndEarnLink}>Refer &amp; Earn</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default DashboardNavbar
