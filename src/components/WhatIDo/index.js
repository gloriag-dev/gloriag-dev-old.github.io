import React from "react"

import style from "./style.module.scss"


export default function WhatIDo () {
return(
<div className={style.expWrapper}>
    <span className={style.whatIDoTitle}>What I Do</span>
    <div className={style.redss}>
    <img className={style.redssLogo} src="redss.png"></img>
    <div className={style.redssExp}>
    <p>Red Software Systems - September 2020 - March 2021</p>
    <p>Worked on frontend and backend of various projects in fintech area with agile approach</p>
    <p>Tech Stack</p>
    <div className={style.redssTechStack}>
        <img className={style.myImg} src="react.png"></img>
        <img className={style.myImg} src="Angular_full_color_logo.png"></img>
        <img className={style.myImg} src="redux.png"></img>
        <img className={style.myImg} src="HTML5_Badge_512.png"></img>
        <img className={style.myImg} src="css3_logo.png"></img>
        <img className={style.myImg} src="js-logo.png"></img>
        <img className={style.myImg} src="gitlab.png"></img>
    </div>
</div>
    </div>
    <div className={style.openReply}>
    <img className={style.openReplyLogo} src="openreply.png"></img>
    <div className={style.openReplyExp}> 
    <p>Open Reply - March 2021 - Now</p>
    <p>Working on frontend of fintech apps</p>
    <p>Tech Stack</p>
    <div className={style.orTechStack}>
    <img className={style.myImg} src="react.png"></img>
        <img className={style.myImg} src="Angular_full_color_logo.png"></img>
        <img className={style.myImg} src="redux.png"></img>
        <img className={style.myImg} src="HTML5_Badge_512.png"></img>
        <img className={style.myImg} src="css3_logo.png"></img>
        <img className={style.myImg} src="js-logo.png"></img>
        <img className={style.myImg} src="gitlab.png"></img>
    </div>
    </div>
    </div>
</div>
)}