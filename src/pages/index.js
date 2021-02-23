import React from "react"

import style from "./Home.module.scss"

import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import MyWorks from "../components/MyWorks"
import WhatIDo from "../components/WhatIDo"

export default function Home () {
   return (<div className={style.wrapper}>
      <Navbar />
       <Cover />
       <MyWorks />
       <WhatIDo />
        </div>)
}