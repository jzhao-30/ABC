/** @format */

import React, { useEffect } from "react";
import { useState } from "react";


const SwitchLight = (props) => {
	const [style, setStyle] = useState(localStorage.getItem("background"));
	const [color, setColor] = useState(localStorage.getItem("color"));
	const [dis, setDis] = useState("relative");
	const [name, setName] = useState();
	const [duration, setDuration] = useState();
	const [fill, setFill] = useState();
	const [index, setIndex] = useState();
	const [darkDis, setDarkDis] = useState(localStorage.getItem("darkDis"));
	const [direction, setDirection] = useState("");
	const [lightDis, setLightDis] = useState(localStorage.getItem("lightkDis"));
	const [lightz, setLightz] = useState(localStorage.getItem("lightz"));
	const [language, setLanguage] = useState(localStorage.getItem("language"));
	const [lineMaskColor, setlineMaskColor] = useState(
		localStorage.getItem("background")
	);

    useEffect(()=>{
        props.getMsg(style, lineMaskColor)
    })

	const becomeBlack = () => {
		// 设置背景过渡的动画
		setName("hd");
		setDuration("1s");
		setFill("forwards");
		setIndex("1");
		setColor("white");

		// 字体颜色改为白色
		localStorage.setItem("color", "white");
		setTimeout(() => {
			setStyle("black");
			localStorage.setItem("background", "black");
			// setDarkDis('none')
			// localStorage.setItem('darkDis', 'none')

			//然后设置日间模式index为2，叠在圆的上方
			setLightz(2);
			localStorage.setItem("lightz", 2);
			// 首先显示日间模式按钮
			setLightDis("block");
			localStorage.setItem("lightkDis", "block");

			// 修改linemask
			// setlineMaskColor('black')
		}, 500);
		setTimeout(() => {
			// 修改linemask
			setlineMaskColor("black");
		}, 40);
	};

	const imageback = () => {
		// setlineMaskColor('rgb(31,72,224)')
		setTimeout(() => {
			setStyle("rgb(31,73,224)");
			localStorage.setItem("background", "rgb(31,73,224)");
		}, 500);

		setTimeout(() => {
			setLightDis("none");
			localStorage.setItem("lightkDis", "none");

			// 修改linemask
			setlineMaskColor("rgb(31,72,224)");
		}, 1000);

		setTimeout(() => {
			// 修改linemask
			setlineMaskColor("rgb(31,72,224)");
		}, 800);

		setName("another");
		setDuration("1s");
		setFill("forwards");
		setIndex("1");
		setColor("white");
	};



	return (
		<>
            <div className="btnWrapper">
					<div
						className="test-com"
						tabIndex="1"
						onClick={becomeBlack}
						style={{
							animationName: name,
							animationDuration: duration,
							animationFillMode: fill,
							zIndex: index,
							display: darkDis,
							animationDirection: direction,
							width: "233px",
							height: "233px",
							backgroundColor: "black",
							borderRadius: "50%",
							zIndex: "1",
							position: "absolute",
							right: "-60px",
							top: "-60px",
							cursor: "pointer",
						}}></div>
				</div>

				<div className="lightWrapper">
					<div
						className="test2-com"
						tabIndex="2"
						onClick={imageback}
						style={{
							display: lightDis,
							zIndex: parseInt(lightz),
							width: "233px",
							height: "233px",
							backgroundColor: "rgb(46,82,220)",
							borderRadius: "50%",
							position: "absolute",
							right: "-60px",
							top: "-60px",
							cursor: "pointer",
						}}></div>
				</div>
        </>
	);
};

export default SwitchLight;