"use client";

import { Box, Typography, Grid, IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { useTheme } from "next-themes";

interface DetailItemProps {
  label: string;
  value: string | number;
  onCopy?: () => void;
}

const DetailItem = ({ label, value, onCopy }: DetailItemProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: isDarkTheme ? "#b3b3b3" : "#666666" }}
        >
          {label}
        </Typography>
        {onCopy && (
          <Tooltip title={`Copy ${label}`}>
            <IconButton size="small" onClick={onCopy}>
              <ContentCopy
                fontSize="small"
                sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
              />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Typography sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}>
        {value || "N/A"}
      </Typography>
    </Box>
  );
};

interface RequestDetailsSectionProps {
  title: string;
  details: Array<{
    label: string;
    value: string | number;
    copyable?: boolean;
  }>;
  onCopyItem: (label: string, value: string | number) => void;
}

export const RequestDetailsSection = ({
  title,
  details,
  onCopyItem,
}: RequestDetailsSectionProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 2,
          bgcolor: isDarkTheme ? "#374151" : "#f3f4f6",
        }}
      >
        <Grid container spacing={2}>
          {details.map(({ label, value, copyable }) => (
            <Grid item xs={12} sm={6} key={label}>
              <DetailItem
                label={label}
                value={value}
                onCopy={copyable ? () => onCopyItem(label, value) : undefined}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
