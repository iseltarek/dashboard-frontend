import { SimpleGrid } from "@chakra-ui/react";
import MiniStatisticsCard from "./MiniStatisticsCard";
import IconBox from "../icons/IconBox";
import { MiniStatisticsData } from "../../utils/types/analytics/MiniStatisticsData";

export default function MiniStatistics() {
	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px" mb="20px">
			{MiniStatisticsData.map((data) => (
				<MiniStatisticsCard key={data.name} startContent={<IconBox w="56px" h="56px" bg={data.bgColor} icon={data.icon} />} name={data.name} color={data.color} value="0" />
			))}
		</SimpleGrid>
	);
}
