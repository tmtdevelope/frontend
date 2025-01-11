import { Box, Typography, Button } from "@mui/material";
import { RefreshCw } from "lucide-react";

export const RequestListHeader = ({ onRefresh }: { onRefresh: () => void }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        Transportation Requests
      </Typography>
      <Button
        onClick={onRefresh}
        variant="contained"
        color="primary"
        startIcon={<RefreshCw className="icon-class" />}
        sx={{
          textTransform: "none",
          alignSelf: { xs: "center", sm: "auto" },
        }}
      >
        Refresh
      </Button>
    </Box>
  );
};
