import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoutes() {
	const { token } = useAuth();

	if (token) return <Navigate to="/dashboard" />;

	return <Outlet />;
}
