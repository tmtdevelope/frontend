"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Chip,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import { Edit } from "lucide-react";
import { Delete } from "@mui/icons-material";
import { User } from "../../types/user";
import { UserTableHeader } from "./UserTableHeader";
import { useTheme } from "next-themes";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  colors: {
    background: string;
    text: string;
  };
}

export function UserTable({ users, onEdit, onDelete, colors }: UserTableProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const getStatusColor = (status: string) => {
    const colors: Record<string, "success" | "warning" | "error"> = {
      active: "success",
      pending: "warning",
      rejected: "error",
    };
    return colors[status.toLowerCase()] || "default";
  };

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <UserTableHeader />
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{
                "&:hover": {
                  backgroundColor: isDarkTheme ? "#374151" : "#f3f4f6",
                },
                backgroundColor: isDarkTheme ? "#1f2937" : "#ffffff",
              }}
            >
              {/* User info */}
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar>{user.firstName[0]}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" color={colors.text}>
                      {`${user.firstName} ${user.lastName}`}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              {/* Email */}
              <TableCell>
                <Typography variant="body2" color={colors.text}>
                  {user.email}
                </Typography>
              </TableCell>

              {/* Phone */}
              <TableCell>
                <Typography variant="body2" color={colors.text}>
                  {user.phone}
                </Typography>
              </TableCell>

              {/* Job Title */}
              <TableCell>
                <Typography variant="body2" color={colors.text}>
                  {user.jobTitle}
                </Typography>
              </TableCell>

              {/* Organization */}
              <TableCell>
                <Typography variant="body2" color={colors.text}>
                  {user.organizationName}
                </Typography>
              </TableCell>

              {/* Facility Address */}
              <TableCell>
                <Typography variant="body2" color={colors.text}>
                  {user.facilityAddress}
                </Typography>
              </TableCell>

              {/* Status */}
              <TableCell>
                <Chip
                  label={user.status}
                  color={getStatusColor(user.status)}
                  size="small"
                  variant="outlined"
                />
              </TableCell>

              {/* Actions */}
              <TableCell>
                <Box display="flex" gap={1}>
                  {/* أيقونة التعديل */}
                  <Tooltip title="Edit User">
                    <IconButton
                      size="small"
                      onClick={() => onEdit(user)}
                      sx={{
                        color: isDarkTheme ? "#3b82f6" : "#1d4ed8", // لون أزرق
                        "&:hover": {
                          backgroundColor: isDarkTheme
                            ? "rgba(59, 130, 246, 0.1)"
                            : "rgba(29, 78, 216, 0.1)", // لون خلفية عند التحويم
                        },
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>

                  {/* أيقونة الحذف */}
                  <Tooltip title="Delete User">
                    <IconButton
                      size="small"
                      onClick={() => onDelete(user)}
                      sx={{
                        color: isDarkTheme ? "#ef4444" : "#dc2626", // لون أحمر
                        "&:hover": {
                          backgroundColor: isDarkTheme
                            ? "rgba(239, 68, 68, 0.1)"
                            : "rgba(220, 38, 38, 0.1)", // لون خلفية عند التحويم
                        },
                      }}
                    >
                      <Delete className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
