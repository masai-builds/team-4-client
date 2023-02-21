import React, { useState } from "react";
import "./Navbar.css";
import Profilecomponent from "./Profilecomponent";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
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

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Box position="relative" top="0" bg="whiteAlpha.900" w="100%" zIndex="1">
        <Box boxShadow="sm">
          <Flex
            position={"relative"}
            w={"97%"}
            align="center"
            m="auto"
            h={{ sm: "40px", md: "60px" }}
            justifyContent={"space-between"}
            color={"gray.600"}
          >
            <Flex align="center" flex={"2"}>
              <Link to="/dashboard">
                {" "}
                <Image
                  objectFit="contain"
                  minH={"30px"}
                  minW="80px"
                  src={masaiimage}
                  alt="Masai logo"
                />
              </Link>

              <Hide below="md">
                <Flex w="65%" justifyContent={"space-around"} align="center">
                  <Box className="li">
                    <NavLink to="/lectures">Lectures</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/assignments">Assignments</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/quizzes">Quizzes</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/tickets">Tickets</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/discussions">Discussions</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/notifications">Notifications</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/messages">Messages</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/electives">Electives</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/announcements">Announcements</NavLink>
                  </Box>
                  <Box className="li">
                    <NavLink to="/courses">Courses</NavLink>
                  </Box>
                </Flex>

                <Box ml={"100px"} onClick={() => setShowProfile(!showProfile)}>
                  gurubilli siva (fw15_393)
                  <i
                    style={{ marginLeft: "20px" }}
                    className="fa-solid fa-circle-chevron-down"
                  ></i>
                </Box>
              </Hide>
            </Flex>
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
        </Box>

        {showProfile && <Profilecomponent setshow1={setShowProfile} />}

        {/* this is part is like when user enter into smaller screens the navbar appear on left  side as side bar  */}

        <div
          id="navbar-mobile"
          className={clicked ? "navbar-mobile active" : "navbar-mobile"}
        >
          <li>
            <NavLink to="/lectures">Lectures</NavLink>
          </li>
          <li>
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          <li>
            <NavLink to="/admin/signup">Quizzes</NavLink>
          </li>
          <li>
            <NavLink to="/tickets">Tickets</NavLink>
          </li>
          <li>
            <NavLink to="/discussons">Discussons</NavLink>
          </li>
          <li>
            <NavLink to="/notifications">Notifications</NavLink>
          </li>
          <li>
            <NavLink to="/messages">Messages</NavLink>
          </li>
          <li>
            <NavLink to="/electives">Electives</NavLink>
          </li>
          <li>
            <NavLink to="/announcements">Announcements</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <Divider borderColor="gray.300" />
          <Text color="black" padding="10px">
            <NavLink to="/user/profile">Profile</NavLink>
          </Text>
          <Text color="black" padding="10px">
            <NavLink to="/transcript">Transcript </NavLink>
          </Text>
          <Text color="black" padding="10px">
            Logout
          </Text>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
