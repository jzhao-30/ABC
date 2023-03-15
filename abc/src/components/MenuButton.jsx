import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import arrow from "../material/arrow.svg";
import { motion } from "framer-motion";

const MenuButton = (props) => {
	const [secondElementAnimation, setSecondElementAnimation] =
		useState("width: 0");
	const [thirdAnimation, setThirdAnimation] = useState("width: 100");
	
	return (
		<div style={{ display: "flex" }}>
			<motion.img
				className="arrow-img"
				animate={secondElementAnimation}
				initial={{ width: 0 }}
				transition={{ duration: 0.5 }}
				src={arrow}
				alt="arrow"
			/>
			<motion.a
				href={props.linkTo}
				className="menu-button"
				onHoverStart={() => {
					setSecondElementAnimation({ width: 100, marginRight: 20 });
					setThirdAnimation({ width: 0 });
				}}
				onHoverEnd={() => {
					setSecondElementAnimation({ width: 0 });
					setThirdAnimation({ width: 100 });
				}}>
				{props.text}
			</motion.a>
			<motion.img
				className="arrow-img"
				src={arrow}
				alt="arrow"
				animate={thirdAnimation}
				initial={{ width: 100 }}
				transition={{ duration: 0.5 }}
			/>
		</div>
	);
};

export default MenuButton;
