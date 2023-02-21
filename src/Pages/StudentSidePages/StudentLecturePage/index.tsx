import Navbar from '../../../components/StudentSideComponents/StudentNavbar/Navbar'
import SecondNavbar from '../../../components/StudentSideComponents/StudentLectureComponents/SecondNavbar'
import React,{useState} from 'react'
import {
    Container,
    Box,
    Grid,
    Input,
    Select,
    useBreakpointValue,
    Flex,
    Button,
  } from "@chakra-ui/react";

const StudentLecture = () => {
    const [filterValues, setFilterValues] = useState({
        title: "",
        category: "",
        section: "",
        type: "",
        user: "",
        date: "",
        week: "",
        day: "",
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFilterValues({ ...filterValues, [name]: value });
        console.log(filterValues);
      };
    
      const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFilterValues({ ...filterValues, [name]: value });
        console.log(filterValues);
      };
      const Reset = () => {};
    
      const gridColumn = useBreakpointValue({
        base: "1 / -1", // Full width on small screens
        md: "1 / 4", // Span two columns on medium screens
        lg: "1 / 5", // Span two columns starting from the second column on large screens
      });
      const selectWidth = useBreakpointValue({ base: "100%", md: "auto" });
  return (
    <div className="container">
        <Navbar/>
        <SecondNavbar/>
        <Box w="95%"  h="auto"  m="auto"  mt="60px"   boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
        <Box w="100%" p="2%" bg="white" h="auto">
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            
            <Input
              name="title"
              gridColumn={gridColumn}
              placeholder="Enter text"
              onChange={handleTitleChange}
            />
            
          </Grid>
          <Grid
            mt={4}
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr 1fr ",
              lg: "1fr 1fr 1fr ",
            }}
            gap={4}
          >
            <Box>
            <Box>Category</Box>
            <Select
              name="category"
              onChange={handleChange}
              width={selectWidth}
              placeholder="choose"
              
            >
              <option value="Coding">Coding</option>
              <option value="Problem">Problem</option>
              <option value="Algo">Algo</option>
            </Select>
            </Box>
             <Box><Box>Type</Box>
            <Select
              name="Type"
              width={selectWidth}
              placeholder="Choose"
              
            >
              <option value="section1">Section 1</option>
              <option value="section2">Section 2</option>
              <option value="section3">Section 3</option>
            </Select>
            </Box>
            <Box><Box>Instructors</Box>
            <Select
              name="type"
              width={selectWidth}
              placeholder="Choose"
             
            >
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
              <option value="type4">Type 4</option>
            </Select>
            </Box>
            <Box><Box>Scheduled</Box>
            <Select
              name="date"
              width={selectWidth}
              placeholder="Select date"
             
            />
            </Box>
            <Box><Box>Optional</Box>
             <Select
              name="user"
              width={selectWidth}
              placeholder="Choose"
              
            >
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </Select>
            </Box>
          </Grid>
           
           
         
          <Flex justifyContent={"flex-end"}>
            <Button
              w="32%"
              mt="20px"
              bg="rgb(31 41 55)"
              color="white"
              _hover={{ bg: "rgb(55 65 81)" }}
              onClick={Reset}
            >
              Reset
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default StudentLecture