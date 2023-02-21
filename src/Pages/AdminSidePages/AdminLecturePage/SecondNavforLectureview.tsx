import React from "react";
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

// this component is lecture page navbar down below component
const SecondNavforLectureDetail = ({ id }: { id: string | undefined }) => {
  const navigate = useNavigate();
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Box bg="white" pt="20px" pb="20px">
      <Flex
        direction={isLargerThan900 ? "row" : "column"}
        alignItems="center"
        justifyContent="space-around"
        borderRadius="5px"
        maxW="1200px"
        mx="auto"
        flexWrap="wrap"
      >
        <Box mb={isLargerThan900 ? 0 : 2}>
          <Heading size="md">Lectures</Heading>
        </Box>

        <ButtonGroup spacing={2}>
          <Link to={`/admin/lectures`}>
            <Button
              bg="rgb(51, 61, 76)"
              h={isLargerThan900 ? "35px" : "auto"}
              color="white"
              _hover={{ bg: "rgb(41, 51, 66)" }}
            >
              {" "}
              BACK
            </Button>
          </Link>
          <Link to={`/admin/lectures/edit/${id}`}>
            <Button
              bg="rgb(51, 61, 76)"
              h={isLargerThan900 ? "35px" : "auto"}
              color="white"
              _hover={{ bg: "rgb(41, 51, 66)" }}
            >
              {" "}
              EDIT
            </Button>
          </Link>
          <Button
            bg="rgb(51, 61, 76)"
            h={isLargerThan900 ? "35px" : "auto"}
            color="white"
            _hover={{ bg: "rgb(41, 51, 66)" }}
          >
            {" "}
            DISCUSSIONS
          </Button>
          <Button
            bg="rgb(51, 61, 76)"
            h={isLargerThan900 ? "35px" : "auto"}
            color="white"
            _hover={{ bg: "rgb(41, 51, 66)" }}
          >
            {" "}
            COPY
          </Button>
          <Button
            bg="red"
            h={isLargerThan900 ? "35px" : "auto"}
            color="white"
            _hover={{ bg: "red" }}
          >
            {" "}
            DELETE
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default SecondNavforLectureDetail;
