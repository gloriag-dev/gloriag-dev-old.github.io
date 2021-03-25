import React from "react"
import FullScreenDialog from "../FullscreenHamburger"
import style from "./style.module.scss"
import Button from "@material-ui/core/Button"


export default function Navbar (){
    
   return <div>
   <nav className={style.navFlex}>
   <FullScreenDialog />
   <Button className={style.contactMeBtn}> <a href="#contactMeForm">Contact me </a></Button>
       <p className={style.ps}> <a className={style.navLinks} href="#myWorks">My Works </a></p>
       <p className={style.ps}> <a className={style.navLinks} href="#myTechStack"> My Tech Stack </a></p>
       <p className={style.ps}> <a className={style.navLinks} href="#whatIDo"> What I Do </a></p>
        <a className={style.icons} href="https://www.linkedin.com/in/gloriagiannascoli/"><i class="fab fa-linkedin-in"></i></a>
        <a className={style.icons} href="https://github.com/gloriag-dev"><i class="fab fa-github"></i></a>
      
   </nav>
   </div>
}