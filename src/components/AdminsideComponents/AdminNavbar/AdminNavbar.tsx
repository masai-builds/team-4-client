import React, { useState } from "react";
import "./AdminNavbar.css";
import { Link, NavLink } from "react-router-dom";
import {
  Divider,
  Text,
  Flex,
  Image,
  Box,
  Heading,
  Hide,
  Show,
  Tooltip,
} from "@chakra-ui/react";
import { masaiimage } from "../../../assets/assets";
import AdminProfileComponent from "./AdminProfileComponent";

//admin side navbar
const Navbar = () => {
  const [clicked, setcliked] = useState(false);
  const [show1, setshow1] = useState(false);

  //   this handleclick function for open and closing of side navbar in smaller screens
  const handleclick = () => {
    setcliked(!clicked);
  };

  return (
    <Box position={"sticky"} top="0" bg="whiteAlpha.900" w="100%" zIndex={"1"}>
      <Box boxShadow="sm">
        <Flex
          position={"relative"}
          w={"97%"}
          align="center"
          m="auto"
          h={"60px"}
          justifyContent={"space-between"}
          color={"gray.600"}
        >
          <Flex align="center" flex={"2"}>
            <Link to="/dashboard">
              {" "}
              <Image objectFit="contain" src={masaiimage} alt="Masai logo" />
            </Link>

            {/* navbar part links for each element  */}

            <Hide below="md">
              <Flex w="70%" justifyContent={"space-around"} align="center">
                <Box className="li">
                  <NavLink to="/admin/lectures">Lectures</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/assignments">Assignments</NavLink>
                </Box>
                <Box className="li">
                  {" "}
                  <NavLink to="/admin/quizzes">Quizzes</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/tickets">Tickets</NavLink>
                </Box>
                <Box className="li">
                  {" "}
                  <NavLink to="/admin/discussions">Discussions</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/notifications">Notifications</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/messages">Messages</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/electives">Electives</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/announcements">Announcements</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/questions">Questions</NavLink>
                </Box>
                <Box className="li">
                  <NavLink to="/admin/problems">problems</NavLink>
                </Box>
              </Flex>

              {/*  this part is about display hamburger in menu item for small screeens  */}
              <Box ml={"100px"} onClick={() => setshow1(!show1)}>
                {" "}
                gurubilli siva
                <i
                  style={{ marginLeft: "20px" }}
                  className="fa-solid fa-circle-chevron-down"
                ></i>
              </Box>
            </Hide>
          </Flex>
          {/*  this part is about display hamburger  menu item for small screeens  */}

          <Show below="md">
            <Box>
              <i
                id="bar"
                onClick={handleclick}
                className={clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </Box>
          </Show>
        </Flex>
        {/* when click on name of user container box dipaly based click action */}
        {show1 && <AdminProfileComponent setshow1={setshow1} />}

        {/* this is part is like when user enter into smaller screens the navbar appear on left side as side bar  */}

        <div
          id="navbar-mobile"
          className={clicked ? "navbar-mobile active" : "navbar-mobile"}
        >
          <li>
             <NavLink to="/admin/lectures">Lectures</NavLink>
          </li>
          <li>
           
            <NavLink to="/admin/assignments">Assignments</NavLink>
          </li>
          <li>
            
            <NavLink to="/admin/admin/signup">Quizzes</NavLink>
          </li>
          <li>
           
            <NavLink to="/admin/tickets">Tickets</NavLink>
          </li>
          <li>
           
            <NavLink to="/admin/discussons">Discussons</NavLink>
          </li>
          <li>
           
            <NavLink to="/admin/notifications">Notifications</NavLink>
          </li>
          <li>
           
            <NavLink to="/admin/messages">Messages</NavLink>
          </li>
          <li>
          
            <NavLink to="/admin/electives">Electives</NavLink>
          </li>
          <li>
           
            <NavLink to="/admin/announcements">Announcements</NavLink>
          </li>
          <li>
            <NavLink to="/admin/questions">Questions</NavLink>
          </li>
          <li>
            <NavLink to="/admin/problems">problems</NavLink>
          </li>
          <Divider borderColor="gray.300" />
          <Text color="black" padding="10px">
            <NavLink to="/admin/profile">Profile</NavLink>
          </Text>
          <Text color="black" padding="10px">
            <NavLink to="/transcript">Transcript </NavLink>
          </Text>
          <Text color="black" padding="10px">
            Logout
          </Text>
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
