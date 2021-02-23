import React from "react"

import style from "./style.module.scss"


export default function MyWorks () {
return <div className={style.worksWrapper}>
    <span className={style.myWorks}>My Works</span>
    <div className={style.imagesWrapper}>
    <div className={style.flippyFlappy}>
     <img src="awareness-tongy.png" className={style.tongyApp}></img> 
     <img src="logo-tongy.png" className={style.tongyLogo}></img> 
    <p className={style.ps}>Tongy</p>
    <span className={style.description}>The platform to teach English to your children in a funny way</span>
    <br></br>
    <div className={style.btnContainer}>
    <button className={style.greenYellowBtn}>Discover More</button>
    </div>
    </div>
    <div className={style.workInProgress}>
    <img src="wip.png" className={style.wip}></img>
    <img src="atwork.png" className={style.devAtWork}></img>
    <p className={style.ps}>WIP</p>
    <span className={style.description}>More projects coming soon</span>
    <br></br>
    <div className={style.btnContainer}>
    <button className={style.greenYellowBtn}>Stay Tuned!</button>
    </div>
    </div>
    </div>
</div>
}