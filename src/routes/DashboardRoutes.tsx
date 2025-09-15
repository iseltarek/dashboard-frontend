import { Component, ElementType } from "react";
import { Icon } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";

import { ReactComponent as AdminsLogo } from "../assets/sidenavLogos/AdminsLogosvg.svg";
import Dashboard from "../pages/dashboard/Dashboard";
import { RoutesType } from "../utils/types/Routertypes";

const routes: RoutesType[] = [
	{
		name: "Main Dashboard",
		layout: "/dashboard",
		path: "",
		icon: <Icon as={MdHome as ElementType} width="28px" height="28px" color="inherit" />,
		component: <Dashboard />,
	},
];

export default routes;
