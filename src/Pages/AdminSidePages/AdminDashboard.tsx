import React from "react";
import "../../App.css";
import Navbar from "../../components/AdminsideComponents/AdminNavbar";
import { Container } from "@chakra-ui/react";

//there is nothing to show in this page from admin side
const AdminDashboard = () => {
  return (
    <div className="container">
      <Navbar />
   <Container bg=" rgb(243,244,246)">
   </Container>
    </div>
  );
};

export default AdminDashboard;
