 "use client";
 import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";  
import { CircularProgress, Box } from "@mui/material";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.userDetails); // الحصول على بيانات المستخدم من Redux

   useEffect(() => {
    if (!user) {
      router.push("/auth/login");  
      return;
    }

    // توجيه المستخدم بناءً على دوره
    switch (user.role) {
      case "admin":
        router.push("/dashboard/admin");
        break;
      case "manager":
        router.push("/dashboard/manager");
        break;
      case "user":
        router.push("/dashboard/user");
        break;
      case "special":
        router.push("/dashboard/special");
        break;
      case "driver":
        router.push("/dashboard/driver");
        break;
      default:
        router.push("/");  
    }
  }, [user, router]);

  // عرض رسالة تحميل أثناء التوجيه
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}