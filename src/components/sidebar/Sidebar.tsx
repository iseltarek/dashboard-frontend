import { Box, Flex, Drawer, DrawerBody, Icon, useColorModeValue, DrawerOverlay, useDisclosure, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { renderThumb, renderTrack, renderView } from "../scrollbar/Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";

import { FocusableElement } from "@chakra-ui/utils";
import { IoMenuOutline } from "react-icons/io5";
import Content from "./SideBarContent";
import React, { ElementType } from "react";
import { RoutesType } from "../../utils/types/Routertypes";

interface SidebarProps {
	routes: RoutesType[];
}

function Sidebar({ routes }: SidebarProps) {
	const styles = {
		variantChange: "0.2s linear",
		shadow: useColorModeValue("14px 17px 40px 4px rgba(112, 144, 176, 0.08)", "unset"),
		sidebarBg: useColorModeValue("white", "navy.800"),
	};

	return (
		<Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
			<Box bg={styles.sidebarBg} transition={styles.variantChange} w="300px" h="100vh" m="0px" minH="100%" overflowX="hidden" boxShadow={styles.shadow}>
				<Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
					<Content routes={routes} />
				</Scrollbars>
			</Box>
		</Box>
	);
}
interface SidebarResponsiveProps {
	routes: RoutesType[];
}

export function SidebarResponsive({ routes }: SidebarResponsiveProps) {
	const styles = {
		sidebarBackgroundColor: useColorModeValue("white", "navy.800"),
		menuColor: useColorModeValue("gray.400", "white"),
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef<FocusableElement | null>(null);
	const drawerPlacement = () => {
		return document.documentElement.dir === "rtl" ? "right" : "left";
	};
	return (
		<Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
			<Flex ref={btnRef as React.RefObject<HTMLDivElement>} w="max-content" h="max-content" onClick={onOpen}>
				<Icon as={IoMenuOutline as ElementType} color={styles.menuColor} my="auto" w="20px" h="20px" me="10px" _hover={{ cursor: "pointer" }} />
			</Flex>
			<Drawer isOpen={isOpen} onClose={onClose} placement={drawerPlacement()}>
				<DrawerOverlay />
				<DrawerContent w="285px" maxW="285px" bg={styles.sidebarBackgroundColor}>
					<DrawerCloseButton zIndex="3" onClick={onClose} _focus={{ boxShadow: "none" }} _hover={{ boxShadow: "none" }} />
					<DrawerBody maxW="285px" px="0rem" pb="0">
						<Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
							<Content routes={routes} />
						</Scrollbars>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}

export default Sidebar;
