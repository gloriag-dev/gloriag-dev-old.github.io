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
         <a className={classnames(style.navLinks, style.myWorksNav)} href="#myWorks">My Works </a>
         <a className={classnames(style.navLinks, style.myTechStackNav)} href="#myTechStack"> My Tech Stack </a>
         <a className={classnames(style.navLinks, style.whatIDoNav)} href="#whatIDo"> What I Do </a>
         <a className={classnames(style.icons, style.linkedinNav)} target="_blank" href="https://www.linkedin.com/in/gloriagiannascoli/"><i className="fab fa-linkedin-in"></i></a>
         <a className={classnames(style.icons, style.githubNav)} target="_blank" href="https://github.com/gloriag-dev"><i className="fab fa-github"></i></a>
         
      </nav>
      
   </>
}