"use client";
import { TextField, Box, InputAdornment } from "@mui/material";
import { useFormTheme } from "../../styles/theme";
import { SearchIcon } from "lucide-react";

interface UserFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const UserFilters = ({
  searchTerm,
  onSearchChange,
}: UserFiltersProps) => {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        variant="outlined"
        inputProps={{ "aria-label": "search users" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {" "}
              <SearchIcon
                style={{ color: isDarkTheme ? "#b3b3b3" : "#666666" }}
              />
            </InputAdornment>
          ),
          ...inputProps,
        }}
        aria-label="search users"
        InputLabelProps={labelProps}
        sx={getInputStyles()}
      />
    </Box>
  );
};
