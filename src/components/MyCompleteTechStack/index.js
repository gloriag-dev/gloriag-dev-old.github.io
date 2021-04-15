import React from "react"
import style from "./style.module.scss"
import FeTechBadge from "../FeTechBadge"



export default function myTechStack (){
return <div className={style.wrapper}>
    <h2 className={style.stackTitle} id="myTechStack">My Complete Tech Stack</h2>
    <div className={style.fe}>
    <h3 className={style.title}> Frontend</h3>
    <div className={style.myFeImgWrapper}>
    <FeTechBadge
    image={"react.png"}
    label={"React"}>
    </FeTechBadge>
    <FeTechBadge
    image={"Angular_full_color_logo.png"}
    label={"Angular"}>
    </FeTechBadge>
    <FeTechBadge
    image={"redux.png"}
    label={"Redux"}>
    </FeTechBadge>
    <FeTechBadge
    image={"HTML5_Badge_512.png"}
    label={"HTML5"}>
    </FeTechBadge>
    <FeTechBadge
    image={"css3_logo.png"}
    label={"CSS3"}>
    </FeTechBadge>
    <FeTechBadge
    image={"js-logo.png"}
    label={"Javascript"}>
    </FeTechBadge>
    <FeTechBadge
    image={"sass.png"}
    label={"Sass"}>
    </FeTechBadge>
    <FeTechBadge
    image={"bootstrap.png"}
    label={"Bootstrap"}>
    </FeTechBadge>
    <FeTechBadge
    image={"mui.png"}
    label={"MaterialUI"}>
    </FeTechBadge>
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
    <img className={style.myDoImg} src="docker-logo-vector.svg"></img>
    </div>
    </div>

</div>
}