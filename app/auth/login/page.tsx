"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box, Link, Container, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { LoginFormValues } from "./types";
import { useRouter } from "next/navigation";

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const { theme } = useTheme();
	const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login attempt with:", data);
	if(data){
		route.push('/dashboard')
	}
  };

  // Shared styles
  const getInputStyles = () => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: theme === "dark" ? "#90caf9" : "#1976d2",
      },
      backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "transparent",
    },
  });

  const inputProps = {
    style: {
      color: theme === "dark" ? "#ffffff" : "#000000",
      fontSize: "1rem",
    },
  };

  const labelProps = {
    style: {
      color: theme === "dark" ? "#b3b3b3" : "#666666",
    },
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
        backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#ffffff",
        borderRadius: "16px",
        boxShadow:
          theme === "dark"
            ? "0px 4px 20px rgba(0, 0, 0, 0.5)"
            : "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src={logo} alt="Logo" width={300} height={200} />
      </Box>

      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          marginBottom: 4,
          fontSize: { xs: "1rem", md: "1.25rem"},
          color: theme === "dark" ? "#ffffff" : "#000000",
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
          color: theme === "dark" ? "#000000" : "#ffffff",
          "&:hover": {
            backgroundColor: "#1565c0",
            transform: "translateY(-1px)",
          },
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
            "&:hover": {
              color: "#1565c0",
              textDecoration: "underline",
            },
          }}
        >
          Forgot password?
        </Link>
      </Box>
    </Container>
  );
}
