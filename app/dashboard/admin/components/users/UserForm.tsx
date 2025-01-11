"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { baseSelectStyles, baseMenuItemStyles } from "../../styles/styles";
import { useFormTheme } from "@/app/dashboard/forms/utils/theme";
import { schema } from "./validators";
import { User } from "../../types/user";
import { useEffect } from "react";

interface EditUserFormProps {
  user: User;
  open: boolean;
  onClose: () => void;
  onSave: (data: { id: string; status: string; role: string }) => void;
  onDelete?: (userId: string) => void;
}

export function EditUserForm({
  user,
  open,
  onClose,
  onSave,
  onDelete,
}: EditUserFormProps) {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
    defaultValues: user,
  });

  useEffect(() => {
    if (open) {
      reset(user);
    }
  }, [open, user, reset]);

  const onSubmit = (data: User) => {
    onSave({
      id: data._id || "",
      status: data.status,
      role: data.role,
    });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: isDarkTheme ? "#1f2937" : "#fff",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <DialogTitle>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, color: primaryColor }}
        >
          Edit User Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {/* First Name Field */}
          <Grid item xs={12} md={6}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  label="First Name"
                  InputProps={{ ...inputProps, readOnly: true }}
                  InputLabelProps={labelProps}
                  sx={getInputStyles()}
                />
              )}
            />
          </Grid>

          {/* Last Name Field */}
          <Grid item xs={12} md={6}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  InputProps={{ ...inputProps, readOnly: true }}
                  InputLabelProps={labelProps}
                  sx={getInputStyles()}
                />
              )}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} md={6}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  label="Email"
                  InputProps={{ ...inputProps, readOnly: true }}
                  InputLabelProps={labelProps}
                  sx={getInputStyles()}
                />
              )}
            />
          </Grid>

          {/* Status Field */}
          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
              error={!!errors.status}
              sx={getInputStyles()}
            >
              <InputLabel {...labelProps}>Status</InputLabel>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Status"
                    sx={baseSelectStyles(isDarkTheme)}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                        },
                      },
                    }}
                  >
                    {["pending", "active", "rejected"].map((status) => (
                      <MenuItem
                        key={status}
                        value={status}
                        sx={baseMenuItemStyles(isDarkTheme)}
                      >
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.status && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.status.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Role Field */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth error={!!errors.role} sx={getInputStyles()}>
              <InputLabel {...labelProps}>Role</InputLabel>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Role"
                    sx={baseSelectStyles(isDarkTheme)}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                        },
                      },
                    }}
                  >
                    {["admin", "manager", "user", "special", "driver"].map(
                      (role) => (
                        <MenuItem
                          key={role}
                          value={role}
                          sx={baseMenuItemStyles(isDarkTheme)}
                        >
                          {role}
                        </MenuItem>
                      ),
                    )}
                  </Select>
                )}
              />
              {errors.role && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.role.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: isDarkTheme ? "#fff" : "#000" }}>
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
