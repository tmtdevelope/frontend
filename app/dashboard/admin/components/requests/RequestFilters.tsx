"use client";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useFormTheme } from "../../styles/theme";
import { baseMenuItemStyles, baseSelectStyles } from "../../styles/styles.js";
import { serviceTypeItems, tripTypeItems } from "../../constants/menuItems";

interface RequestFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  tripType: string;
  onTripTypeChange: (value: string) => void;
  serviceType: string;
  onServiceTypeChange: (value: string) => void;
}

export const RequestFilters = ({
  searchTerm,
  onSearchChange,
  tripType,
  onTripTypeChange,
  serviceType,
  onServiceTypeChange,
}: RequestFiltersProps) => {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        mb: 3,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by patient name, ID, or phone..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                style={{ color: isDarkTheme ? "#b3b3b3" : "#666666" }}
              />
            </InputAdornment>
          ),
          ...inputProps,
        }}
        InputLabelProps={labelProps}
        sx={getInputStyles()}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },

          gap: 2,
          width: "100%",
        }}
      >
        <FormControl sx={{ minWidth: 200, ...getInputStyles() }}>
          <InputLabel {...labelProps}>Trip Type</InputLabel>
          <Select
            value={tripType}
            label="Trip Type"
            onChange={(e) => onTripTypeChange(e.target.value)}
            sx={baseSelectStyles(isDarkTheme)}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                },
              },
            }}
          >
            {tripTypeItems.map((item) => (
              <MenuItem
                sx={{
                  ...baseMenuItemStyles(isDarkTheme),
                  backgroundColor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                }}
                key={item.value}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200, ...getInputStyles() }}>
          <InputLabel {...labelProps}>Service Type</InputLabel>
          <Select
            value={serviceType}
            label="Service Type"
            onChange={(e) => onServiceTypeChange(e.target.value)}
            sx={baseSelectStyles(isDarkTheme)}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                },
              },
            }}
          >
            {serviceTypeItems.map((item) => (
              <MenuItem
                sx={{
                  ...baseMenuItemStyles(isDarkTheme),
                  backgroundColor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                }}
                key={item.value}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
