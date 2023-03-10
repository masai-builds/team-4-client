import React from "react";
import { Box, Flex } from "@chakra-ui/react";



const Note = ({ lectureDetail }: any) => {
  return (
    <Box>
      {lectureDetail.notes !== "" && (
        <Box m="auto">
          <Flex
            align="center"
            justify="center"
            fontSize={26}
            fontWeight="bold"
            color="#504de6"
            mt="30px"
          >
            Lecture Note
          </Flex>
          {lectureDetail.notes && (
            <Box fontSize={20} fontWeight="bolder">
              {lectureDetail.notes}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Note;
