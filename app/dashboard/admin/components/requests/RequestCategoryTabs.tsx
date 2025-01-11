"use client";

import { Tabs, Tab, Box, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { STATUS_REQUEST } from "../../constants/category";
import { useFormTheme } from "../../styles/theme";

interface RequestCategoryTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  counts: Record<string, number>;
}

const getStatusStyle = (status: string, isDarkTheme: boolean) => {
  const lightColors = {
    PENDING: { color: "#fb8c00" },
    CONFIRMED: { color: "#4caf50" },
    CONFIRMED_ADJUSTED: { color: "#00bcd4" },
    CANCELLED: { color: "#f44336" },
    DEFAULT: { color: "#9e9e9e" },
  };

  const darkColors = {
    PENDING: { color: "#ffa726" },
    CONFIRMED: { color: "#81c784" },
    CONFIRMED_ADJUSTED: { color: "#4dd0e1" },
    CANCELLED: { color: "#e57373" },
    DEFAULT: { color: "#bdbdbd" },
  };

  const colors = isDarkTheme ? darkColors : lightColors;

  switch (status) {
    case STATUS_REQUEST.PENDING:
      return { color: colors.PENDING.color };
    case STATUS_REQUEST.CONFIRMED:
      return { color: colors.CONFIRMED.color };
    case STATUS_REQUEST.CONFIRMED_ADJUSTED:
      return { color: colors.CONFIRMED_ADJUSTED.color };
    case STATUS_REQUEST.CANCELLED:
      return { color: colors.CANCELLED.color };
    default:
      return { color: colors.DEFAULT.color };
  }
};

const getAllTabStyle = (isDarkTheme: boolean) => {
  return {
    color: isDarkTheme ? "#ffffff" : "#000000",
  };
};

export const RequestCategoryTabs = ({
  value,
  onChange,
  counts,
}: RequestCategoryTabsProps) => {
  const { isDarkTheme } = useFormTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const statuses = Object.values(STATUS_REQUEST);
  const totalCount = useMemo(
    () => Object.values(counts).reduce((a, b) => a + b, 0),
    [counts],
  );

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
        aria-label="Request statuses"
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
        <Tab
          label={`All (${totalCount})`}
          aria-controls="tab-panel-all"
          style={getAllTabStyle(isDarkTheme)}
        />
        {statuses.map((status) => (
          <Tab
            key={status}
            label={`${status.toUpperCase()} (${counts[status] || 0})`}
            aria-controls={`tab-panel-${status}`}
            style={{
              ...getStatusStyle(status, isDarkTheme),
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
