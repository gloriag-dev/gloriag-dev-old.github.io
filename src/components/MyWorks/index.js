import React from "react"

import style from "./style.module.scss"

function MySingleWork(props){

    return <div className={style.imagesWrapper}>
        <div className={style.cover}>   
            <div style={{overflow: "hidden", borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}}>
            <img src={props.coverImage} className={style.coverImage}></img>
            </div> 
            <img src={props.logoImage} className={style.coverLogo}></img>
        </div>
        <div className={style.content}> 
            <p className={style.ps}>{props.title}</p>
            <span className={style.description}>{props.description}</span>
        </div>
        
        <button className={style.greenYellowBtn}>{props.buttonText}</button>
    </div>
}

export default function MyWorks () {
return <div className={style.worksWrapper} id="myWorks">
    <h2 className={style.myWorks}>My Works</h2>
    <div className={style.singleWorkWrapper}>
    <MySingleWork
        coverImage={"awareness-tongy.png"}
        logoImage={"logo-tongy.png"}
        title="Tongy"
        description="The platform to teach English to your children in a funny way"
        buttonText="Discover more"
    />
     <MySingleWork
        coverImage={"wip.png"}
        logoImage={"atwork.png"}
        title="WIP"
        description="More projects coming soon"
        buttonText="Stay tuned!"
    />
    </div>
    </div>
}