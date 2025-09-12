import { useStyleConfig, chakra, forwardRef, useColorModeValue } from "@chakra-ui/react";
import { CustomCardProps } from "../../theme/theme";

const CustomCard = forwardRef<CustomCardProps, "div">((props, ref) => {
	const cardShadow = useColorModeValue("0px 7px 20px rgba(38, 38, 38, 0.1)", "unset");

	const { size, variant, ...rest } = props;
	const styles = useStyleConfig("Card", { size, variant, cardShadow });

	return <chakra.div ref={ref} __css={styles} {...rest} />;
});

export default CustomCard;
