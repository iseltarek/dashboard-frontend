import axios from "axios";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
export interface AuthContextType {
	token: string | null;
	logout: () => void;
	login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
}
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const url = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();
	const [token, setToken] = useState(() => localStorage.getItem("token"));
	useEffect(() => {
		const savedToken = localStorage.getItem("token");

		if (savedToken) {
			setToken(savedToken);
		}
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const { data } = await axios.post(`${url}/admin/auth/login`, { email, password });
			if (!data.token) return { success: false };
			localStorage.setItem("token", data.token);
			localStorage.setItem("admin", JSON.stringify(data.user));
			setToken(data.token);
			navigate("/dashboard");
			return { success: true };
		} catch (error: any) {
			return {
				success: false,
				message: error?.response?.data?.message || "Login failed",
			};
		}
	};
	const logout = async () => {
		await axios.post(`${url}/admin/auth/logout`).then(() => {
			localStorage.removeItem("token");
			localStorage.removeItem("admin");
			setToken(null);
			navigate("/login");
		});
	};

	return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
