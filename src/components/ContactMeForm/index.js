import React, { useState } from "react";
import style from "./style.module.scss"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "emailjs-com"
import { CircularProgress } from "@material-ui/core";



export default function ContactMeForm() {

  const { register, errors, handleSubmit, reset, control, getValues } = useForm();
    
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const toastifySuccess = () => {
    toast('Thanks!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  const onSubmit = async (data) => {
    
    try {
      setLoading(true)
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message
      };
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      );
      reset()
      setSuccess(true)
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }finally{
      setLoading(false)
    }
  };

  let payload = null
  if(loading){
    payload = <CircularProgress /> 
  }else if(success){
    payload = <div style={{textAlign:"center" }}>I will reply ASAP, thank you!</div>
  }else{
    payload = <form
    onSubmit={handleSubmit(onSubmit)}
    autoComplete="off"
  >

      <Controller  
        name="name"
        control={control}
        defaultValue={""}
        rules={{
          required:  "Please enter your name",
          maxLength: {
            value: 30,
            message: "Please use 30 characters or less"
          }}
        }
        as={<TextField
          className={style.formInput}
          label="Name"
          variant="outlined"
        />}
      />
    
    {errors.name && (
      <span className="errorMessage">{errors.name.message}</span>
    )}

    <Controller  
        name="email"
        control={control}
        defaultValue={""}
        rules={{
          required: true,
           pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        as={<TextField
          className={style.formInput}
          label="Email"
          variant="outlined"
        />}
      />

    
    {errors.email && (
      <span className="errorMessage">
        Please enter a valid email address
      </span>
    )}

    <Controller  
        name="message"
        control={control}
        defaultValue={""}
        rules={{
          required: true,
          }}
        as={<TextField
          className={style.tf}
          multiline={true}
          rows={4}
          variant="outlined"
          label="Message"
        />}
      />
    {errors.message && <span className='errorMessage'>Please enter a message</span>}
    <Button className="submit-btn" type='submit'> Drop a message!</Button>
  </form>
  }

  return (<>
      <h2 id="contactMeForm">Contact Me</h2>
      {payload}
      <ToastContainer />
    </>
  );
}