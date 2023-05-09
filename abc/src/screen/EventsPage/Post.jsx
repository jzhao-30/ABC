/** @format */

import React from "react";
import { motion } from "framer-motion";
import arrow from "./white_arrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
	const [secondElementAnimation, setSecondElementAnimation] =
		useState("width: 0");
	const [thirdAnimation, setThirdAnimation] = useState("width: 100");
	const [bg, setBg] = useState("transparent");
	return (
		<Link
			style={{ textDecoration: "none" }}
			to={"/events/" + props.slug}
			key={props.slug}>
			<motion.div
				className="h-[124px] sm:h-20"
				style={{
					cursor: "pointer",
					position: "relative",
					display: "flex",
					// height: "124px",
					alignContent: "center",
					alignItems: "center",
					justifyContent: "left",
					borderBottom: "solid 1px white",
					transition: "0.3s",
					background: bg,
					textDecoration: "none",
				}}
				onHoverStart={() => {
					setSecondElementAnimation({ width: 100, marginRight: 20 });
					setThirdAnimation({ width: 0 });
					setBg("#FB4A1E");
				}}
				onHoverEnd={() => {
					setSecondElementAnimation({ width: 0 });
					setThirdAnimation({ width: 100 });
					setBg("transparent");
				}}>
				{window.innerWidth > 800 ? (
					<motion.img
						animate={secondElementAnimation}
						initial={{ width: 0 }}
						transition={{ duration: 0.5 }}
						src={arrow}
						alt="arrow"
					/>
				) : (
					""
				)}

				<motion.h2
					className="text-[40px] sm:text-2xl"
					style={{
						fontFamily: "Space Grotesk",
						// fontSize: "40px",
						color: "white",
						textUnderline: "none",
						fontWeight: 500,
						// textTransform: "lowercase",
					}}>
					{props.title}
				</motion.h2>

				{window.innerWidth > 800 ? (
					<motion.img
						style={{ position: "absolute", right: 0 }}
						src={arrow}
						alt="arrow"
						animate={thirdAnimation}
						initial={{ width: 100 }}
						transition={{ duration: 0.5 }}
					/>
				) : (
					<img
						className="w-16"
						style={{ position: "absolute", right: 0 }}
						src={arrow}
						alt="arrow"
						animate={thirdAnimation}
						transition={{ duration: 0.5 }}
					/>
				)}
			</motion.div>
		</Link>
	);
};

export default Post;
