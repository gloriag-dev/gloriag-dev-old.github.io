import React from "react"
import style from "./style.module.scss"
import TechBadge from "../TechBadge"
import { StylesContext } from "@material-ui/styles"



export default function myTechStack (){
return <>
    <h2 id="myTechStack">My Complete Tech Stack</h2>
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
    <TechBadge
    image={"next_logo.png"}
    label={"Next.js"}>
    </TechBadge>
    <TechBadge
    image={"jquerylogo.png"}
    label={"jQuery"}>
    </TechBadge>
        </div>
    </div>
    <div className={style.be}>
    <h3 className={style.title}> Backend</h3>
    <div className={style.myBeImgWrapper}>
    <TechBadge
    image={"nodejs.png"}
    label={"Node.js"}>
    </TechBadge>
    <TechBadge
    image={"sql.png"}
    label={"MySQL"}>
    </TechBadge>
    <TechBadge
    image={"mongo.png"}
    label={"MongoDB"}>
    </TechBadge>
    <TechBadge
    image={"express.png"}
    label={"Express"}>
    </TechBadge>
    </div>
    </div>
    <div className={style.devOps}>
    <h3 className={style.title}> DevOps</h3>
    <div className={style.myDoImgWrapper}>
    <TechBadge
    image={"jira-1-svg.png"}
    label={"Jira"}>
    </TechBadge>
    <TechBadge
    image={"devops.png"}
    label={"Azure DevOps"}>
    </TechBadge>
    <TechBadge
    image={"gitlab.png"}
    label={"Gitlab"}>
    </TechBadge>
    <TechBadge
    image={"docker-logo-vector.svg"}
    label={"Docker"}>
    </TechBadge>
    </div>
    </div>
</>
}