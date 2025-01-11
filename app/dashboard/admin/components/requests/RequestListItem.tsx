"use client";
import React, { useState, useCallback } from "react";
import { TableRow, TableCell, Box } from "@mui/material";
import { Request } from "../../types/request";
import { useTheme } from "next-themes";
import { RequestActions } from "./RequestActions";
import { RequestDetails } from "./RequestDetails";
import { RequestRemarks } from "./RequestRemarks";
import { StatusUpdateForm } from "./StatusUpdateForm";
import { columns } from "./columns";
import { statusOption } from "../../constants/category";
import { EditForm } from "./EditForm";

interface RequestListItemProps {
  request: Request;
  onView: (request: Request) => void;
  onCopy: (text: string, label: string) => void;
  onUpdateStatus: (
    requestId: string,
    newStatus: string,
    category: string,
    adjustments?: string,
    cancellationReason?: string,
  ) => void;
  onEdit: (request: Request) => void;
}

export const RequestListItem: React.FC<RequestListItemProps> = React.memo(
  ({ request, onView, onCopy, onUpdateStatus, onEdit }) => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";
    const [isRemarksExpanded, setIsRemarksExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleUpdateStatus = useCallback(
      (newStatus: string) => {
        if (newStatus === "adjusted & confirmed") {
          setIsEditFormOpen(true);
        } else if (newStatus === "cancelled") {
          setSelectedStatus(newStatus);
          setIsFormOpen(true);
        } else {
          onUpdateStatus(request._id, newStatus, request.category);
        }
        handleMenuClose();
      },
      [request._id, onUpdateStatus, request.category],
    );

    const handleFormSubmit = (input: string) => {
      if (selectedStatus === "cancelled") {
        onUpdateStatus(
          request._id,
          selectedStatus,
          request.category,
          undefined,
          input,
        );
      }
      setIsFormOpen(false);
    };

    const handleSubmitEdit = (updatedData: any) => {
      onUpdateStatus(
        request._id,
        "adjusted & confirmed",
        request.category,
        JSON.stringify(updatedData),
      );
      setIsEditFormOpen(false);
    };

    const handleCopyDriverInfo = useCallback(() => {
      const textToCopy = `
        Patient Name: ${request.patientName}
        Stairs Assistance: ${request.stairsAssistance} 
        Pickup Address: ${request.pickupAddress}
        Dropoff Address: ${request.dropoffAddress}
        Room Number: ${request.roomNumber}
        Pickup Time: ${request.pickupTime}
        Service Type: ${request.serviceType}
        Trip Type: ${request.tripType}
        Wheelchair Size: ${request.wheelchairSize}
        Need Wheelchair : ${request.needsWheelchair} 
        Oxygen O2: ${request.requiresOxygen}
        Appointment Time: ${request.appointmentTime}
        Remarks: ${request.remarks}
      `;
      onCopy(textToCopy, "Driver info");
    }, [request, onCopy]);

    const handleToggleRemarks = useCallback(() => {
      setIsRemarksExpanded((prev) => !prev);
    }, []);

    return (
      <>
        <TableRow
          sx={{
            "&:hover": { backgroundColor: isDarkTheme ? "#374151" : "#f3f4f6" },
            backgroundColor: isDarkTheme ? "#1f2937" : "#ffffff",
          }}
        >
          {columns.map((column) => (
            <TableCell key={column.id}>
              {column.render(request, isDarkTheme)}
            </TableCell>
          ))}
          <TableCell>
            <RequestActions
              onView={() => onView(request)}
              onCopy={handleCopyDriverInfo}
              onToggleRemarks={handleToggleRemarks}
              isRemarksExpanded={isRemarksExpanded}
              hasRemarks={!!request.remarks}
              onMenuOpen={handleMenuOpen}
              anchorEl={anchorEl}
              onMenuClose={handleMenuClose}
              onUpdateStatus={handleUpdateStatus}
              statusOptions={statusOption}
              isDarkTheme={isDarkTheme}
            />
          </TableCell>
        </TableRow>

        {request.remarks && (
          <TableRow>
            <TableCell colSpan={columns.length + 1} sx={{ padding: 0 }}>
              <RequestRemarks
                remarks={request.remarks}
                isRemarksExpanded={isRemarksExpanded}
                isDarkTheme={isDarkTheme}
              />
            </TableCell>
          </TableRow>
        )}
        <StatusUpdateForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
        <EditForm
          open={isEditFormOpen}
          onClose={() => setIsEditFormOpen(false)}
          onSubmit={handleSubmitEdit}
          initialData={request}
        />
      </>
    );
  },
);
