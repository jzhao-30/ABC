/** @format */

import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import "../AboutPage/About.css";
import { Helmet } from "react-helmet";

const EventsComingSoon = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>ABC | Web3 - Events</title>
				<meta
					name="description"
					content="Love to meet IRL or on the internet? The ABC will host events bringing together web3 enthusiasts over some dinner and drinks."
				/>
				<meta
					name="keywords"
					content="Australian blockchain club, blockchain, web3, australia, crypto, club, ABC, events, social, meeting, meet-up"
				/>
			</Helmet>
			<h1 className="about-h2" style={{ display: "none" }}>
				ABC Events
			</h1>
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
				<h1
					className="about-h2"
					style={{
						paddingInline: "5vw",
						textTransform: "uppercase",
					}}>
					Stay tuned as we'll shortly be updating you with our
					schedule for events; both online and in-person.
				</h1>

				<div style={{ position: "absolute", bottom: 0, width: "90vw" }}>
					{window.innerWidth < 850 ? "" : <Footer />}
				</div>
			</div>
		</div>
	);
};

export default EventsComingSoon;
