import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoutes() {
	const { token } = useAuth();

	if (!token) return <Navigate to="/login" />;

	return <Outlet />;
}
