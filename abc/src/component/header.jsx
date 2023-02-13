// This is a function component.
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HeaderAntd from "./header_antd";



const Header = (props) =>{
    const [projectInfo, setProjctInfo] = useState({});

    // Read user's project

    useEffect(()=>{
        
    })

    return(
        <div className="header">
           <HeaderAntd/>
        </div>
    )

}

export default Header;