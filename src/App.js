import React, { useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authContent";
// Pages
import {
	ErrorPage,
	HomePage,
	LoginPage,
	SignUpPage,
	CoursePage,
	SignleCategoryPage,
} from "./pages";
// Components
import Navigation from "./components/common/navigation/Navigation";
import Footer from "./components/common/footer/Footer";
import { Toaster } from "react-hot-toast";

const AuthenticateUser = ({ children }) => {
	const { user } = useContext(AuthContext);
	return user ? <>{children}</> : <Navigate to="/login" />;
};

const ExistUser = ({ children }) => {
	const { user } = useContext(AuthContext);
	return !user ? <>{children}</> : <Navigate to="/" />;
};

const App = () => {
	return (
		<Router>
			<Toaster position="top-left" reverseOrder={true} />
			<Navigation />
			<Routes>
				<Route
					path="/"
					element={
						<AuthenticateUser>
							<HomePage />
						</AuthenticateUser>
					}
				/>
				<Route path="/course/:id" element={<CoursePage />} />
				<Route path="/category/:type" element={<SignleCategoryPage />} />
				<Route
					path="/login"
					element={
						<ExistUser>
							<LoginPage />
						</ExistUser>
					}
				/>
				<Route
					path="/signup"
					element={
						<ExistUser>
							<SignUpPage />
						</ExistUser>
					}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
