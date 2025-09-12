import { NavLink, useLocation } from "react-router-dom";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { RoutesType } from "../../utils/types/Routertypes";

export function SidebarLinks({ routes }: { routes: RoutesType[] }) {
	const location = useLocation();

	const isActiveRoute = (path: string) => {
		const currentPath = location.pathname;
		if (!path) {
			return currentPath === "/dashboard";
		}
		return currentPath.startsWith(`/dashboard${path}`);
	};

	const createLinks = (routes: RoutesType[]) =>
		routes.map((route, index) => {
			const isDashboardOrRtlLayout = route.layout === "/dashboard" || route.layout === "/rtl";
			if (!isDashboardOrRtlLayout) {
				return null;
			}
			const isActive = isActiveRoute(route.path);
			return (
				<NavLink key={index} to={route.layout + route.path}>
					<Box mb="16px">
						<HStack spacing={isActive ? "26px" : "30px"} py="5px" ps="10px">
							<Flex w="100%" alignItems="center" justifyContent="center">
								{route.icon && (
									<Box color={isActive ? "brand.500" : "secondaryGray.500"} me="18px" fontSize="lg">
										{route.icon}
									</Box>
								)}
								<Text me="auto" color={isActive ? "brand.500" : "secondaryGray.500"} fontWeight="500" fontSize="lg">
									{route.name}
								</Text>
							</Flex>
							<Box h="36px" w="4px" bg={isActive ? "brand.500" : "transparent"} borderRadius="5px" />
						</HStack>
					</Box>
				</NavLink>
			);
		});

	return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
