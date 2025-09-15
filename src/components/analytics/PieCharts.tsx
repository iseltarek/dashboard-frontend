import { SimpleGrid } from "@chakra-ui/react";
import PieCard from "./PieCard";
import { useAnalytics } from "../../context/AnalyticsContext";

export default function PieCharts() {
	const { totalPlaces, totalUsers } = useAnalytics();
	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }} gap="20px" mb="20px">
			<PieCard title="total places" data={totalUsers} />
			<PieCard title="Total Users" data={totalUsers} />
			<PieCard title="Total Orders" data={totalPlaces} />
		</SimpleGrid>
	);
}
