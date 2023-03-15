/** @format */

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Menu.css";

import MenuButton from "./MenuButton";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";
import CloseButton from "./CloseButton";

const Menu = () => {
	const language = localStorage.getItem("language");

	const [menuAnimate, setMenuAnimate] = useState("scale: 1");
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => {
		setMenuOpen(true);
		setMenuAnimate("scale: 1");
		localStorage.setItem("menu", 1);
	};

	const closeMenu = () => {
		setMenuAnimate("scale: 0");
		setMenuOpen(false);
		localStorage.setItem("menu", 0);
	};

	return (
		<div className="main-wrapper">
			<h1 style={{ display: "none" }}> Australian Blockchain Club </h1>
			{menuOpen ? (
				<motion.div
					className="menu-wrapper"
					animate={menuAnimate}
					transition={{ duration: 1 }}
					style={{ display: {} }}>
					{window.innerWidth > 850 ? (
						<motion.div
							className="close-button"
							whileHover={{ scale: 0.8, rotate: 90 }}
							transition={{ duration: 0.5 }}
							onClick={closeMenu}>
							<CloseButton />
						</motion.div>
					) : (
						<div className="close-button" onClick={closeMenu}>
							<CloseButton />
						</div>
					)}

					<MenuButton
						linkTo={"/"}
						text={language === "zh" ? "主页" : "HOME"}
					/>
					<MenuButton
						linkTo={"/about"}
						text={language === "zh" ? "关于我们" : "ABOUT"}
					/>
					<MenuButton
						linkTo={"/events"}
						text={language === "zh" ? "最新活动" : "EVENTS"}
					/>
					<MenuButton
						linkTo={"/contents"}
						text={language === "zh" ? "文章" : "CONTENT"}
					/>
					<div className="btm-section">
						<MenuFooter
							textColor={"#FB4A1E"}
							openMenu={setMenuOpen}
							location={"menu"}
						/>
					</div>
				</motion.div>
			) : (
				<div>
					<button
						className="menu"
						onClick={openMenu}
						style={{ cursor: "pointer" }}>
						<h2 style={{ color: "white" }}>
							{" "}
							{language === "zh" ? "菜单" : "MENU"}{" "}
						</h2>
					</button>
				</div>
			)}
		</div>
	);
};

export default Menu;
