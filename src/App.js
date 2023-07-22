import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import { ErrorPage, HomePage, LoginPage, SignUpPage, CoursePage } from "./pages";
// Components
import Navigation from "./components/common/navigation/Navigation";
import Footer from "./components/common/footer/Footer";

const App = () => {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/course/:id" element={<CoursePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
