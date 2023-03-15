/** @format */

import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { demoData } from "./demoMarkdown";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import remarkGfm from "remark-gfm";
import "./PostPage.css";
import LightAdDark from "../HomePage/LightAndDark";

const PostPage = (props) => {
	const { slug } = useParams();
	const [style, setStyle] = useState();

	const getChildMsg = (msg) => {
		setStyle(msg);
	};

	return (
		<>
			<div
				className="relative min-h-[100vh] max-w-[100vw] overflow-hidden"
				style={{
					// position: "relative",
					// minHeight: "100vh",
					backgroundColor: style,
				}}>
				<LightAdDark getMsg={getChildMsg} />
				{/* SEO Section */}
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>ABC | Web3 - Contents</title>
						<meta
							name="description"
							content="Get to know all the things that make web3 what it is today. From blockchain to DApps, this will be your glossary to the future - A to Z from ABC!"
						/>
						<meta
							name="keywords"
							content="Australian blockchain club, blockchain, web3, australia, crypto, club, ABC, blog, content"
						/>
					</Helmet>
					<h1 style={{ display: "none" }}> ABC Content </h1>
				</div>
				<Menu />

				<div
					className="flex flex-col px-[18vw] pt-[280px] lg:px-20 md:pt-[20vh] md:px-8"
					style={
						{
							// width: "100vw"
							// paddingBlock: "300px",
							// paddingInline: "18vw",
							// display: "flex",
							// flexDirection: "column",
						}
					}>
					<h2
						style={{
							fontSize: "40px",
							color: "white",
							fontFamily: "Space Grotesk",
							textTransform: "lowercase",
							zIndex: 2,
						}}>
						{demoData.title}
					</h2>
					<div
						className="pt-[60px] pb-80 md:pt-4 md:pb-40"
						style={{
							color: "white",
							// paddingTop: "60px",
							wordWrap: "break-word",
							fontFamily: "poppins",
							fontSize: "14px",
							lineHeight: "180%",
							// paddingBottom: "60px",
							zIndex: 2,
						}}>
						<ReactMarkdown remarkPlugins={[remarkGfm]}>
							{demoData.content}
						</ReactMarkdown>
					</div>
				</div>

				{/* Footer Section */}
				<div
					style={{
						position: "absolute",
						bottom: 0,
						left: "5vw",
						width: "90vw",
					}}>
					{window.innerWidth < 850 ? "" : <Footer />}
				</div>
			</div>
		</>
	);
};

export default PostPage;
