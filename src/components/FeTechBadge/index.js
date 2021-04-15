
import React from "react"
import style from "./style.module.scss"



export default function FeTechBadge (props){
return <div className={style.techBadge}>
    <img src={props.image}></img>
    <label>{props.label}</label>
</div>
}