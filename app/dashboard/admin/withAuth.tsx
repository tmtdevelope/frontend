"use client";

import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { ROLES_USER } from "@/app/dashboard/admin/constants/category";
import { Box, CircularProgress } from "@mui/material";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const WithAuth = (props: P  ) => {
    const router = useRouter();
    const { user, loading } = useSelector(
      (state: RootState) => state.userDetails,
    );
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
      const delay = setTimeout(() => {
        if (!loading) {
          if (!user || user.role !== ROLES_USER.ADMIN) {
            router.push("/");
          } else {
            setIsCheckingAuth(false);
          }
        }
      }, 500);

      return () => clearTimeout(delay);
    }, [user, loading, router]);

    if (loading || isCheckingAuth) {
       return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
            }}
          >
            <CircularProgress />
          </Box>
        </Box>
      );
    }

    if (user && user.role === ROLES_USER.ADMIN) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return WithAuth;
};

export default withAuth;
