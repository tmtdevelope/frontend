"use client";

import { TablePagination, useTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";

interface CustomTablePaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CustomTablePagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: CustomTablePaginationProps) {
  const { theme } = useNextTheme();
  const muiTheme = useTheme();

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      sx={{
        bgcolor: theme === "dark" ? "#1f2937" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#000000",
        borderTop: "1px solid",
        borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
        py: 2,
        px: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .MuiTablePagination-toolbar": {
          padding: 0,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        },
        "& .MuiTablePagination-selectLabel": {
          color: theme === "dark" ? "#9ca3af" : "#6b7280",
          marginRight: 2,
        },
        "& .MuiTablePagination-displayedRows": {
          color: theme === "dark" ? "#ffffff" : "#000000",
          marginLeft: "auto",
        },
        "& .MuiSelect-select, & .MuiInputBase-root": {
          color: theme === "dark" ? "#ffffff" : "#000000",
          backgroundColor: theme === "dark" ? "#374151" : "#f3f4f6",
          borderRadius: 1,
        },
        "& .MuiSvgIcon-root": {
          color: theme === "dark" ? "#3b82f6" : "#2563eb",
        },
        "& .MuiButtonBase-root": {
          color: theme === "dark" ? "#3b82f6" : "#2563eb",
          "&:hover": {
            backgroundColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
          },
          "&.Mui-disabled": {
            color: theme === "dark" ? "#6b7280" : "#9ca3af",
          },
        },
      }}
    />
  );
}
