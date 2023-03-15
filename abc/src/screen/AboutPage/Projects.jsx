import React from "react";
import { motion } from "framer-motion";

import "./About.css";

import cloudtech_desktop from "./assets/cloudtech_desktop.svg";
import cloudtechX_desktop from "./assets/cloudtechX_desktop.svg";
import helicon_desktop from "./assets/helicon_desktop.svg";
import gbtc_desktop from "./assets/gbtc_desktop.svg";
import anng_desktop from "./assets/anng_desktop.svg";
import partners from "./assets/partners.svg";

const Image = (props) => {
	return (
		<motion.a href={props.href}>
			<motion.img
				whileHover={{ scale: 1.1 }}
				className="sin-img"
				style={props.style}
				src={props.src}
				alt={props.src}
			/>
		</motion.a>
	);
};

const Projects = () => {
	if (window.innerWidth <= 850) {
		return (
			<div className="image-wrapper">
				<Image
					style={{
						left: "26vw",
						top: "-8vw",
					}}
					src={helicon_desktop}
					href={"https://www.heliconnft.com"}
				/>
				<Image
					style={{
						left: "54vw",
						top: "6vw",
					}}
					src={cloudtech_desktop}
					href={"https://www.cloudtechgroup.com"}
				/>
				<Image
					style={{
						left: "-6vw",
						top: "8vw",
					}}
					src={cloudtechX_desktop}
					href={"https://www.cloudtechx.com.au"}
				/>
				<Image
					style={{
						left: "14vw",
						top: "40vw",
					}}
					src={anng_desktop}
					href={"https://www.nationalnft.com.au"}
				/>
				<Image
					style={{
						left: "48vw",
						top: "46vw",
					}}
					src={gbtc_desktop}
					href={"https://www.gbtc.org.au/"}
				/>
			</div>
		);
	} else {
		return (
			<div className="image-wrapper">
				<Image
					style={{
						left: "2vw",
						top: "3vw",
						zIndex: "1",
					}}
					src={helicon_desktop}
					href={"https://www.heliconnft.com"}
				/>
				<Image
					style={{
						left: "28vw",
						top: "3vw",
						zIndex: "1",
					}}
					src={cloudtech_desktop}
					href={"https://www.cloudtechgroup.com"}
				/>
				<Image
					style={{
						left: "47vw",
						top: "2vw",
						zIndex: "1",
					}}
					src={cloudtechX_desktop}
					href={"https://www.cloudtechx.com.au"}
				/>
				<Image
					style={{
						left: "12vw",
						top: "26vw",
					}}
					src={anng_desktop}
					href={"https://www.nationalnft.com.au"}
				/>
				<Image
					style={{
						left: "42vw",
						top: "38vw",
						zIndex: "1",
					}}
					src={gbtc_desktop}
					href={"https://www.gbtc.org.au/"}
				/>
			</div>
			// return (
			// 	<img
			// 		style={{ marginTop: "-100px", marginBottom: "100px" }}
			// 		src={partners}
			// 		alt="partners"
			// 	/>
			// );
		);
	}
};

export default Projects;
