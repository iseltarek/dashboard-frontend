import { Button, Checkbox, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text, FormErrorMessage, Box } from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { RiEyeCloseLine } from "react-icons/ri";
import { ElementType, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignupFormInput, SignupSchema } from "../../utils/types/SignupFormSchema";

export default function SignupForm() {
	const { login } = useAuth();
	const [show, setShow] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupFormInput>({
		resolver: zodResolver(SignupSchema),
	});

	const signupUser = async (data: SignupFormInput) => {
		setServerError(null);
		const result = await login(data.email, data.password);
		if (!result.success) {
			setServerError(result.message || "Invalid credentials");
		}
	};

	return (
		<form onSubmit={handleSubmit(signupUser)}>
			<FormControl isInvalid={!!errors.email} mb="6">
				<FormLabel fontSize="md" fontWeight="500" color="brand.500">
					Full Name
				</FormLabel>
				<Input h="50" type="text" variant="auth" fontSize="md" placeholder="mark js" fontWeight="500" size="md" {...register("email")} />
				<FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
			</FormControl>

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
			<FormControl isInvalid={!!errors.password} mb="5">
				<FormLabel fontSize="md" fontWeight="500" color="brand.500">
					Confirm Password
				</FormLabel>
				<InputGroup size="md" alignItems="center">
					<Input alignItems="center" h="50" fontSize="md" type={show ? "text" : "password"} placeholder="Min. 8 characters" size="md" variant="auth" {...register("confirmPassword")} />
					<InputRightElement display="flex" alignItems="center" mt="12px" mr="5px" fontSize="md">
						<Icon color="gray.400" _hover={{ cursor: "pointer" }} as={show ? (RiEyeCloseLine as ElementType) : (MdOutlineRemoveRedEye as ElementType)} onClick={() => setShow(!show)} />
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
			</FormControl>

			{serverError && (
				<Text color="red.500" fontSize="1.4rem" mb="4" textAlign="center">
					{serverError}
				</Text>
			)}

			<Box mb="10px">
				ALready Have an Account <NavLink to="/login">Login</NavLink>
			</Box>
			<Button type="submit" isLoading={isSubmitting} fontSize="md" variant="brand" fontWeight="500" w="100%" h="50">
				Log In
			</Button>
		</form>
	);
}
