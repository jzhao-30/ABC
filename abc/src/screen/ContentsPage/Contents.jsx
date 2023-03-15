/** @format */

import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import PostsList from "./PostsList";
import LightAdDark from "../HomePage/LightAndDark";
import { useState } from "react";

const Contents = (props) => {
	const [style, setStyle] = useState();

	const getChildMsg = (msg) => {
		setStyle(msg);
	};

	return (
		<div
			className="overflow-hidden min-h-screen relative"
			style={{
				backgroundColor: style,
			}}>
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
			<LightAdDark getMsg={getChildMsg} />

			<div className="flex justify-center p-20 pt-60 sm:p-2 sm:pt-40">
				<PostsList />
			</div>

			{/* Footer Section */}
			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: "5vw",
					width: "90vw",
					zIndex: "2",
				}}>
				{window.innerWidth < 850 ? "" : <Footer />}
			</div>
		</div>
	);
};

export default Contents;
