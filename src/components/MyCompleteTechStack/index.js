import React from "react"
import style from "./style.module.scss"



export default function MyTechStack (){
return <div className={style.wrapper}>
    <h2 className={style.stackTitle}>My Complete Tech Stack</h2>
    <div className={style.fe}>
    <h3 className={style.feTitle}> Frontend</h3>
    <div className={style.myImgWrapper}>
    <img className={style.myImg} src="react.png"></img>
        <img className={style.myImg} src="Angular_full_color_logo.png"></img>
        <img className={style.myImg} src="redux.png"></img>
        <img className={style.myImg} src="HTML5_Badge_512.png"></img>
        <img className={style.myImg} src="css3_logo.png"></img>
        <img className={style.myImg} src="js-logo.png"></img>
        </div>
    </div>
    <div className={style.be}>

    </div>
    <div className={style.devOps}>

    </div>

</div>
}