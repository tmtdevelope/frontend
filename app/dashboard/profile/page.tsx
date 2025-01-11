"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Container,
  Button,
} from "@mui/material";
import { Mail, Phone, Building2, MapPin, Lock } from "lucide-react";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { useRouter } from "next/navigation"; // استيراد useRouter

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organizationName: string;
  facilityAddress: string;
}

export default function ProfilePage() {
  const { theme, resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const { user } = useSelector((state: RootState) => state.userDetails);
  const [userData, setUserData] = useState<UserData>({
    _id: user?._id || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    organizationName: user?.organizationName || "",
    facilityAddress: user?.facilityAddress || "",
  });

  const router = useRouter(); // تهيئة useRouter

  useEffect(() => {
    if (user) {
      setUserData({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        organizationName: user.organizationName,
        facilityAddress: user.facilityAddress,
      });
    }
  }, [user]);

  const handleChangePassword = () => {
     router.push("/auth/change-password");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 18 }}>
      <Grid container spacing={4}>
        {/* Profile Info Card */}
        <Grid item xs={12}>
          <Card
            sx={{
              bgcolor: isDarkTheme ? "#374151" : "#ffffff",
              boxShadow: 3,
              borderRadius: 2,
              background: isDarkTheme
                ? "linear-gradient(145deg, #1f2937, #374151)"
                : "linear-gradient(145deg, #f9fafb, #ffffff)",
            }}
          >
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: isDarkTheme ? "#1f2937" : "#f3f4f6",
                      fontSize: 40,
                      fontWeight: "bold",
                    }}
                  >
                    {userData.firstName[0]}
                    {userData.lastName[0]}
                  </Avatar>
                </Grid>
                <Grid item xs={12} sm>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ mb: 1, color: isDarkTheme ? "#ffffff" : "#000000" }}
                    >
                      {userData.firstName} {userData.lastName}
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<Lock size={20} />}
                      onClick={handleChangePassword} // استخدام الدالة الجديدة
                      sx={{
                        bgcolor: isDarkTheme ? "#3b82f6" : "#1d4ed8",
                        "&:hover": {
                          bgcolor: isDarkTheme ? "#2563eb" : "#1e40af",
                        },
                      }}
                    >
                      Change Password
                    </Button>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Mail
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                          size={20}
                        />
                        <Typography
                          variant="body1"
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                        >
                          {userData.email}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Phone
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                          size={20}
                        />
                        <Typography
                          variant="body1"
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                        >
                          {userData.phone}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Building2
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                          size={20}
                        />
                        <Typography
                          variant="body1"
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                        >
                          {userData.organizationName}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <MapPin
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                          size={20}
                        />
                        <Typography
                          variant="body1"
                          color={isDarkTheme ? "#ffffff" : "#000000"}
                        >
                          {userData.facilityAddress}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Coming Soon Section */}
        <Grid item xs={12}>
          <Card
            sx={{
              bgcolor: isDarkTheme ? "#374151" : "#ffffff",
              boxShadow: 3,
              borderRadius: 2,
              textAlign: "center",
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            >
              Everything Is Coming Soon
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: isDarkTheme ? "#d1d5db" : "#4b5563", mt: 2 }}
            >
              We&apos;re working hard to bring you new features. Stay tuned!
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
