"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Paper,
  Snackbar,
  Button,
  DialogActions,
} from "@mui/material";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/store/store";
import { getRegister } from "@/app/redux/actions/users/getRegister";
import { UserListHeader } from "../components/users/UserListHeader";
import { UserCategoryTabs } from "../components/users/UserCategoryTabs";
import { UserFilters } from "../components/users/UserFilters";
import { UserTable } from "../components/users/UserTable";
import { UserDetails } from "../components/users/UserDetails";
import { CustomTablePagination } from "../components/TablePagination";
import { User } from "../types/user";
import { updateUserAction } from "@/app/redux/actions/users/updateUserAction";
import { EditUserForm } from "../components/users/UserForm";
import { deleteUserAction } from "@/app/redux/actions/users/deleteUserAction";
import { CustomPopup } from "../components/users/CustomPopup";
import withAuth from "../withAuth";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedUserForDetails, setSelectedUserForDetails] =
    useState<User | null>(null);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState<User | null>(
    null,
  );
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, register } = useSelector(
    (state: any) => state.getRegister,
  );
  const users = register?.data || [];

  const statuses = ["all", "active", "pending", "rejected"];

  const getStatusCounts = () => {
    return statuses.reduce(
      (acc, status) => {
        acc[status] =
          status === "all"
            ? users.length
            : users.filter((user: User) => user.status === status).length;
        return acc;
      },
      {} as Record<string, number>,
    );
  };

  const filteredUsers = users.filter((user: User) => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedTab === 0) {
      return matchesSearch;
    } else {
      const status = statuses[selectedTab];
      return matchesSearch && user.status === status;
    }
  });

  // استخدم useCallback لتثبيت fetchData
  const fetchData = useCallback(async () => {
    try {
      await dispatch(getRegister()).unwrap();
    } catch (err) {
      setSnackbar({ open: true, message: "Failed to load data" });
    }
  }, [dispatch]);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnackbar({ open: true, message: `${label} copied to clipboard` });
    } catch (err) {
      console.error("Failed to copy:", err);
      setSnackbar({ open: true, message: "Failed to copy to clipboard" });
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (user: User) => {
    setSelectedUserForEdit(user);
    setIsEditFormOpen(true);
  };

  const handleSave = async (data: {
    id: string;
    status: string;
    role: string;
  }) => {
    try {
      await dispatch(
        updateUserAction({
          _id: data.id,
          status: data.status,
          role: data.role,
        }),
      ).unwrap();
      fetchData();
      setSnackbar({ open: true, message: "User updated successfully" });
      setIsEditFormOpen(false);
    } catch (err: any) {
      console.error("Error in handleSave:", err);
      setSnackbar({
        open: true,
        message: err.payload || "Failed to update user",
      });
    }
  };

  const handleDelete = async (user: User) => {
    setUserToDelete(user);
    setDeletePopupOpen(true);
  };

  const confirmDelete = async () => {
    if (!userToDelete?._id) {
      setSnackbar({ open: true, message: "User ID is missing" });
      return;
    }

    try {
      await dispatch(deleteUserAction(userToDelete._id)).unwrap();
      fetchData();
      setSnackbar({ open: true, message: "User deleted successfully" });
    } catch (err) {
      setSnackbar({ open: true, message: "Failed to delete user" });
    } finally {
      setDeletePopupOpen(false);
      setUserToDelete(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);

  const colors = {
    light: {
      background: "#ffffff",
      text: "#000000",
      hover: "#f5f5f5",
    },
    dark: {
      background: "#121212",
      text: "#ffffff",
      hover: "#1e1e1e",
    },
  };

  const currentColors = theme === "dark" ? colors.dark : colors.light;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <UserListHeader onRefresh={() => dispatch(getRegister())} />

      <UserCategoryTabs
        value={selectedTab}
        onChange={(_, newValue: number) => setSelectedTab(newValue)}
        counts={getStatusCounts()}
      />

      <UserFilters searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box sx={{ my: 2 }}>
          <Alert severity="error">Failed to load data: {error}</Alert>
        </Box>
      )}

      {!loading && !error && (
        <Paper
          elevation={2}
          sx={{
            overflowX: "auto",
            bgcolor: currentColors.background,
          }}
        >
          <UserTable
            users={filteredUsers.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage,
            )}
            onEdit={handleEdit}
            onDelete={handleDelete}
            colors={currentColors}
          />

          <CustomTablePagination
            count={filteredUsers.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      {selectedUserForDetails && (
        <UserDetails
          user={selectedUserForDetails}
          open={isDetailsOpen}
          onClose={() => {
            setIsDetailsOpen(false);
            setSelectedUserForDetails(null);
          }}
          onCopy={handleCopy}
        />
      )}

      {selectedUserForEdit && (
        <EditUserForm
          user={selectedUserForEdit}
          open={isEditFormOpen}
          onClose={() => setIsEditFormOpen(false)}
          onSave={handleSave}
        />
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />

      <CustomPopup
        open={deletePopupOpen}
        onClose={() => setDeletePopupOpen(false)}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={confirmDelete}
        confirmText="Delete"
        cancelText="Cancel"
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Container>
  );
};

export default withAuth(Users);
