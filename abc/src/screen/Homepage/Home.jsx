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
import LightAdDark from "./LightAndDark";
// import bannerLoop from "../../material/banner-loop.gif"

const Home = (props) => {
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

	const [startX, setStartX] = useState();
	const [startY, setStartY] = useState();
	const [endX, setEndX] = useState();
	const [endY, setEndY] = useState();

	const navigate = useNavigate();

	const getChildMsg = (msg)=>{
		setStyle(msg)
	}

	useEffect(() => {
		goLeft();

		var speed = 2; // 速度 -- px每秒

		// 第2行
		var $marquee2 = document.querySelector(".secondLine");

		// 第2行
		var $marqueeContent2 = $marquee2.querySelector(".content");
		// 内容复制3份好有连续性,第一行
		const paoContent2 =
			$marqueeContent2.innerHTML +
			$marqueeContent2.innerHTML +
			$marqueeContent2.innerHTML;
		$marqueeContent2.innerHTML = paoContent2;
		var contentWidth2 = $marqueeContent2.getBoundingClientRect().width;
		const realContentWidth2 = contentWidth2 / 3;
		var onceTime2 = (realContentWidth2 / speed) * 1000; //ms
		$marqueeContent2.style.animationDuration = "80000ms";
	}, []);

	const goLeft = () => {
		var speed = 2; // 速度 -- px每秒
		// 第一行
		var $marquee = document.querySelector(".firstLine");
		// 第三行
		var $marquee3 = document.querySelector(".thirdLine");
		// 第一行
		var $marqueeContent = $marquee.querySelector(".content");
		// 第三行
		var $marquee3Content = $marquee3.querySelector(".content");

		// 内容复制3份好有连续性,第一行
		const paoContent =
			$marqueeContent.innerHTML +
			$marqueeContent.innerHTML +
			$marqueeContent.innerHTML;
		// 第三行
		const paoContent3 =
			$marquee3Content.innerHTML +
			$marquee3Content.innerHTML +
			$marquee3Content.innerHTML;

		$marqueeContent.innerHTML = paoContent;
		$marquee3Content.innerHTML = paoContent3;

		var contentWidth = $marqueeContent.getBoundingClientRect().width;
		var contentWidth3 = $marquee3Content.getBoundingClientRect().width;

		// console.log(contentWidth);

		// 内容复制了3份，宽度也要除以3
		const realContentWidth = contentWidth / 3;
		const realContent3Width = contentWidth3 / 3;

		// 计算一次动画应该要花费多少时间
		var onceTime = (realContentWidth / speed) * 1000; //ms
		var onceTime3 = (realContent3Width / speed) * 1000;

		$marqueeContent.style.animationDuration = "80000ms";
		$marquee3Content.style.animationDuration = "80000ms";
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

	useEffect(() => {
		// console.log(endY - startY);
		const diff = endY - startY;
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollPs = scrollTop / scrollHeight;
		// console.log(scrollPs)
		if (diff < -50 && scrollPs >= 0.2) {
			navigate("/about");
		}
	}, [endY]);

	return (
		<div
			className="wrapper-home"
			onTouchStart={(e) => {
				// setStartX(e.touches[0].clientX)
				setStartY(e.touches[0].pageY);
			}}
			onTouchEnd={(e) => {
				// setEndX(e.touches[0].clientX)
				setEndY(e.changedTouches[0].pageY);
			}}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>ABC | Web3 - Home</title>
				<meta
					name="description"
					content="Do you want to learn all about web3 while also having fun? Join the Australian Blockchain Club (ABC) and have all that and much more. "
				/>
				<meta
					name="keywords"
					content="Australian blockchain club, blockchain, web3, australia, crypto, club, ABC"
				/>
			</Helmet>
			<Menu />
			<div className="content-wrapper" style={{ backgroundColor: style }}>
				<div style={{ color: color }} className="textpage"></div>
				<LightAdDark getMsg = {getChildMsg}/>
				{/* <img src={bannerLoop} alt="" style = {{marginTop:'400px', zIndex:2}}/> */}
				<div className="paomadeng-wrapper" >
					<div className="firstLine">
						<span class="content">
							<Link to="/about" className="linklink">
								<img src={first} alt="" />
							</Link>
							<span class="content-space"></span>
						</span>
					</div>
					<div className="secondLine">
						<span class="content">
							<Link to="/about" className="linklink">
								<img src={secondline} alt="" />
							</Link>
							<span class="content-space"></span>
						</span>
					</div>

					<div className="thirdLine">
						<span class="content">
							<Link to="/about" className="linklink">
								<img src={thirdline} alt="" />
							</Link>

							<span class="content-space"></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
