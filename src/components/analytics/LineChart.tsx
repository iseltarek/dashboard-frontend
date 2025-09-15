import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "../cards/Card";

interface LineChartProps {
  name: string;
  data: { day: string; events: number }[];
}

export default function LineChart({ name, data }: LineChartProps) {
  const cardShadow = useColorModeValue("0px 7px 20px rgba(38, 38, 38, 0.1)", "unset");

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }} minH="365px" pe="20px" boxShadow={cardShadow}>
      <Box mb={6}>
        <Text fontWeight="700" color="#28B16D" fontSize={{ lg: "md", xl: "lg", "2xl": "lg", sm: "sm", md: "md" }} textAlign="left" alignSelf="start">
          {name}
        </Text>
        <Text fontSize="sm" color="#28B16D" textAlign="left" alignSelf="start">
          +2.45%
        </Text>
      </Box>
      <Box h="300px" w="100%">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9CA3AF" }} tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9CA3AF" }} domain={[0, 70]} ticks={[0, 20, 40, 60, 80, 100]} />
            <Area type="monotone" dataKey="events" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorEvents)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
