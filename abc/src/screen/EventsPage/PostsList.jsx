/** @format */

import React from "react";
import Post from "./Post";

const PostsList = () => {
	return (
		<div
			style={{
				width: "90%",
				display: "grid",
				zIndex: 2,
			}}>
			<div
				style={{
					display: "flex",
					height: "72px",
					alignContent: "center",
					alignItems: "center",
					justifyContent: "space-between",
					borderBottom: "solid 1px white",
				}}>
				<h2
					className="font-['poppins'] text-white text-[27px] font-semibold"
					style={
						{
							// fontFamily: "Poppins",
							// fontSize: "27px",
							// color: "white",
							// fontWeight: 700,
						}
					}>
					Events
				</h2>
			</div>

			<Post title="Web3 Uni Roundtable Discussion" slug="web3-events" />
		</div>
	);
};

export default PostsList;
