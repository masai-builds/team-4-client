import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Text,
  Button,
  Flex,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const TableHeading = () => {

  const ads = [
    {
      id: 1,
      title: "siva wete349995995995",
      created: "siva",

      batch: "fw121",
      startTime: "9.30",
      concludes: "12.30",
    },
    {
      id: 2,
      title: "siva wete349995995995",
      created: "siva",

      batch: "fw121",
      startTime: "9.30",
      concludes: "12.30",
    },
  ];
const navigate = useNavigate()

  


  return (
    <div>
      <Box overflow={"auto"}>
        <TableContainer>
          <Table position="relative" w="100%">
            <Thead h="50px" bg="rgb(243,244,246)">
              <Tr>
                <Th w="6%">ID</Th>
                <Th w="35%">TITLE</Th>
                <Th w="15%">BATCH</Th>
                <Th w="15%">START TIME</Th>
                <Th w="15%">CONCLUDES</Th>
                <Th w="15%">VIEW & EDIT</Th>
              </Tr>
            </Thead>
            <Tbody w="100%">
              {ads.map((ad) => (
                <Tr key={ad.id}>
                  <Td w="6%">{ad.id}</Td>
                  <Td w="35%">
                    <Text fontSize="20px">
                      {ad.title}{" "}
                      <Badge
                        colorScheme={"green"}
                        variant="solid"
                        h="20px"
                        w="40px"
                        pl="8px"
                      >
                        LIVE
                      </Badge>
                    </Text>
                    <p>
                      {ad.created}by created at {ad.startTime} date
                    </p>
                  </Td>
                  <Td w="15%">{ad.batch}</Td>
                  <Td w="15%">{ad.startTime}</Td>
                  <Td w="15%">{ad.concludes}</Td>
                  <Td w="15%">
                    <Flex>
                    <Link to={`/admin/lectures/${ad.id}`}>  <Button
                        variant="link"
                        textDecoration={"none"}
                        color="blue"
                        
                      >
                        View
                      </Button></Link>
                      <Link to={`/admin/lectures/edit/${ad.id}`}>  <Button
                        variant="link"
                        textDecoration={"none"}
                        color="blue"
                        
                      >
                        Edit
                      </Button></Link>
                    </Flex>
                    <Button variant="link" textDecoration={"none"} color="blue">
                      Attendance
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TableHeading;
