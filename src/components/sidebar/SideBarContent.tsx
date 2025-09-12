import { Box, Flex, Stack } from "@chakra-ui/react";
import Links from "./SidebarLinks";
import Logo from "./SidebarLogo";
import { RoutesType } from "../../utils/types/Routertypes";

function SidebarContent(props: { routes: RoutesType[] }) {
	const { routes } = props;
	return (
		<Flex direction="column" height="100%" pt="25px" borderRadius="30px">
			<Logo />
			<Stack direction="column" mt="8px" mb="auto">
				<Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
					<Links routes={routes} />
				</Box>
			</Stack>
		</Flex>
	);
}

export default SidebarContent;
