import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "../cards/Card";
import { useAnalytics } from "../../context/AnalyticsContext";

export default function BarChartComponent() {
	const { PrayerTimesData } = useAnalytics();
	const cardShadow = useColorModeValue("0px 7px 20px rgba(38, 38, 38, 0.1)", "unset");

	const getBarColor = (value: number) => {
		const maxValue = Math.max(...PrayerTimesData.map((item) => item.value));
		const percentage = (value / maxValue) * 100;

		if (percentage < 25) return "#A7F3D0";
		if (percentage < 50) return "#6EE7B7";
		if (percentage < 75) return "#34D399";
		return "#10B981";
	};

	return (
		<Card mb={{ base: "0px", "2xl": "20px" }} gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }} minH="365px" pe="20px" boxShadow={cardShadow}>
			<Text fontWeight="700" color="#28B16D" fontSize={{ lg: "md", xl: "lg", "2xl": "lg", sm: "sm", md: "md" }} textAlign="left" alignSelf="start">
				{" "}
				Most Active Places
			</Text>

			<Box h="334px" w="100%">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={PrayerTimesData} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
						<XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9CA3AF" }} />
						<Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
							{PrayerTimesData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</Box>
		</Card>
	);
}
