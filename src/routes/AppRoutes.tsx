import { Routes, Route } from "react-router-dom";
import { JSX, Suspense } from "react";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/login/Login";
import { AuthProvider } from "../context/AuthContext";
import Signup from "../pages/singup/Signup";
import DashboardLayout from "../layout/DashboardLayout";

const AppRoutes = (): JSX.Element => {
	return (
		<Suspense fallback={<div>Loading Dashboard...</div>}>
			<AuthProvider>
				<Routes>
					<Route element={<PublicRoutes />}>
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Route>
					<Route element={<ProtectedRoutes />}>
						<Route path="/dashboard" element={<DashboardLayout />}></Route>
					</Route>
				</Routes>
			</AuthProvider>
		</Suspense>
	);
};
export default AppRoutes;
