import { Box, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import MiniStatistics from "../../components/analytics/MiniStatistics";
import PieCharts from "../../components/analytics/PieCharts";
import LineChart from "../../components/analytics/LineChart";
import BarChart from "../../components/analytics/barChart";
import { useAnalytics } from "../../context/AnalyticsContext";

export default function Dashboard() {
	const { eventCreationData } = useAnalytics();

	return (
		<Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%">
			<Stack spacing="8">
				<MiniStatistics></MiniStatistics>
				<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
					<GridItem colSpan={{ base: 1, md: 2 }} w="100%" h="100%">
						<LineChart name={"Order Creation"} data={eventCreationData} />
					</GridItem>

					<GridItem colSpan={1} w="100%" h="100%">
						<BarChart />
					</GridItem>
				</SimpleGrid>

				<PieCharts></PieCharts>

				<SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
					<GridItem colSpan={{ base: 1, md: 1 }} w="100%" h="100%">
						<LineChart name={"Users Growth Rate"} data={eventCreationData} />
					</GridItem>
					<GridItem colSpan={{ base: 1, md: 1 }} w="100%" h="100%">
						<LineChart name={"Orders Growth Rate"} data={eventCreationData} />
					</GridItem>
				</SimpleGrid>
			</Stack>
		</Box>
	);
}
