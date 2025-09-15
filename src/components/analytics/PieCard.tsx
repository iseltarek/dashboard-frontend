import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useMemo } from "react";
import Card from "../cards/Card";
import { Box, Text, Flex } from "@chakra-ui/react";
import { PieDataItem } from "../../utils/types/analytics/PieDataItem";

interface PieCardProps {
  title: string;
  data: PieDataItem[];
  showCount?: boolean;
  showBoth?: boolean;
  size?: number;
  colors?: string[];
  isLoading?: boolean;
  emptyStateMessage?: string;
}

const DEFAULT_COLORS = ["#28B16D", "#FEA405", "#FF7777", "#D9D9D9"];
const DEFAULT_SIZE = 200;

export default function PieCard({
  title,
  data,
  showCount = false,
  showBoth = false,
  size = DEFAULT_SIZE,
  colors = DEFAULT_COLORS,
  isLoading = false,
  emptyStateMessage = "No data available",
}: PieCardProps) {
  const processedData = useMemo(() => {
    if (!data?.length) return [];

    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (total === 0) return [];

    return data.map((item, index) => ({
      ...item,
      color: colors[index % colors.length],
      percentage: Math.round((item.value / total) * 100),
    }));
  }, [data, colors]);

  const getLegendValue = useMemo(
    () => (item: any) => {
      if (showBoth) {
        return `${item.count || item.value} (${item.percentage}%)`;
      } else if (showCount) {
        return `${item.count || item.value}`;
      } else {
        return `${item.percentage}%`;
      }
    },
    [showCount, showBoth],
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0];
    const { name, value, payload: itemData } = data;

    return (
      <Box bg="white" p={3} border="1px solid" borderColor="gray.200" borderRadius="md" boxShadow="lg">
        <Text fontSize="sm" fontWeight="600" mb={1}>
          {name}
        </Text>
        {showBoth ? (
          <>
            <Text fontSize="xs" color="#8C8C8C">
              Count: {itemData.count || value}
            </Text>
            <Text fontSize="xs" color="#8C8C8C">
              Percentage: {itemData.percentage}%
            </Text>
          </>
        ) : showCount ? (
          <Text fontSize="xs" color="#8C8C8C">
            Count: {itemData.count || value}
          </Text>
        ) : (
          <Text fontSize="xs" color="#8C8C8C">
            {itemData.percentage}%
          </Text>
        )}
      </Box>
    );
  };

  if (isLoading) {
    return (
      <Card alignItems="center" flexDirection="column" w="100%" p={6}>
        <Text fontWeight="700" color="teal.500" fontSize={{ lg: "lg", xl: "xl", "2xl": "2xl", sm: "md", md: "lg" }} mb={4} textAlign="center">
          {title}
        </Text>
        <Box style={{ width: size, height: size }} display="flex" alignItems="center" justifyContent="center">
          <Text color="gray.500">Loading...</Text>
        </Box>
      </Card>
    );
  }

  if (!processedData.length) {
    return (
      <Card alignItems="center" flexDirection="column" w="100%" p={6}>
        <Text fontWeight="700" color="#28B16D" fontSize={{ lg: "lg", xl: "xl", "2xl": "2xl", sm: "md", md: "lg" }} mb={4} textAlign="center">
          {title}
        </Text>
        <Box style={{ width: size, height: size }} display="flex" alignItems="center" justifyContent="center">
          <Text color="gray.500" textAlign="center">
            {emptyStateMessage}
          </Text>
        </Box>
      </Card>
    );
  }

  return (
    <Card alignItems="center" flexDirection="column" w="100%" p={6}>
      <Text fontWeight="700" color="#28B16D" fontSize={{ lg: "md", xl: "lg", "2xl": "lg", sm: "sm", md: "md" }} mb={4} textAlign="left" alignSelf="start">
        {title}
      </Text>

      <Box style={{ width: size, height: size }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={processedData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={size * 0.4} innerRadius={0} startAngle={90} endAngle={450}>
              {processedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Flex justify="center" gap={4} mt={4} wrap="wrap" maxW="100%">
        {processedData.map((entry, index) => (
          <Flex key={index} align="center" gap={2} minW="fit-content">
            <Box w="12px" h="12px" borderRadius="50%" bg={entry.color} />
            <Text fontSize={{ sm: "sm", md: "sm", lg: "sm", xl: "sm", "2xl": "md" }} color="#8C8C8C">
              {entry.name}
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.800">
              {getLegendValue(entry)}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}
