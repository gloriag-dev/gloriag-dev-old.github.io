import React from "react"
import TextField from "@material-ui/core/TextField"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ContactMeForm() {
  const classes = useStyles();

  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: '#FF00FF',
  //       contrastText: "#FFFFFF"
  //     },
  //     secondary: {
  //       main:'#ffffff',
  //       contrastText: "#FFFFFF"
  //     }
  //   }
  // });

  return <div>
    <h2>Contact Me</h2>
    
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-multiline-static"
          multiline={true}
          rows={4}
          label="Message"
          variant="outlined" 
          defaultValue="Message"/>
        <Button> Drop a message!</Button>
      </form>
    
  </div>
}