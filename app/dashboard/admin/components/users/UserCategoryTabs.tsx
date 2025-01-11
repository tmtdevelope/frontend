"use client";

import { Tabs, Tab, Box, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { useFormTheme } from "../../styles/theme";

interface UserCategoryTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  counts: Record<string, number>;
}

const getStatusStyle = (status: string, isDarkTheme: boolean) => {
  const colors = {
    light: {
      pending: "#fb8c00",
      active: "#4caf50",
      inactive: "#f44336",
      DEFAULT: "#9e9e9e",
    },
    dark: {
      pending: "#ffa726",
      active: "#81c784",
      inactive: "#e57373",
      DEFAULT: "#bdbdbd",
    },
  };

  const themeColors = isDarkTheme ? colors.dark : colors.light;
  const color =
    themeColors[status as keyof typeof themeColors] || themeColors.DEFAULT;
  return { color };
};

// تنسيق تبويب "All"
const getAllTabStyle = (isDarkTheme: boolean) => ({
  color: isDarkTheme ? "#ffffff" : "#000000",
});

export const UserCategoryTabs = ({
  value,
  onChange,
  counts,
}: UserCategoryTabsProps) => {
  const { isDarkTheme } = useFormTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const statuses = ["all", "active", "pending", "rejected"];

  const totalCount = useMemo(() => counts["all"], [counts]);

  const getCountForStatus = (status: string) => counts[status] || 0;

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: isDarkTheme
          ? "rgba(255, 255, 255, 0.23)"
          : "rgba(0, 0, 0, 0.23)",
        mb: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="User categories"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: isDarkTheme ? "#90caf9" : "#1976d2",
          },
          "& .MuiTab-root": {
            minWidth: isSmallScreen ? "auto" : 100,
            fontSize: isSmallScreen ? "0.8rem" : "1rem",
            padding: isSmallScreen ? "6px 12px" : "12px 16px",
          },
        }}
      >
        {/* تبويب "All" */}
        <Tab
          label={`All (${totalCount})`}
          aria-controls="tab-panel-all"
          sx={getAllTabStyle(isDarkTheme)}
        />
        {/* تبويبات الحالات */}
        {statuses.slice(1).map((status) => (
          <Tab
            key={status}
            label={`${status.toUpperCase()} (${getCountForStatus(status)})`}
            aria-controls={`tab-panel-${status}`}
            sx={getStatusStyle(status, isDarkTheme)}
          />
        ))}
      </Tabs>
    </Box>
  );
};
