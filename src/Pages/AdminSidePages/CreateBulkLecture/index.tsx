import React from 'react';
import {
  Box,
  Button,
  Input,
  Text
} from '@chakra-ui/react';
import "../AdminLecturePage/index.css";
import Navbar from "../../../components/StudentSideComponents/StudentNavbar/Navbar";
import SecondNavforLectureCreate from "../../../components/AdminsideComponents/CreateLecture/SecondNavforCreateLecture";

const CreateBulkLecture = () => {

const handleFileUpload=()=>{

}


  return (
    <div className="container">
      <Navbar />
      <SecondNavforLectureCreate />
      <Box
        w={["full", "md"]}
        p="10px 20px 20px 30px"
        mx="auto"
        h="auto"
        mt="30px"
        border={["none"]}
        bg="white"
        borderColor={["", "grey.300"]}
        borderRadius={10}
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Text>Upload csv file to create bulk lectures</Text>
        <Input type="file" id="csvFile" placeholder="Choose csv file lecture uploading" accept=".csv"
        onChange={handleFileUpload} />
        
        <Button
          w="50%"
          mt="20px"
          color="white"
          bg="rgb(31 41 55)"
          _hover={{ bg: "rgb(76, 84, 95)" }}
        >
          {" "}
          create bulk Lectures
        </Button>
        </Box>
     
    </div>
  );
};

export default CreateBulkLecture;
