import React from "react"
import FullScreenDialog from "../FullscreenHamburger"
import style from "./style.module.scss"
import classnames from 'classnames'


export default function Navbar() {

   return <>
      <FullScreenDialog />
      <nav className={style.navFlex}>
         
         <a className={style.contactMeWrapper} href='#contactMeForm'>
            <div className={classnames(style.navLinks, style.contactMeBtn)}>Contact me</div>
         </a>
         <a className={style.navLinks} href="#myWorks">My Works </a>
         <a className={style.navLinks} href="#myTechStack"> My Tech Stack </a>
         <a className={style.navLinks} href="#whatIDo"> What I Do </a>
         <a className={style.icons} target="_blank" href="https://www.linkedin.com/in/gloriagiannascoli/"><i class="fab fa-linkedin-in"></i></a>
         <a className={style.icons} target="_blank" href="https://github.com/gloriag-dev"><i class="fab fa-github"></i></a> 
      </nav>
   </>
}