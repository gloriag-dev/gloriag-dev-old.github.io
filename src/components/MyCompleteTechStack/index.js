import React from "react"
import style from "./style.module.scss"



export default function MyTechStack (){
return <div className={style.wrapper}>
    <h2 className={style.stackTitle}>My Complete Tech Stack</h2>
    <div className={style.fe}>
    <h3 className={style.title}> Frontend</h3>
    <div className={style.myFeImgWrapper}>
    <img className={style.myImg} src="react.png"></img>
        <img className={style.myFeImg} src="Angular_full_color_logo.png"></img>
        <img className={style.myFeImg} src="redux.png"></img>
        <img className={style.myFeImg} src="HTML5_Badge_512.png"></img>
        <img className={style.myFeImg} src="css3_logo.png"></img>
        <img className={style.myFeImg} src="js-logo.png"></img>
        <img className={style.myFeImg} src="sass.jpg"></img>
        <img className={style.myFeImg} src="bootstrap.png"></img>
        <img className={style.myFeImg} src="mui.png"></img>
        </div>
    </div>
    <div className={style.be}>
    <h3 className={style.title}> Backend</h3>
    <div className={style.myBeImgWrapper}>
    <img className={style.myImg} src="nodejs.png"></img>
    <p className={style.myImg}> Express</p>
    <img className={style.myImg} src="sql.png"></img>
    <img className={style.myImg} src="mongo.png"></img>
    </div>
    </div>
    <div className={style.devOps}>
    <h3 className={style.title}> DevOps</h3>
    <div className={style.myDoImgWrapper}>
    <img className={style.myDoImg} src="jira-1-svg.png"></img>
    <img className={style.myDoImg} src="devops.png"></img>
    <img className={style.myDoImg} src="gitlab.png"></img>
    </div>
    </div>

</div>
}