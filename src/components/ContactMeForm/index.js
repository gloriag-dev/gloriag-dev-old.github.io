import React, { useState } from "react";
import style from "./style.module.scss"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "emailjs-com"
import { CircularProgress } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     width: "25ch",
  //   },
  // },
}));

export default function ContactMeForm() {
  const classes = useStyles();
  const { register, errors, handleSubmit, reset } = useForm();
  
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
        subject: data.subject,
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
    payload = "I will reply ASAP, thank you!"
  }else{
    payload = <form
    className={classes.root}
    onSubmit={handleSubmit(onSubmit)}
    autoComplete="off"
  >
    <TextField
      id="outlined-basic"
      className={style.formInput}
      label="Name"
      variant="outlined"
      ref={register({
        required: { value: true, message: "Please enter your name" },
        maxLength: {
          value: 30,
          message: "Please use 30 characters or less"
        },
      })}
    />
    {errors.name && (
      <span className="errorMessage">{errors.name.message}</span>
    )}
    <TextField
      className={style.formInput}
      id="outlined-basic"
      label="Email"
      variant="outlined"
      ref={register({
        required: true,
        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      })}
    />
    {errors.email && (
      <span className="errorMessage">
        Please enter a valid email address
      </span>
    )}
    <TextField
      className={style.tf}
      id="outlined-multiline-static"
      multiline={true}
      rows={4}
      label="Message"
      variant="outlined"
      ref={register({
        required: true,
      })}
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