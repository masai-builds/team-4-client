import AdminLecture from '../Pages/Adminsidepages/AdminLecturePage/AdminLecture';
import AdminSignup from '../Pages/Adminsidepages/AdminSignup/Adminsignup';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Adminlogin from '../Pages/Adminsidepages/AdminLogin/Adminlogin';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import Dashborad from './StudentDashboard/Dashborad';
import StudentLecture from '../Pages/Studentsidepages/StudentLecturePage/StudentLecture';

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashborad />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/user/profile" />
        <Route path="/transcript" />
        <Route path="/admin/lectures" element={<AdminLecture />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<Adminlogin />} />
        <Route path="/student/lectures" element={<StudentLecture />} />
        
      </Routes>
    </div>
  );
};

export default Allroutes;
