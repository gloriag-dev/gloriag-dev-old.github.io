import React from 'react';
import style from "./style.module.scss"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={style.fsHamburger}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       +
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={style.menuDialog}>
     
            <IconButton edge="start" onClick={handleClose} aria-label="close">
            <CloseIcon className={style.closeIt} />
            </IconButton>
        <List>
          <ListItem button onClick={handleClose}>
          <a href="#myTechStack">My Tech Stack</a>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleClose}>
          <a href="#myWorks">My Works</a>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleClose}>
          <a href="#whatIDo">What I Do</a>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleClose}>
          <a href="#contactMeForm">Contact Me</a>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}