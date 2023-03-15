//https://segmentfault.com/a/1190000009571886
import React, { useEffect } from "react";
import { useState } from "react";
import {content_eng_component, content_zh_component} from "./content.jsx";

// 引入汉语内容
const content_eng = content_eng_component
// 引入英语内容
const content_zh = content_zh_component


const Scroll = (props) => {

    const [width0, setWidth0] = useState("100%");
	const [width1, setWidth1] = useState("100%");
	const [width2, setWidth2] = useState("100%");
	const [width3, setWidth3] = useState("100%");
	const [width4, setWidth4] = useState("100%");
	const [width5, setWidth5] = useState("100%");
	const [width6, setWidth6] = useState("100%");
	const [width7, setWidth7] = useState("100%");
	const [width8, setWidth8] = useState("100%");
	const [width9, setWidth9] = useState("100%");
	const [width10, setWidth10] = useState("100%");
	const [width11, setWidth11] = useState("100%");
	const [width12, setWidth12] = useState("100%");
	const [width13, setWidth13] = useState("100%");
	const [width14, setWidth14] = useState("100%");
	const [width15, setWidth15] = useState("100%");
	const [width16, setWidth16] = useState("100%");
	const [width17, setWidth17] = useState("100%");
	const [width18, setWidth18] = useState("100%");
	const [width19, setWidth19] = useState("100%");
	const [width20, setWidth20] = useState("100%");
	const [width21, setWidth21] = useState("100%");
	const [width22, setWidth22] = useState("100%");
	const [width23, setWidth23] = useState("100%");
	const [width24, setWidth24] = useState("100%");
	const [width25, setWidth25] = useState("100%");
	const [width26, setWidth26] = useState("100%");
	const [width27, setWidth27] = useState("100%");

    const [lineMaskColor, setlineMaskColor] = useState(localStorage.getItem("background") );
    const [language, setLanguage] = useState(localStorage.getItem("language"));



	useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        // window.addEventListener("scroll", handleScroll);
		if (localStorage.getItem("background") === "black") {
			setlineMaskColor("black");
		} else {
			setlineMaskColor("rgb(31,72,224)");
		}
        
    },[])

    useEffect(()=>{
        setlineMaskColor(props.lineMaskColor)
    },[props])
    




    const handleScroll = () => {
		let scrollTop = document.documentElement.scrollTop;
		let scrollHeight = document.documentElement.scrollHeight;
		let scrollP = scrollTop / scrollHeight;
		let scrollReal = scrollHeight * 0.1;
		// console.log(scrollP);
		// let currentPagePercent = 100 / scrollHeight;
		// console.log(scrollHeight);
		if (scrollHeight < 3000) {
			//1
			if (scrollP < 0.01) {
				setWidth0("100%");
			} else {
				setWidth0("0%");
			}

			//2
			if (scrollP < 0.02) {
				setWidth1("100%");
			} else {
				setWidth1("0%");
			}

			//3
			if (scrollP < 0.03) {
				setWidth2("100%");
			} else {
				setWidth2("0%");
			}
			//4
			if (scrollP < 0.04) {
				setWidth3("100%");
			} else {
				setWidth3("0%");
			}

			//5
			if (scrollP < 0.05) {
				setWidth4("100%");
			} else {
				setWidth4("0%");
			}
			//6
			if (scrollP < 0.06) {
				setWidth5("100%");
			} else {
				setWidth5("0%");
			}
			//7
			if (scrollP < 0.07) {
				setWidth6("100%");
			} else {
				setWidth6("0%");
			}
			//8
			if (scrollP < 0.08) {
				setWidth7("100%");
			} else {
				setWidth7("0%");
			}
			//9
			if (scrollP < 0.09) {
				setWidth8("100%");
			} else {
				setWidth8("0%");
			}
			//10
			if (scrollP < 0.1) {
				setWidth9("100%");
			} else {
				setWidth9("0%");
			}
			//11
			if (scrollP < 0.11) {
				setWidth10("100%");
			} else {
				setWidth10("0%");
			}
			//12
			if (scrollP < 0.12) {
				setWidth11("100%");
			} else {
				setWidth11("0%");
			}
			//13
			if (scrollP < 0.13) {
				setWidth12("100%");
			} else {
				setWidth12("0%");
			}
			//14
			if (scrollP < 0.14) {
				setWidth13("100%");
			} else {
				setWidth13("0%");
			}
			//15
			if (scrollP < 0.15) {
				setWidth14("100%");
			} else {
				setWidth14("0%");
			}
			//16
			if (scrollP < 0.16) {
				setWidth15("100%");
			} else {
				setWidth15("0%");
			}
			//17
			if (scrollP < 0.17) {
				setWidth16("100%");
			} else {
				setWidth16("0%");
			}
			//18
			if (scrollP < 0.18) {
				setWidth17("100%");
			} else {
				setWidth17("0%");
			}
			//19
			if (scrollP < 0.19) {
				setWidth18("100%");
			} else {
				setWidth18("0%");
			}

			//20
			if (scrollP < 0.2) {
				setWidth19("100%");
			} else {
				setWidth19("0%");
			}
			//21
			if (scrollP < 0.21) {
				setWidth20("100%");
			} else {
				setWidth20("0%");
			}
			//22
			if (scrollP < 0.22) {
				setWidth21("100%");
			} else {
				setWidth21("0%");
			}
			//23
			if (scrollP < 0.23) {
				setWidth22("100%");
			} else {
				setWidth22("0%");
			}
			//24
			if (scrollP < 0.24) {
				setWidth23("100%");
			} else {
				setWidth23("0%");
			}
			//25
			if (scrollP < 0.25) {
				setWidth24("100%");
			} else {
				setWidth24("0%");
			}
			//26
			if (scrollP < 0.26) {
				setWidth25("100%");
			} else {
				setWidth25("0%");
			}
		} else {
			if (scrollTop < scrollReal) {
				var per = "100%";
				setWidth0(per);
			}

			if (scrollReal < scrollTop && scrollTop < scrollReal + 100) {
				var pers = 100 - (scrollTop - scrollReal) + "%";
				setWidth0(pers);
			}

			if (scrollTop > scrollReal + 100) {
				var persF = "0%";
				setWidth0(persF);
			}

			// 第二行
			if (scrollTop < scrollReal + 100) {
				var pe20 = "100%";
				setWidth1(pe20);
			}

			if (scrollTop > scrollReal + 100 && scrollTop < scrollReal + 200) {
				var per2 = 100 - (scrollTop - (scrollReal + 100)) + "%";
				// console.log(per2);
				setWidth1(per2);
			}

			if (scrollTop > scrollReal + 200) {
				var pers2 = "0%";
				setWidth1(pers2);
			}

			// 第三行
			if (scrollTop < scrollReal + 200) {
				var pe3 = "100%";
				setWidth2(pe3);
			}

			if (scrollTop > scrollReal + 200 && scrollTop < scrollReal + 300) {
				var per3 = 100 - (scrollTop - (scrollReal + 200)) + "%";
				// console.log(per3);
				setWidth2(per3);
			}

			if (scrollTop > scrollReal + 300) {
				var pers3 = "0%";
				setWidth2(pers3);
			}

			// 第四行
			if (scrollTop < scrollReal + 300) {
				var pe4 = "100%";
				setWidth3(pe4);
			}

			if (scrollTop > scrollReal + 300 && scrollTop < scrollReal + 400) {
				var per4 = 100 - (scrollTop - (scrollReal + 300)) + "%";
				// console.log(per4);
				setWidth3(per4);
			}

			if (scrollTop > scrollReal + 400) {
				var pers4 = "0%";
				setWidth3(pers4);
			}
			//	第五行
			if (scrollTop < scrollReal + 400) {
				var pe5 = "100%";
				setWidth4(pe5);
			}

			if (scrollTop > scrollReal + 400 && scrollTop < scrollReal + 500) {
				var per5 = 100 - (scrollTop - (scrollReal + 400)) + "%";
				// console.log(per5);
				setWidth4(per5);
			}

			if (scrollTop > scrollReal + 500) {
				var pers5 = "0%";
				setWidth4(pers5);
			}

			//第六行
			if (scrollTop < scrollReal + 500) {
				var pe6 = "100%";
				setWidth5(pe6);
			}

			if (scrollTop > scrollReal + 500 && scrollTop < scrollReal + 600) {
				var per6 = 100 - (scrollTop - (scrollReal + 500)) + "%";
				// console.log(per6);
				setWidth5(per6);
			}

			if (scrollTop > scrollReal + 600) {
				var pers6 = "0%";
				setWidth5(pers6);
			}

			//第7行
			if (scrollTop < scrollReal + 600) {
				var pe7 = "100%";
				setWidth6(pe7);
			}

			if (scrollTop > scrollReal + 600 && scrollTop < scrollReal + 700) {
				var per7 = 100 - (scrollTop - (scrollReal + 600)) + "%";
				// console.log(per7);
				setWidth6(per7);
			}

			if (scrollTop > scrollReal + 700) {
				var pers7 = "0%";
				setWidth6(pers7);
			}
			//第8行
			if (scrollTop < scrollReal + 700) {
				var pe8 = "100%";
				setWidth7(pe8);
			}

			if (scrollTop > scrollReal + 700 && scrollTop < scrollReal + 800) {
				var per8 = 100 - (scrollTop - (scrollReal + 700)) + "%";
				// console.log(per8);
				setWidth7(per8);
			}

			if (scrollTop > scrollReal + 800) {
				var pers8 = "0%";
				setWidth7(pers8);
			}

			//第10行
			if (scrollTop < scrollReal + 900) {
				var pe10 = "100%";
				setWidth9(pe10);
			}

			if (scrollTop > scrollReal + 900 && scrollTop < scrollReal + 1000) {
				var per10 = 100 - (scrollTop - (scrollReal + 900)) + "%";
				// console.log(per10);
				setWidth9(per10);
			}

			if (scrollTop > scrollReal + 1000) {
				var pers10 = "0%";
				setWidth9(pers10);
			}

			//第11行
			if (scrollTop < scrollReal + 1000) {
				var pe11 = "100%";
				setWidth10(pe11);
			}

			if (
				scrollTop > scrollReal + 1000 &&
				scrollTop < scrollReal + 1200
			) {
				var per11 = 100 - (scrollTop - (scrollReal + 1000)) + "%";
				setWidth10(per11);
			}

			if (scrollTop > scrollReal + 1100) {
				var pers11 = "0%";
				setWidth10(pers11);
			}

			//第12行
			if (scrollTop < scrollReal + 1100) {
				setWidth11("100%");
			}

			if (
				scrollTop > scrollReal + 1100 &&
				scrollTop < scrollReal + 1300
			) {
				setWidth11(100 - (scrollTop - (scrollReal + 1100)) + "%");
			}

			if (scrollTop > scrollReal + 1200) {
				setWidth11("0%");
			}

			//第13行
			if (scrollTop < scrollReal + 1200) {
				setWidth12("100%");
			}

			if (
				scrollTop > scrollReal + 1200 &&
				scrollTop < scrollReal + 1400
			) {
				setWidth12(100 - (scrollTop - (scrollReal + 1200)) + "%");
			}

			if (scrollTop > scrollReal + 1300) {
				setWidth12("0%");
			}

			//第14行
			if (scrollTop < scrollReal + 1300) {
				setWidth13("100%");
			}

			if (
				scrollTop > scrollReal + 1300 &&
				scrollTop < scrollReal + 1500
			) {
				setWidth13(100 - (scrollTop - (scrollReal + 1300)) + "%");
			}

			if (scrollTop > scrollReal + 1400) {
				setWidth13("0%");
			}
			//第15行
			if (scrollTop < scrollReal + 1400) {
				setWidth14("100%");
			}

			if (
				scrollTop > scrollReal + 1400 &&
				scrollTop < scrollReal + 1600
			) {
				setWidth14(100 - (scrollTop - (scrollReal + 1400)) + "%");
			}

			if (scrollTop > scrollReal + 1500) {
				setWidth14("0%");
			}

			//第16行
			if (scrollTop < scrollReal + 1500) {
				setWidth15("100%");
			}

			if (
				scrollTop > scrollReal + 1500 &&
				scrollTop < scrollReal + 1700
			) {
				setWidth15(100 - (scrollTop - (scrollReal + 1500)) + "%");
			}

			if (scrollTop > scrollReal + 1600) {
				setWidth15("0%");
			}

			//第17行
			if (scrollTop < scrollReal + 1600) {
				setWidth16("100%");
			}

			if (
				scrollTop > scrollReal + 1600 &&
				scrollTop < scrollReal + 1800
			) {
				setWidth16(100 - (scrollTop - (scrollReal + 1600)) + "%");
			}

			if (scrollTop > scrollReal + 1700) {
				setWidth16("0%");
			}

			//第18行
			if (scrollTop < scrollReal + 1700) {
				setWidth17("100%");
			}

			if (
				scrollTop > scrollReal + 1700 &&
				scrollTop < scrollReal + 1900
			) {
				setWidth17(100 - (scrollTop - (scrollReal + 1700)) + "%");
			}

			if (scrollTop > scrollReal + 1800) {
				setWidth17("0%");
			}

			//第19行
			if (scrollTop < scrollReal + 1800) {
				setWidth18("100%");
			}

			if (
				scrollTop > scrollReal + 1800 &&
				scrollTop < scrollReal + 2000
			) {
				setWidth18(100 - (scrollTop - (scrollReal + 1800)) + "%");
			}

			if (scrollTop > scrollReal + 1900) {
				setWidth18("0%");
			}

			//第20行
			if (scrollTop < scrollReal + 1800) {
				setWidth19("100%");
			}

			if (
				scrollTop > scrollReal + 1800 &&
				scrollTop < scrollReal + 2000
			) {
				setWidth19(100 - (scrollTop - (scrollReal + 1800)) + "%");
			}

			if (scrollTop > scrollReal + 1900) {
				setWidth19("0%");
			}
			//第21行
			if (scrollTop < scrollReal + 1900) {
				setWidth20("100%");
			}

			if (
				scrollTop > scrollReal + 1900 &&
				scrollTop < scrollReal + 2100
			) {
				setWidth20(100 - (scrollTop - (scrollReal + 1900)) + "%");
			}

			if (scrollTop > scrollReal + 2000) {
				setWidth20("0%");
			}

			//第22行
			if (scrollTop < scrollReal + 2000) {
				setWidth21("100%");
			}

			if (
				scrollTop > scrollReal + 2000 &&
				scrollTop < scrollReal + 2200
			) {
				setWidth21(100 - (scrollTop - (scrollReal + 2000)) + "%");
			}

			if (scrollTop > scrollReal + 2100) {
				setWidth21("0%");
			}

			//第23行
			if (scrollTop < scrollReal + 2100) {
				setWidth22("100%");
			}

			if (
				scrollTop > scrollReal + 2100 &&
				scrollTop < scrollReal + 2300
			) {
				setWidth22(100 - (scrollTop - (scrollReal + 2100)) + "%");
			}

			if (scrollTop > scrollReal + 2200) {
				setWidth22("0%");
			}

			//第24行
			if (scrollTop < scrollReal + 2200) {
				setWidth23("100%");
			}

			if (
				scrollTop > scrollReal + 2200 &&
				scrollTop < scrollReal + 2400
			) {
				setWidth23(100 - (scrollTop - (scrollReal + 2200)) + "%");
			}

			if (scrollTop > scrollReal + 2300) {
				setWidth23("0%");
			}

			//第25行
			if (scrollTop < scrollReal + 2300) {
				setWidth24("100%");
			}

			if (
				scrollTop > scrollReal + 2300 &&
				scrollTop < scrollReal + 2500
			) {
				setWidth24(100 - (scrollTop - (scrollReal + 2300)) + "%");
			}

			if (scrollTop > scrollReal + 2400) {
				setWidth24("0%");
			}

			//第26行
			if (scrollTop < scrollReal + 2400) {
				setWidth25("100%");
			}

			if (
				scrollTop > scrollReal + 2400 &&
				scrollTop < scrollReal + 2600
			) {
				setWidth25(100 - (scrollTop - (scrollReal + 2400)) + "%");
			}

			if (scrollTop > scrollReal + 2500) {
				setWidth25("0%");
			}
		}
	};

	return (
		<>
        {language === "zh" ? (
							<div className="textWrapper">
								{content_zh.map((item, key) => {
									return (
										<div className="line-wrapper">
											<div className="about-para">
												<div className="line">
													{item}
												</div>
												<div
													className="lineMask"
													style={{
														width: eval(
															"width" + key
														),
														backgroundColor:
															lineMaskColor,
													}}></div>
											</div>
										</div>
									);
								})}
							</div>
						) : (
							<div className="textWrapper">
								{content_eng.map((item, key) => {
									return (
										<div className="line-wrapper">
											<div className="about-para">
												<div className="line">
													{item}
												</div>
												<div
													className="lineMask"
													style={{
														width: eval(
															"width" + key
														),
														backgroundColor:
															lineMaskColor,
													}}></div>
											</div>
										</div>
									);
								})}
							</div>
						)}
        </>
	);
};

export default Scroll;
