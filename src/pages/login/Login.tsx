import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import LoginForm from "../../components/forms/LoginForm";
import Card from "../../components/cards/Card";

export default function Login() {
	const textColor = "brand.500";
	const textColorSecondary = "gray.400";

	return (
		<Flex h="100vh" w="100%" justify="center" align="center">
			<Card
				position="relative"
				h="auto"
				w="100%"
				align-self="center"
				display="flex"
				maxW={{ base: "100%", md: "100%", xl: "30%", lg: "30%" }}
				mx={{ base: "auto", lg: "0px" }}
				me="auto"
				alignItems="center"
				justifyContent="center"
				mb={{ base: "30px", md: "60px" }}
				px={{ base: "25px", md: "0px" }}
				padding="20px"
				flexDirection="column">
				<Box me="auto" display="flex" alignItems="start" flexDirection="column">
					<Heading color={textColor} fontSize="36px" mb="10px">
						Log In
					</Heading>
					<Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
						Enter your email and password to sign in!
					</Text>
				</Box>
				<Flex
					zIndex="2"
					direction="column"
					w={{ base: "100%", md: "420px" }}
					maxW="100%"
					background="transparent"
					borderRadius="15px"
					mx={{ base: "auto", lg: "unset" }}
					me="auto"
					mb={{ base: "20px", md: "auto" }}>
					<LoginForm></LoginForm>
				</Flex>
			</Card>
		</Flex>
	);
}
