import React from "react"

import style from "./Home.module.scss"

import Navbar from "../components/Navbar"
import Cover from "../components/Cover"

export default function Home () {
   return (<div className={style.wrapper}>
      <Navbar />
       <Cover />
        </div>)
}