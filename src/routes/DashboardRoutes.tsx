import { Component, ElementType } from "react";
import { Icon } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { MdHome, MdReport } from "react-icons/md";

import { ReactComponent as AdminsLogo } from "../assets/sidenavLogos/AdminsLogosvg.svg";
import Dashboard from "../pages/dashboard/Dashboard";
import { RoutesType } from "../utils/types/Routertypes";

const routes: RoutesType[] = [
	{
		name: "Main Dashboard",
		layout: "/dashboard",
		path: "",
		// icon: <Icon as={MdHome as ElementType} width="28px" height="28px" color="inherit" />,
		component: <Dashboard />,
		icon: "",
	},
	//   {
	//     name: "Events",
	//     layout: "/dashboard",
	//     path: "/events",
	//     icon: <Icon as={EventsLogo} width="28px" height="28px" color="inherit" />,
	//     component: (
	//       <EventsProvider>
	//         <Events></Events>
	//       </EventsProvider>
	//     ),
	//   },
	//   {
	//     name: "Admins",
	//     layout: "/dashboard",
	//     path: "/admins",
	//     icon: <Icon as={AdminsLogo} width="28px" height="28px" color="inherit" />,
	//     component: (
	//       <AdminProvider>
	//         <Admins />
	//       </AdminProvider>
	//     ),
	//     isRequiredPermission: true,
	//   },
	//   {
	//     name: "Users",
	//     layout: "/dashboard",
	//     path: "/users",
	//     icon: <Icon as={UsersLogo} width="28px" height="28px" color="inherit" />,
	//     component: (
	//       <UsersProvider>
	//         <Users />
	//       </UsersProvider>
	//     ),
	//   },
	//   {
	//     name: "Places",
	//     layout: "/dashboard",
	//     path: "/places",
	//     icon: <Icon as={IoLocationSharp as ElementType} width="28px" height="28px" color="inherit" />,
	//     component: (
	//       <PlacesProvider>
	//         <Places></Places>
	//       </PlacesProvider>
	//     ),
	//   },
	//   {
	//     name: "Reports",
	//     layout: "/dashboard",
	//     path: "/reports",
	//     icon: <Icon as={MdReport as ElementType} width="28px" height="28px" color="inherit" />,
	//     secondary: true,
	//   },
	//   {
	//     name: "Community",
	//     layout: "/dashboard",
	//     path: "/community",
	//     icon: <Icon as={CommunityLogo} width="28px" height="28px" color="inherit" />,
	//   },
];

export default routes;
