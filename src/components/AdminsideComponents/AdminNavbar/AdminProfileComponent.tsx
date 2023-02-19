import React from "react";

import { Link } from "react-router-dom";
import { Box, Text, Divider } from "@chakra-ui/react";

// this component is for when clicking on user name in navbar this component will display
interface ProfilecomponentProps {
  setshow1: (show: boolean) => void;
}

const AdminProfileComponent = ({ setshow1 }: ProfilecomponentProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      position="absolute"
      width="200px"
      height="auto"
      marginTop="-10px"
      marginLeft="82%"
      border="1px solid #778087"
      borderRadius="5px"
      boxShadow="0 5px 15px rgba(0,0,0,0.06)"
      backgroundColor="white"
      p={3}
    >
      <Text color="#778087" fontSize="sm" padding="5px">
        Manage Access
      </Text>
      <Text color="black" padding="5px">
        <Link to="/admin/profile" onClick={() => setshow1(false)}>
          Profile
        </Link>
      </Text>
      <Text color="black" padding="5px">
        <Link to="admin/transcript" onClick={() => setshow1(false)}>
          Transcript{" "}
        </Link>
      </Text>
      <Divider borderColor="gray.300" />
      <Text color="black" padding="10px">
        Logout
      </Text>
    </Box>
  );
};

export default AdminProfileComponent;
