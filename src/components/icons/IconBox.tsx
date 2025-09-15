import { BoxProps, Flex } from "@chakra-ui/react";
import { JSX } from "react";

interface IconBoxProps extends BoxProps {
  icon: JSX.Element;
}

export default function IconBox({ icon, ...rest }: IconBoxProps) {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} borderRadius={"50%"} {...rest}>
      {icon}
    </Flex>
  );
}
