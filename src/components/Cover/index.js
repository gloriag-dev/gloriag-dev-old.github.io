import React from "react"

import style from "./style.module.scss"



export default function Cover () {
return <div className={style.devFlex}>
        <div className={style.developer}>
            <h1 className={style.mainTitle}> It's me, Gloria <br /> I am a developer</h1>
            <h3 className={style.coverh2}> I create amazing web experiences </h3>
        </div>
        <div className={style.imageDiv}>
        <img src="isometric-cover@2x.png" className={style.isoCover}/>
        </div>
        </div>
}