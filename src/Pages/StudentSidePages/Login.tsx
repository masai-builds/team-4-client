import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentLogin from "./StudentLogin";
import StudentSignup from "./StudentSignup";

const Login = () => {
  const [goToSignup, setGotoSignup] = useState(false);
  const navigate = useNavigate();

  //when entering into login it checks for username is available in localstorage if not available checks in session storage
  useEffect(() => {
    let username;
    let userType;
     userType = localStorage.getItem("userType");
    username = localStorage.getItem("username");
    if (!username) {
      userType = sessionStorage.getItem("userType");
      username = sessionStorage.getItem("username");
    }
    if (username) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {goToSignup ? (
        <StudentSignup setGotoSignup={setGotoSignup} />
      ) : (
        <StudentLogin setGotoSignup={setGotoSignup} />
      )}
    </div>
  );
};

export default Login;
