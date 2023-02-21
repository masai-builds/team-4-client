import React, { useState } from "react";
import "./index.css";
import Navbar from "../../../components/AdminsideComponents/AdminNavbar";
import { useParams } from "react-router-dom";
import SecondNavforLectureDetail from "./SecondNavforLectureview";
import { Badge, Box, Flex, Text } from "@chakra-ui/react";

const AdminLectureDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lectureDetail, setLectureDetail] = useState({});

  return (
    <div>
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bg="gray.50"
      pb="20%"
      
    >
      <Navbar />
      <SecondNavforLectureDetail id={id} />
      <Box
        flex="1"
        mx={{ base: "10%", md: "20%" }}
        mt={{ base: "10%", md: "3%" }}
        bg="white"
        textAlign="start"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
       h="auto"
      >
        <Box p="3%" h="120px">
          <Text>sissssssssssiiiiiis</Text>
          <Flex alignItems="center" flexWrap="wrap">
            <Text>fw1233 |</Text>
            <Text ml="10px">rct 201 |</Text>
            <Badge
              bg="orange"
              size="sm"
              borderRadius="10px"
              p="6px"
              ml="10px"
            >
              Check Attendance
            </Badge>
          </Flex>
          <Text>user nrupul </Text>
        </Box>

        <Box bg="gray.100" h="60px" p="20px">
          <Flex>
            <Text>Title</Text>
            <Text ml="35%">sissssssssssiiiiiis</Text>
          </Flex>
        </Box>
        <Box bg="white" h="60px" p="20px">
          <Flex flexWrap="wrap">
            <Text>Category-Type</Text>
            <Badge
              ml="25%"
              p="6px"
              bg="orange"
              borderRadius="10px"
              color="white"
            >
              CODING
            </Badge>
            <Badge
              ml="20px"
              p="6px"
              borderRadius="10px"
              bg="blue.500"
              color="white"
            >
              VIDEO
            </Badge>
          </Flex>
        </Box>
        <Box bg="gray.100" h="60px" p="20px">
          <Flex >
            <Text>Schedule</Text>
            <Text ml="30%">1996-33-45 - 12.90pm</Text>
          </Flex>
        </Box>
       
        <Box bg="white" h="60px" p="20px">
          <Flex>
            <Text>Concludes</Text>
            <Text ml="30%">1996-33-45 - 12.90pm</Text>
          </Flex>
       
        
     </Box>
</Box>
</Box>
</div>
    
  )
}

export default AdminLectureDetail