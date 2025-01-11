"use client";

import { Dialog, DialogContent } from "@mui/material";
import { Request, InsuranceRequest } from "../../types/request";
import { RequestDetailsHeader } from "./details/RequestDetailsHeader";
import { RequestDetailsSection } from "./details/RequestDetailsSection";
import { RequestAttachments } from "./details/RequestAttachments";
import { format } from "date-fns";
import { useTheme } from "next-themes";

interface RequestDetailsProps {
  request: Request;
  open: boolean;
  onClose: () => void;
  onCopy: (text: string, label: string) => void;
}

export const RequestDetails = ({
  request,
  open,
  onClose,
  onCopy,
}: RequestDetailsProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const formatDate = (date: string | null | undefined) => {
    if (!date || isNaN(new Date(date).getTime())) {
      return "N/A";
    }
    return format(new Date(date), "MMM dd, yyyy");
  };

  const handleCopyAll = () => {
    const {
      documents,
      images,
      createdAt,
      updatedAt,
      __v,
      _id,
      ...filteredRequest
    } = request;

    const allDetails = Object.entries(filteredRequest)
      .map(([key, value]) => {
        if (key === "dateOfBirth" || key === "pickupDate") {
          value = formatDate(value as string);
        }
        return `${key}: ${value}`;
      })
      .join("\n");

    onCopy(allDetails, "All details");
  };

  const handleCopyItem = (label: string, value: string | number) => {
    onCopy(`${label}: ${value}`, label);
  };

  const handleCopyCustomer = () => {
    const customerDetails = `
      Name: ${request.patientName}
      Phone: ${request.phoneNumber}
      Address: ${request.address}`;
    navigator.clipboard.writeText(customerDetails).then(() => {
      console.log("Customer details copied to clipboard");
    });
  };

  const isInsuranceRequest = (
    request: Request,
  ): request is InsuranceRequest => {
    return request.category === "insurance";
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: isDarkTheme ? "#1f2937" : "#ffffff",
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      }}
    >
      <DialogContent>
        <RequestDetailsHeader
          onClose={onClose}
          request={request}
          onCopyAll={handleCopyAll}
          onCopyCustomer={handleCopyCustomer}
        />
        <RequestDetailsSection
          title="Patient Information"
          details={[
            {
              label: "Patient Name",
              value: request.patientName,
              copyable: true,
            },
            {
              label: "Patient ID",
              value: request.patientID || "N/A",
              copyable: true,
            },
            { label: "Date of Birth", value: formatDate(request.dateOfBirth) },
            {
              label: "Phone Number",
              value: request.phoneNumber,
              copyable: true,
            },
            { label: "Weight", value: `${request.weight} LB` },
            { label: "Address", value: request.address, copyable: true },
          ]}
          onCopyItem={handleCopyItem}
        />

        <RequestDetailsSection
          title="Trip Details"
          details={[
            { label: "Trip Type", value: request.tripType },
            { label: "Service Type", value: request.serviceType },
            { label: "Pickup Date", value: formatDate(request.pickupDate) },
            { label: "Pickup Time", value: request.pickupTime },
            {
              label: "Pickup Address",
              value: request.pickupAddress,
              copyable: true,
            },
            {
              label: "Dropoff Address",
              value: request.dropoffAddress,
              copyable: true,
            },
            { label: "Appointment Time", value: request.appointmentTime },
            { label: "Room Number", value: request.roomNumber },
          ]}
          onCopyItem={handleCopyItem}
        />

        <RequestDetailsSection
          title="Additional Information"
          details={[
            {
              label: "Wheelchair Size",
              value: request.wheelchairSize || "N/A",
            },
            {
              label: "Stairs Assistance",
              value: request.stairsAssistance || "N/A",
            },
            {
              label: " Need Wheelchair",
              value: request.needsWheelchair || "N/A",
            },
            {
              label: "Assistants Count",
              value: request.assistantsCount || "N/A",
            },
            { label: "Requires Oxygen", value: request.requiresOxygen || "No" },
            {
              label: "Oxygen Flow Rate",
              value: request.oxygenFlowRate || "N/A",
            },
            {
              label: "Remarks",
              value: request.remarks || "No remarks",
              copyable: true,
            },
          ]}
          onCopyItem={handleCopyItem}
        />

        <RequestDetailsSection
          title="Requester Information"
          details={[
            {
              label: "Name",
              value: request.requesterName || "N/A",
              copyable: true,
            },
            { label: "Email", value: request.requesterEmail, copyable: true },
            { label: "Phone", value: request.requesterPhone, copyable: true },
          ]}
          onCopyItem={handleCopyItem}
        />
        {request.category === "special" && (
          <RequestDetailsSection
            title="Special Assistance Information"
            details={[
              {
                label: "Selected Assistances",
                value: request.selectedAssistances?.join(", ") || "N/A",
                copyable: true,
              },
              {
                label: "Need Assistance",
                value: request.needAssistance || "N/A",
                copyable: true,
              },
            ]}
            onCopyItem={handleCopyItem}
          />
        )}

        {isInsuranceRequest(request) && (
          <RequestDetailsSection
            title="Insurance Information"
            details={[
              {
                label: "Diagnostic Code",
                value: (request.diagnosticCode?.split("-")[0] || "N/A").trim(),
                copyable: true,
              },
              {
                label: "NPI Number",
                value: request.npiNumber || "N/A",
                copyable: true,
              },
              {
                label: "Staff Physician Name",
                value: request.staffPhysicianName || "N/A",
                copyable: true,
              },
              {
                label: "Phone Number (NPI)",
                value: request.phoneNumberNPI || "N/A",
                copyable: true,
              },
              {
                label: "Fax Number",
                value: request.faxNumber || "N/A",
                copyable: true,
              },
            ]}
            onCopyItem={handleCopyItem}
          />
        )}

        <RequestAttachments
          documents={request.documents}
          images={request.images}
        />
      </DialogContent>
    </Dialog>
  );
};
