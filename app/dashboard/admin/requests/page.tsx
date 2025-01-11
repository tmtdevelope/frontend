"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Requests from "../components/requests/RequestSection";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { updateRequestStatus } from "@/app/redux/actions/requests/requestsUpdate/updateRequestStatus";
import { fetchAllData } from "@/app/redux/actions/requests/fetchAllData";
import withAuth from "../withAuth";
import { EditForm } from "../components/requests/EditForm";
import { Snackbar, Alert } from "@mui/material";

const RequestsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );

  const { data, loading, error } = useSelector(
    (state: RootState) => state.requests,
  );

  const handleEdit = (request: any) => {
    setSelectedRequest(request);
    setIsEditFormOpen(true);
  };

  const handleUpdateStatus = async (
    requestId: string,
    newStatus: string,
    category: string,
    adjustments?: string,
    cancellationReason?: string,
  ) => {
    try {
      await dispatch(
        updateRequestStatus({
          category,
          requestId,
          newStatus,
          adjustments,
          cancellationReason,
        }),
      ).then(() => {
        dispatch(fetchAllData());
        setSnackbarMessage("Request status updated successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      });
    } catch (error) {
      console.error("Failed to update request status:", error);
      setSnackbarMessage("Failed to update request status.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSubmitEdit = async (updatedData: any) => {
    try {
      await dispatch(updateRequestStatus(updatedData)).then(() => {
        dispatch(fetchAllData());
        setSnackbarMessage("Request updated successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      });
      setIsEditFormOpen(false);
    } catch (error) {
      console.error("Failed to update request:", error);
      setSnackbarMessage("Failed to update request.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Requests
        requests={data}
        error={error}
        loading={loading}
        onUpdateStatus={handleUpdateStatus}
        onEdit={handleEdit}
      />
      <EditForm
        open={isEditFormOpen}
        onClose={() => setIsEditFormOpen(false)}
        onSubmit={handleSubmitEdit}
        initialData={selectedRequest}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default withAuth(RequestsPage);
