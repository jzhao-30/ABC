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
					title
				</h2>
			</div>

			<Post title="Web3.0 Article" slug="web3-article" />
		</div>
	);
};

export default PostsList;
