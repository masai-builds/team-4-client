import React from 'react'
import {Route,Routes} from "react-router-dom"
import Dashborad from './Dashboard/Dashborad.jsx'
import Navbar from './Navbar/Navbar.jsx'
import ForgetPassword from './ForgetPassword/ForgetPassword.jsx'
import Adminsignup from '../Pages/AdminSignup/Adminsignup.jsx'
import Adminlogin from '../Pages/AdminLogin/Adminlogin.jsx'
import AdminLecture from '../Pages/AdminLecturePage/AdminLecture.jsx'
import Studentlogin from '../Pages/StudentLogin/Studentlogin.jsx'
import Studentsignup from '../Pages/StudentSignup/Studentsignup.jsx'
import Resetpassword from './../Pages/Resetpassword/Resetpassword';



const Allroutes = () => {

  return (
      <div>
        
        <Routes>
    
               <Route path="/dashboard" element={<Dashborad/>} />
               <Route path="/forgotpassword" element={<ForgetPassword/>} />
               <Route path="/user/profile" />
               <Route path ="/transcript"  />
               <Route  path ="/admin/signup" element ={<Adminsignup />}/>
               <Route  path ="/admin/login" element ={<Adminlogin />}/>
               <Route path="/admin/lectures" element ={<AdminLecture />}/>
               <Route  path ="/student/login" element ={<Studentlogin />}/>
               <Route  path ="/student/signup" element ={<Studentsignup />}/>
               <Route  path ="/reset-password" element ={<Resetpassword />}/>
         </Routes>
        
      </div>
  )
}

export default Allroutes