import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage, HomePage } from "./pages";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

export default App;
