import React from "react"
import FullScreenDialog from "../FullscreenHamburger"
import style from "./style.module.scss"
import Button from "@material-ui/core/Button"
import classnames from 'classnames';


export default function Navbar (){
   return <div>
   <nav className={style.navFlex}>
   <FullScreenDialog />
       <p> <a className={style.navLinks} href="#myWorks">My Works </a></p>
       <p> <a className={style.navLinks} href="#myTechStack"> My Tech Stack </a></p>
       <span className={style.linkedin}></span>
       <span className={classnames('fab fa-github', style.textWhite)} />
       <Button className={style.contactMeBtn}>Contact me</Button>
   </nav>
   </div>
}