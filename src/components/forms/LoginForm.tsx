import { Button, Checkbox, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text, FormErrorMessage, Box } from "@chakra-ui/react";
import { LoginFormInputs, loginSchema } from "../../utils/types/LoginFormSchema";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { RiEyeCloseLine } from "react-icons/ri";
import { ElementType, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginForm() {
	const { login } = useAuth();
	const [show, setShow] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const loginAdmin = async (data: LoginFormInputs) => {
		setServerError(null);
		const result = await login(data.email, data.password);
		if (!result.success) {
			setServerError(result.message || "Invalid credentials");
		}
	};

	return (
		<form onSubmit={handleSubmit(loginAdmin)}>
			<FormControl isInvalid={!!errors.email} mb="6">
				<FormLabel fontSize="md" fontWeight="500" color="brand.500">
					Email
				</FormLabel>
				<Input h="50" type="email" variant="auth" fontSize="md" placeholder="mail@simmmple.com" fontWeight="500" size="md" {...register("email")} />
				<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={!!errors.password} mb="5">
				<FormLabel fontSize="md" fontWeight="500" color="brand.500">
					Password
				</FormLabel>
				<InputGroup size="md" alignItems="center">
					<Input alignItems="center" h="50" fontSize="md" type={show ? "text" : "password"} placeholder="Min. 8 characters" size="md" variant="auth" {...register("password")} />
					<InputRightElement display="flex" alignItems="center" mt="12px" mr="5px" fontSize="md">
						<Icon color="gray.400" _hover={{ cursor: "pointer" }} as={show ? (RiEyeCloseLine as ElementType) : (MdOutlineRemoveRedEye as ElementType)} onClick={() => setShow(!show)} />
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
			</FormControl>

			{serverError && (
				<Text color="red.500" fontSize="1.4rem" mb="4" textAlign="center">
					{serverError}
				</Text>
			)}

			<Flex marginTop="1rem" justifyContent="space-between" align="center" mb="24px">
				<FormControl display="flex" alignItems="center">
					<Checkbox id="remember-login" colorScheme="brandScheme" me="10px" />
					<FormLabel htmlFor="remember-login" mb="0" fontWeight="normal" color="brand.500" fontSize="md">
						Keep me logged in
					</FormLabel>
				</FormControl>
				<NavLink to="/auth/forgot-password">
					<Text color="brand.500" fontSize="md" w="124px" fontWeight="500">
						Forgot password?
					</Text>
				</NavLink>
			</Flex>
			<Box mb="10px">
				You Don't Have an Account{" "}
				<NavLink to="/signup" color="blue">
					SignUp
				</NavLink>
			</Box>
			<Button type="submit" isLoading={isSubmitting} fontSize="md" variant="brand" fontWeight="500" w="100%" h="50">
				Log In
			</Button>
		</form>
	);
}
