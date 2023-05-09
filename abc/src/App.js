/** @format */

import "./App.css";
import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Navigate,
	Routes,
} from "react-router-dom";
import Home from "./screen/HomePage/Home";
import About from "./screen/AboutPage/About";
import Dark from "./screen/DarkMode";
import Projects from "./screen/AboutPage/Projects";
import EventsComingSoon from "./screen/EventsPage/EventsComingSoon";
import ContentsComingSoon from "./screen/ContentsPage/ContentsComingSoon";
import Contents from "./screen/ContentsPage/Contents";
import PostPage from "./screen/ContentsPage/PostPage";
import ContentsEvent from "./screen/EventsPage/ContentsEvent";
import PostPageEvent from "./screen/EventsPage/PostPageEvent";

function App() {
	useEffect(()=>{
		if(localStorage.getItem('background')!== null){
			console.log(localStorage.getItem('background'))
		}else{
			localStorage.setItem('background', 'rgb(31,73,224)')
		}
	},[])
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="/dark" element={<Dark />} /> */}
					{/* <Route path="/events" element={<EventsComingSoon />} /> */}
					<Route path="/events" element={<ContentsEvent />} />
					<Route path="/contents" element={<Contents />} />
					{/* <Route path="/test" element={<Contents />} /> */}
					<Route path="/contents/:slug" element={<PostPage />} />
					<Route path="/events/:slug" element={<PostPageEvent />} />
				</Routes>
			</div>
		</Router>
	);
}
export default App;
