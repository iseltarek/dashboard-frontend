import { z } from "zod";
export const SignupSchema = z
	.object({
		fullName: z.string(),
		email: z.string().email("Invalid email"),
		phoneNumber: z
			.string()
			.min(6, "Phone number is too short")
			.regex(/^[0-9]+$/, "Only numbers are allowed"),
		password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
		confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters long" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type SignupFormInput = z.infer<typeof SignupSchema>;
