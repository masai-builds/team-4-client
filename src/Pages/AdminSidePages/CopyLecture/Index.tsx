import {
    Container,
    Box,
    Grid,
    Input,
    Select,
    useBreakpointValue,
    Flex,
    Button,
    FormLabel,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import "../CreateLecturePage/index.css";
  import Navbar from "../../../components/AdminsideComponents/AdminNavbar/index";
  import {ICreateLectureValues} from "../../../Services/LectureInterface"
  import {
      LectureCopyService,
  } from "../../../Services/LectureServices";
  import SecondNavforLectureCreate from "../CreateLecturePage/SecondNavforCreateLecture";
  import { useParams } from "react-router-dom";
  import InputTakingSection from "../../../components/AdminsideComponents/CreateLecture/InputTakingSection";

  
  const CopyLecture = () => {
    const [LectureCopyValues, setLectureCopyValues] =
      useState<ICreateLectureValues>({
        title: "",
        batch: "",
        categoery: "",
        section: "",
        type: "",
        schedule: new Date(),
        conclude:new Date(),
        user: "",
        tags: [],
        hideVideo: false,
        optional:false,
        zoomLink: "",
        week: "",
        day: "",
        notes: "",
      });
  
    // get data from params using useparams
    const { id } = useParams();

    //Edit lecture service call
    const CopyLecture = () => {
      LectureCopyService(LectureCopyValues, id).then((res) => {});   
    };
  
    return (
      <div className="container">
        <Navbar />
        <SecondNavforLectureCreate />
        <Box
          w="80%"
          ml="10%"
          mt="60px"
          h="auto"
          boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
          <Box w="100%" p="2%" bg="white" h="auto">
            <InputTakingSection LectureValues ={LectureCopyValues} setLectureValues={setLectureCopyValues} />    
            <Flex justifyContent={"flex-end"}>
              <Button
                w="32%"
                mt="20px"
                color="white"
                bg="rgb(31 41 55)"
                _hover={{ bg: "rgb(76, 84, 95)" }}
                onClick={CopyLecture}
              >
               COPY LECTURE
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box w="80%" ml="10%" bg="white" h="100vh"></Box>
      </div>
    );
  };
  
  export default CopyLecture;