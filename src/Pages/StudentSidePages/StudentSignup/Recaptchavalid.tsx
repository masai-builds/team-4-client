import React, { useEffect ,useState} from "react";


import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha
} from "react-simple-captcha";


interface ICaptchavalue{
    captcha:string,
    ismatched:boolean
}

const initialValue :ICaptchavalue={
  captcha:"",
  ismatched:false
}
const Recaptchavalid: React.FC = () => {
 
const [captchaValue,setCaptchaValue] = useState(initialValue)


  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
   const {name,value} = event.target;
     
   setCaptchaValue({...captchaValue,captcha:value})
   if(validateCaptcha(captchaValue.captcha)){
    
    setCaptchaValue({...captchaValue,ismatched:true})
    
   }
   console.log(captchaValue)
  }


  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  const doSubmit = () => {
    loadCaptchaEnginge(8)
    console.log(captchaValue)
  }
   


  return (
    <div>
      <div className="container">
        <div className="form-group">
          <div className="col mt-3">
            <LoadCanvasTemplate />
          </div>

          <div className="col mt-3">
            <div>
              <input
                placeholder="Enter Captcha"
                id="user_captcha_input"
                name="user_captcha_input"
                type="text"
                value={captchaValue.captcha}
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="col mt-3">
            <div>
              <button
                className="btn btn-primary"
                onClick={() => doSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recaptchavalid;
