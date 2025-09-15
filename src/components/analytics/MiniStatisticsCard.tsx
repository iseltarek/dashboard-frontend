import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import Card from "../cards/Card";
import { JSX } from "react";

interface MiniStatisticsCardProps {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  growth?: string | number;
  value: string | number;
  color: string;
}

export default function MiniStatisticsCard({ startContent, endContent, name, growth, value, color }: MiniStatisticsCardProps) {
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py="15px">
      <Flex my="auto" h="100%" align={{ base: "start", xl: "start" }} justify={{ base: "start", xl: "start" }}>
        {startContent}

        <Stat my="auto" ms={startContent ? "5px" : "0px"} pl={8}>
          <StatLabel
            lineHeight="80%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
              md: "sm",
              lg: "md",
              xl: "md",
              "2xl": "lg",
            }}
            textAlign="start"
          >
            {name}
          </StatLabel>
          <StatNumber
            color={color}
            mt="2px"
            fontSize={{
              base: "2xl",
              md: "md",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            textAlign="start"
          >
            {value}
          </StatNumber>
        </Stat>
      </Flex>
    </Card>
  );
}
