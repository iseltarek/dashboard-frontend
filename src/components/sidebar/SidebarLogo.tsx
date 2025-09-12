import { Box, Flex } from "@chakra-ui/react";
import { HSeparator } from "../separator/Separator";

export function SidebarLogo() {
	return (
		<Flex alignItems="center" flexDirection="column">
			<Flex alignItems="center" flexDirection="row" mr="3rem" gap="0.5rem">
				<Box as="h3" fontSize="2.8rem" fontWeight="700" ml="-1.5rem" color="brand.500">
					MiniDashboard
				</Box>
			</Flex>
			<HSeparator mb="20px" />
		</Flex>
	);
}

export default SidebarLogo;
