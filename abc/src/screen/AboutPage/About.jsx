/** @format */

import React, { useEffect } from "react";
import "./About.css";
import { useState } from "react";
import filledBanner from "./assets/banner_filled.svg";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Projects from "./Projects";
import Scroll from "./scroll";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SwitchLight from ".././SwitchLight/SwitchLight";

const About = () => {
	const [style, setStyle] = useState(localStorage.getItem("background"));
	const [language, setLanguage] = useState(localStorage.getItem("language"));
	const [lineMaskColor, setlineMaskColor] = useState(
		localStorage.getItem("background")
	);
    
	const [startY, setStartY] = useState();
	const [endY, setEndY] = useState();


	const navigate = useNavigate();
	useEffect(() => {
		const diff = endY - startY;
		const scrollTop = document.documentElement.scrollTop;
		if (diff > 100 && scrollTop <= 0) {
			navigate("/");
		}
	}, [endY]);

    const getChildMsg = (style, linemask)=>{
		setStyle(style)
        setlineMaskColor(linemask)
	}

	return (
		<div
			className="wrapper"
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
				<title>ABC | Web3 - About Us</title>
				<meta
					name="description"
					content="The ABC is all about learning, growing and co-operating through events to educate everyone about web3 and everything relating to it."
				/>
				<meta
					name="keywords"
					content="Australian blockchain club, blockchain, web3, australia, crypto, club, ABC, about, about us"
				/>
			</Helmet>
			<div
				className="content-wrapper-mainpage"
				style={{ backgroundColor: style }}>
				<Menu />
                <SwitchLight getMsg = {getChildMsg} />

				{/* Dark and Light mode component above */}

				{/* ------------------content---------------------- */}
				<div className="mainContent">
					{/* <Header /> */}
					<div className="page-wrapper">
						<img
							className="about-banner"
							src={filledBanner}
							alt="ABC Banner"
						/>
						{/* 英文 */}
						<Scroll lineMaskColor={lineMaskColor} />

						{/* 中文 */}

						<h2 className="about-str">
							{/* Strategic <br /> Collaborators */}
							{language === "zh" ? (
								<>战略合作伙伴</>
							) : (
								<>
									Strategic <br /> Collaborators
								</>
							)}
						</h2>
						<Projects />
						{window.innerWidth <= 850 ? (
							""
						) : (
							<Footer location={"about"} />
						)}
					</div>
				</div>
				{/* ---------------------Content---------------------- */}

			</div>
		</div>
	);
};

export default About;