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
import { useRouter } from "next/navigation";
import { useFormTheme } from "@/app/dashboard/forms/utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/app/redux/actions/users/logn";
import { RootState } from "@/app/redux/store/store";
import { AppDispatch } from "@/app/redux/store/store";
import { useEffect, useState } from "react";
import { ROLES_USER } from "@/app/dashboard/admin/constants/category";
import { getUserDetailsAction } from "@/app/redux/actions/users/getUserDetailsAction";
import { IMAGES } from "@/app/utils/images";

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

// Constants for styles
const PRIMARY_COLORS = {
  dark: "#2563eb",
  light: "#1E40AF",
};

export default function LoginForm() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? PRIMARY_COLORS.dark : PRIMARY_COLORS.light;
  const { getInputStyles, inputProps, labelProps } = useFormTheme();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading,  user } = useSelector(
    (state: RootState) => state.userDetails,
  );
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Redirect based on user role
  useEffect(() => {
    if (user) {
       switch (user.role) {
        case ROLES_USER.ADMIN:
          router.push("/dashboard/admin/requests");
          break;
        case ROLES_USER.MANAGER:
          router.push("/dashboard/quote");
          break;
        case ROLES_USER.USER:
        case ROLES_USER.SPECIAL:
          router.push("/dashboard/quote");
          break;
        case ROLES_USER.DRIVER:
          router.push("/dashboard/driver");
          break;
        default:
          router.push("/");
      }
    }
  }, [user, router]);

  // Handle form submission
  interface LoginFormInputs {
    email: string;
    password: string;
  }

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await dispatch(loginAction(data));
      if (response.payload && (response.payload as { data: string }).data) {
        localStorage.setItem(
          "token",
          (response.payload as { data: string }).data,
        );
        localStorage.setItem("token", response.payload.data);
        await dispatch(getUserDetailsAction());
      } else {
        setLoginError("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setLoginError("An error occurred. Please try again.");
    }
  };

  return (
    <Container
      component="form"
      autoComplete="on"
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={IMAGES.light}
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
          disabled={loading}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          autoComplete="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
          disabled={loading}
        />

        {loginError && (
          <Typography
            variant="body2"
            sx={{ color: "error.main", mt: 2, textAlign: "center" }}
          >
            {loginError}
          </Typography>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{
            mt: 3,
            mb: 2,
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: "0.875rem", md: "1rem" },
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <Box sx={{ textAlign: "right" }}>
          <Link
            href="/auth/forgot-password"
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

        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              color: isDarkTheme ? "#cbd5e1" : "#475569",
            }}
          >
            Don&apos;t have an account?
            <Link
              href="/auth/register"
              sx={{
                color: primaryColor,
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                  color: isDarkTheme ? "#3b82f6" : "#1d4ed8",
                },
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
