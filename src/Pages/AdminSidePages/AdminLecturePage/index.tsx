
import React from "react";
import "../../../App.css";
import Secondnav from "../../../components/AdminsideComponents/AdminLecture/Secondnav";

import Navbar from "../../../components/StudentNavbar/Navbar";

const AdminLecture = () => {

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
import React, { useState } from "react";
import "./index.css";
import Secondnav from "../../../components/AdminsideComponents/AdminLecture/Secondnav";

import Navbar from "../../../components/AdminsideComponents/AdminNavbar/index";
import TableHeading from "./TableHeading";

const AdminLecture = () => {
  const [filterValues, setFilterValues] = useState({
    title: "",
    batch: "",
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
      <Navbar />
      <Secondnav />



      <Box w="80%" ml="10%" mt="60px" h="auto"    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
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
              md: "1fr 1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            }}
            gap={4}
          >
            <Select
              name="branch"
              onChange={handleChange}
              width={selectWidth}
              placeholder="Select branch"
            >
              <option value="branch1">Branch 1</option>
              <option value="branch2">Branch 2</option>
              <option value="branch3">Branch 3</option>
            </Select>

            <Select
              name="section"
              width={selectWidth}
              placeholder="Select section"
              onChange={handleChange}
            >
              <option value="section1">Section 1</option>
              <option value="section2">Section 2</option>
              <option value="section3">Section 3</option>
            </Select>

            <Select
              name="type"
              width={selectWidth}
              placeholder="Select type"
              onChange={handleChange}
            >
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
              <option value="type4">Type 4</option>
            </Select>

            <Select
              name="date"
              width={selectWidth}
              placeholder="Select date"
              onChange={handleChange}
            />
          </Grid>
          <Grid
            mt={4}
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr",
            }}
            gap={4}
          >
            <Select
              name="user"
              width={selectWidth}
              placeholder="Select user"
              onChange={handleChange}
            >
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </Select>

            <Select
              name="week"
              width={selectWidth}
              placeholder="Select week"
              onChange={handleChange}
            >
              <option value="Sprint-1">Sprint-1</option>
              <option value="Sprint-2">Sprint-2</option>
              <option value="Sprint-3">Sprint-3</option>
              <option value="Sprint-4">Sprint-4</option>
            </Select>
            <Select
              name="day"
              width={selectWidth}
              placeholder="Select week day"
              onChange={handleChange}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </Select>
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
      <Box w="80%" ml="10%" bg="white" h="100vh">
        <TableHeading />
      </Box>
    </div>
  );
};

export default AdminLecture;
