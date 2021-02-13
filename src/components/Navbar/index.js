import React from "react"
import style from "./style.module.scss"
import Button from "@material-ui/core/Button"
import classnames from 'classnames';


export default function Navbar (){
   return <nav className={style.navFlex}>
        <p>About Me </p>
       <p>My Works</p>
       <p> My Tech Stack</p>
       <span className={style.linkedin}></span>
       <span className={classnames('fab fa-github', style.textWhite)} />
       <Button className={style.contactMeBtn}>Contact me</Button>
    </nav>
}