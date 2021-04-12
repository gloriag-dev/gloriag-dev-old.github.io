import React from "react";
import style from "./style.module.scss"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "emailjs-com"



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ContactMeForm() {
  const classes = useStyles();
  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
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
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="contactMeForm" className={style.contactMeForm} >
      <h2>Contact Me</h2>
      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
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
      <ToastContainer />
    </div>
  );
}