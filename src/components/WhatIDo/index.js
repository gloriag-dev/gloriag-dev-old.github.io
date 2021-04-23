import React from "react"

import style from "./style.module.scss"

function WhatIDoWidget(props) {

    const { imgLogo, companyName, from, to, jobPosition, jobDescription, techStack } = props

    return <div className={style.whatIDoWidget}>
        <div className={style.imgWrapper}>
            <img className={style.logo} src={imgLogo}></img>
        </div>
        <div className={style.experience}>
            <p className={style.headline}>{companyName} - {from} - {to} - {jobPosition}</p>
            <p className={style.ps}>{jobDescription}</p>
            {/* <p className={style.ps}>Tech Stack:</p> */}
            <div className={style.techStack}>
                {techStack && techStack.map((image, index) => {
                    return  <img key={index} className={style.techStackImage} src={image}></img>
                })}
            </div>
        </div>
    </div>
}

export default function WhatIDo() {
    return (<>
            <h2 id="whatIDo">What I Do</h2>
                <WhatIDoWidget
                    imgLogo="redss.png"
                    companyName="RED Software Systems"
                    from="September 2020"
                    to="March 2021"
                    jobPosition="Intern"
                    jobDescription="Worked on frontend and backend of various projects in fintech, insurance and AI areas with agile approach"
                    techStack={[
                        "react.png", "Angular_full_color_logo.png", "redux.png", "HTML5_Badge_512.png", "css3_logo.png", "js-logo.png", "gitlab.png", "mui.png", "mongo.png", "nodejs.png"
                    ]}
                />
                <WhatIDoWidget
                    imgLogo="openreply.png"
                    companyName="Open Reply"
                    from="March 2021"
                    to="Now"
                    jobPosition="Junior Frontend Developer For Prada"
                    jobDescription="Working on frontend of Prada and Miumiu e-commerce"
                    techStack={[
                        "HTML5_Badge_512.png", "css3_logo.png", "js-logo.png", "jquerylogo.png"
                    ]}
                />
        </>)
}