import React from "react"

import style from "./style.module.scss"


export default function WhatIDo () {
return(
<div className={style.expWrapper}>
    <span className={style.whatIDoTitle}>What I Do</span>
    <div className={style.redss}>
<img className={style.redssLogo} src="redss.png"></img>
    </div>
    <div className={style.openReply}>
    <img className={style.openReplyLogo} src="openreply.png"></img>
    </div>
</div>
)}