import React from 'react'
import "../../../App.css"
import Secondnav from '../../../components/AdminsideComponents/AdminLecture/Secondnav'

import Navbar from '../../../components/StudentNavbar/Navbar'

const StudentLecture = () => {
  return (
    <div className='container'>
       <Navbar/>
       <Secondnav/>
  </div>
  )
}

export default StudentLecture