import React from 'react'
import "../../../App.css";
interface ShowErrorProps {
    children: React.ReactNode;
  }

const Showerror = (props :ShowErrorProps) => {
  return (
    <div>
    <p className='email-error-showing-popup'>{props.children}</p>

    </div>
  )
}

export default Showerror