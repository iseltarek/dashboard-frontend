import { Box, BoxProps } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import routes from "../routes/DashboardRoutes";

interface DashboardLayoutProps extends BoxProps {}

export default function DashboardLayout({ ...rest }: DashboardLayoutProps) {
	return (
		<Box>
			<Sidebar routes={routes} display="none" {...rest} />
			<Box
				float="right"
				minHeight="100vh"
				height="100%"
				overflow="auto"
				position="relative"
				maxHeight="100%"
				w={{ base: "100%", xl: "calc( 100% - 290px )" }}
				maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
				transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
				transitionDuration=".2s, .2s, .35s"
				transitionProperty="top, bottom, width"
				transitionTimingFunction="linear, linear, ease">
				<Box mx="auto" p={{ base: "20px", md: "30px" }} pe="20px" minH="100vh" pt="50px">
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
}
