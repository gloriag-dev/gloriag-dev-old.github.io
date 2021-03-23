import React from "react"
import FullScreenDialog from "../FullscreenHamburger"
import style from "./style.module.scss"
import Button from "@material-ui/core/Button"
import classnames from 'classnames';


export default function Navbar (){
    
   return <div>
   <nav className={style.navFlex}>
   <FullScreenDialog />
       <p className={style.ps}> <a className={style.navLinks} href="#myWorks">My Works </a></p>
       <p className={style.ps}> <a className={style.navLinks} href="#myTechStack"> My Tech Stack </a></p>
       <p className={style.ps}> <a className={style.navLinks} href="#whatIDo"> What I Do </a></p>
       <span className={style.linkedin}></span>
       <span className={classnames('fab fa-github', style.textWhite)} />
       <Button className={style.contactMeBtn}> <a href="#contactMeForm">Contact me </a></Button>
   </nav>
   </div>
}