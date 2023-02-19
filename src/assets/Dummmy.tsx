//   // onclicking on recaptcha set recaptcha token
//   const handleRecaptcha = (token: string | null) => {
//     setState({ type: "recaptchatoken", payload: token });
//     console.log(token);
//   };

//   // validating for reacptcha
//   const handleRecaptchaSubmit : () => void =async () => {
//     try {
//       const response = await fetch(
//         "https://www.google.com/recaptcha/api/siteverify",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: `secret=${reacptchasecret}&response=${
//             state.recaptchaToken
//           }&challenge=${"1234"}`,
//         }
//       );
//       const result = await response.json();

//       if (result.success) {
//         console.log("reCAPTCHA validation succeeded");
//       } else {
//         console.error("reCAPTCHA validation failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };



  
            {/* <FormControl mt="20px">
              <ReCAPTCHA
                sitekey={recaptchasitekey}
                ref={reRef}
                onChange={handleRecaptcha}
              />
            </FormControl> */}

           // handleRecaptchaSubmit();
   