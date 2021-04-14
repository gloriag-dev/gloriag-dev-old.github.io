import React from "react"
import style from "./style.module.scss"
import TechBadge from "./TechBadge"



export default function myTechStack (){
return <div className={style.wrapper}>
    <h2 className={style.stackTitle} id="myTechStack">My Complete Tech Stack</h2>
    <div className={style.fe}>
    <h3 className={style.title}> Frontend</h3>
    <div className={style.myFeImgWrapper}>
    <TechBadge
    image={"react.png"}
    label={"React"}>
    </TechBadge>
    <TechBadge
    image={"Angular_full_color_logo.png"}
    label={"Angular"}>
    </TechBadge>
    <TechBadge
    image={"redux.png"}
    label={"Redux"}>
    </TechBadge>
    <TechBadge
    image={"HTML5_Badge_512.png"}
    label={"HTML5"}>
    </TechBadge>
    <TechBadge
    image={"css3_logo.png"}
    label={"CSS3"}>
    </TechBadge>
    <TechBadge
    image={"js-logo.png"}
    label={"Javascript"}>
    </TechBadge>
    <TechBadge
    image={"sass.png"}
    label={"Sass"}>
    </TechBadge>
    <TechBadge
    image={"bootstrap.png"}
    label={"Bootstrap"}>
    </TechBadge>
    <TechBadge
    image={"mui.png"}
    label={"MaterialUI"}>
    </TechBadge>
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