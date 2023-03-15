/** @format */

import React, { useState, props } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
	const [language, setLanguage] = useState(localStorage.getItem("language"));

	return (
		<div className="footer-wrapper">
			<a
				href="https://twitter.com/abcweb3_"
				className="footer-link"
				style={{ color: props.textColor }}>
				{language === "zh" ? "TWITTER" : "TWITTER"}
			</a>
			<a
				href="https://t.me/+ja51sNlFAdg3NTNl"
				className="footer-link"
				style={{
					color: props.textColor,
					position: "relative",
					zIndex: 3,
				}}>
				{language === "en" ? "TELEGRAM" : "TELEGRAM"}
			</a>

			{props.textColor ? (
				""
			) : (
				<Link
					className="footer-link"
					style={{ textAlign: "right", color: props.textColor }}>
					©AUSTRALIAN <br /> BLOCKCHAIN CLUB
				</Link>
			)}

			{props.location === "menu" && language === "zh" ? (
				<Link
					className="footer-link"
					style={{ color: props.textColor }}
					onClick={() => {
						localStorage.setItem("language", "en");
						setLanguage("en");
						props.menuOpen();
						window.location.reload();
					}}>
					ENG
				</Link>
			) : (
				<div className="asd" style={{ display: "none" }}></div>
			)}
			{props.location === "menu" && language === "en" ? (
				<Link
					className="footer-link"
					style={{ color: props.textColor }}
					onClick={() => {
						localStorage.setItem("language", "zh");
						setLanguage("zh");
						props.menuOpen();
						window.location.reload();
					}}>
					CN
				</Link>
			) : (
				""
			)}
		</div>
	);
};

export default Footer;
