"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Link,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { LoginFormValues } from "./types";
import { useRouter } from "next/navigation";
import { useFormTheme } from "@/app/dashboard/forms/utils/theme";

// Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";

  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login attempt with:", data);
    if (data) {
      route.push("/dashboard/quote");
    }
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { xs: "90%", sm: "60%", md: "50%", lg: "40%" },
        paddingY: "20px",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: isDarkTheme ? "#1f2937" : "#fff",
          padding: 4,
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={300}
            loading="lazy"
            height={200}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            marginTop: 2,
            marginBottom: 4,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: primaryColor,
            
          }}
        >
          Sign in with your Email Address
        </Typography>

        {/* Email Input */}
        <TextField
          margin="normal"
          fullWidth
          label="Email Address"
          autoComplete="email"
          autoFocus
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
        />
        {/* Password Input */}
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
        />

        {/* Sign In Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: "0.875rem", md: "1rem" },
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Sign In
        </Button>

        {/* Forgot Password Link */}
        <Box sx={{ textAlign: "right" }}>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#1976d2",
              textDecoration: "none",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              transition: "all 0.2s ease-in-out",
            }}
          >
            Forgot password?
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
