/** @format */

//https://segmentfault.com/a/1190000009571886
import React, { useEffect } from "react";
import "./home.css";
import Header from "../../components/header";
import { useState } from "react";
// import a from '../../material/a.png'
// import banner from '../../material/Australia-banner.png'
// import aus from '../../material/Australian.png'
import banner from "../../material/Banner.svg";
import first from "../../material/firstline.svg";
import secondline from "../../material/secondline.svg";
import thirdline from "../../material/thirdline.svg";
import Menu from "../../components/Menu";
import { Route, withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import { Helmet } from "react-helmet";

const LightAdDark = (props) => {
	const [style, setStyle] = useState(localStorage.getItem("background"));
	const [color, setColor] = useState(localStorage.getItem("color"));
	const [dis, setDis] = useState("relative");
	const [name, setName] = useState();
	const [duration, setDuration] = useState();
	const [fill, setFill] = useState();
	const [index, setIndex] = useState();
	const [darkDis, setDarkDis] = useState(localStorage.getItem("darkDis"));
	const [direction, setDirection] = useState("");
	const [lightDis, setLightDis] = useState(localStorage.getItem("lightkDis"));
	const [lightz, setLightz] = useState(localStorage.getItem("lightz"));

	const becomeBlack = (props) => {
		// 设置背景过渡的动画
		setName("hd");
		setDuration("1s");
		setFill("forwards");
		setIndex("1");
		setColor("white");

		// 字体颜色改为白色
		localStorage.setItem("color", "white");
		setTimeout(() => {
			setStyle("black");
			localStorage.setItem("background", "black");
			// setDarkDis('none')
			// localStorage.setItem('darkDis', 'none')

			//然后设置日间模式index为2，叠在圆的上方
			setLightz(2);
			localStorage.setItem("lightz", 2);
			// 首先显示日间模式按钮
			setLightDis("block");
			localStorage.setItem("lightkDis", "block");
		}, 500);
	};

	


	const imageback = () => {
		setTimeout(() => {
			setStyle("rgb(31,73,224)");
			localStorage.setItem("background", "rgb(31,73,224)");
		}, 500);

		setTimeout(() => {
			setLightDis("none");
			localStorage.setItem("lightkDis", "none");
		}, 1000);

		setName("another");
		setDuration("1s");
		setFill("forwards");
		setIndex("1");
		setColor("white");
	};


    useEffect(()=>{
        props.getMsg(style)
    })

	return (
        <>
            <div className="btnWrapper">
					<div
						className="test"
						tabIndex="1"
						onClick={becomeBlack}
						style={{
							animationName: name,
							animationDuration: duration,
							animationFillMode: fill,
							zIndex: index,
							display: darkDis,
							animationDirection: direction,
						}}></div>
				</div>

				<div className="lightWrapper">
					<div
						className="test2"
						tabIndex="2"
						onClick={imageback}
						style={{
							display: lightDis,
							zIndex: parseInt(lightz),
						}}></div>
				</div>
        </>
	);
};

export default LightAdDark;
