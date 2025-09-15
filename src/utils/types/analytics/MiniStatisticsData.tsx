import { Icon } from "@chakra-ui/react";
import { MdOutlineQuestionMark, MdReport } from "react-icons/md";
import { ElementType } from "react";
import { ReactComponent as eventsIcon } from "../../../assets/sidenavLogos/EventsLogo.svg";
import { ReactComponent as adminIcon } from "../../../assets/sidenavLogos/AdminsLogosvg.svg";

export const MiniStatisticsData = [
	{
		name: "Active Orders",
		icon: <Icon w="32px" h="32px" as={eventsIcon} color="brandScheme.500" />,
		color: "brandScheme.500",
		bgColor: "brandScheme.50",
	},
	{
		name: "Ended Orders",
		icon: <Icon w="32px" h="32px" as={eventsIcon} color="blue.300" />,
		color: "blue.300",
		bgColor: "blue.100",
	},
	{
		name: "Cancelled Orders",
		icon: <Icon w="32px" h="32px" as={eventsIcon} color="pink.500" />,
		color: "pink.500",
		bgColor: "pink.50",
	},
	{
		name: "Total Users",
		icon: <Icon w="32px" h="32px" as={adminIcon} color="blue.300" />,
		color: "blue.300",
		bgColor: "blue.100",
		isSuperAdmin: true,
	},
	{
		name: "Total Requests",
		icon: <Icon w="32px" h="32px" as={MdOutlineQuestionMark as ElementType} color="orange.400" />,
		color: "orange.400",
		bgColor: "orange.50",
	},
	{
		name: "Total Reports",
		icon: <Icon w="32px" h="32px" as={MdReport as ElementType} color="pink.500" />,
		color: "pink.500",
		bgColor: "pink.50",
	},
];
