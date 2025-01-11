import React from "react";
import { Box, Typography, Collapse } from "@mui/material";

interface RequestRemarksProps {
  remarks: string;
  isRemarksExpanded: boolean;
  isDarkTheme: boolean;
}

export const RequestRemarks: React.FC<RequestRemarksProps> = ({
  remarks,
  isRemarksExpanded,
  isDarkTheme,
}) => {
  return (
    <Collapse in={isRemarksExpanded} timeout="auto" unmountOnExit>
      <Box
        sx={{
          padding: 2,
          backgroundColor: isDarkTheme ? "#374151" : "#f3f4f6",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
        >
          <strong>Remarks:</strong> {remarks}
        </Typography>
      </Box>
    </Collapse>
  );
};
