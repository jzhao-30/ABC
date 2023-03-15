/** @format */

import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import "../AboutPage/About.css";

const ContentsComingSoon = () => {
	return (
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
			<Menu />
			<div
				style={{
					position: "absolute",
					display: "flex",
					height: "100vh",
					width: "100vw",
					backgroundColor: "black",
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
				}}>
				<h1 className="about-h2" style={{ paddingInline: "5vw", textTransform: "uppercase" }}>
					Your web3 glossary is still in the works, bear with us as we
					fine tune it to offer you the best.
				</h1>
				<div style={{ position: "absolute", bottom: 0, width: "90vw" }}>
					{window.innerWidth < 850 ? "" : <Footer />}
				</div>
			</div>
		</div>
	);
};

export default ContentsComingSoon;
