"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableContainer,
  Paper,
  Snackbar,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchAllData } from "@/app/redux/actions/requests/fetchAllData";
import { AppDispatch } from "@/app/redux/store/store";
import { RequestListHeader } from "../../components/requests/RequestListHeader";
import { RequestCategoryTabs } from "../../components/requests/RequestCategoryTabs";
import { RequestFilters } from "../../components/requests/RequestFilters";
import { RequestListItem } from "../../components/requests/RequestListItem";
import { RequestTableHeader } from "../../components/requests/RequestTableHeader";
import { RequestDetails } from "../../components/requests/RequestDetails";
import { Request } from "../../types/request";
import { STATUS_REQUEST } from "../../constants/category";
import { CustomTablePagination } from "../../components/TablePagination";

interface RequestsProps {
  requests: Request[];
  loading: boolean;
  error?: string | null;
  onUpdateStatus: (
    requestId: string,
    newStatus: string,
    category: string,
  ) => void;
  onEdit: (request: Request) => void;
}

export default function Requests({
  requests,
  loading,
  error,
  onUpdateStatus,
  onEdit,
}: RequestsProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tripType, setTripType] = useState<string>("all");
  const [serviceType, setServiceType] = useState<string>("all");
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch<AppDispatch>();

  // Fetch data on page load
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  // Define the statuses from the data structure
  const statuses = Object.values(STATUS_REQUEST);
  console.log("statuses", statuses);
  // Get counts per status
  const getStatusCounts = (): Record<string, number> => {
    const counts = statuses.reduce(
      (acc, status) => {
        acc[status] = requests.filter(
          (request: Request) => request.requestStatus === status,
        ).length;
        return acc;
      },
      {} as Record<string, number>,
    );
    return counts;
  };

  // Filter the data based on selected status
  const getFilteredRequests = (): Request[] => {
    if (selectedTab === 0) {
      return requests.filter((request: Request) => {
        const matchesSearch =
          request.patientName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          request.patientID?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.phoneNumber?.includes(searchTerm);

        const matchesTripType =
          tripType === "all" || request.tripType === tripType;
        const matchesServiceType =
          serviceType === "all" || request.serviceType === serviceType;

        return matchesSearch && matchesTripType && matchesServiceType;
      });
    } else {
      const statusKey = statuses[selectedTab - 1];
      return requests.filter((request: Request) => {
        const matchesStatus = request.requestStatus === statusKey;
        const matchesSearch =
          request.patientName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          request.patientID?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.phoneNumber?.includes(searchTerm);

        const matchesTripType =
          tripType === "all" || request.tripType === tripType;
        const matchesServiceType =
          serviceType === "all" || request.serviceType === serviceType;

        return (
          matchesStatus &&
          matchesSearch &&
          matchesTripType &&
          matchesServiceType
        );
      });
    }
  };

  const filteredRequests = getFilteredRequests();

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

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <RequestListHeader onRefresh={() => dispatch(fetchAllData())} />

      <RequestCategoryTabs
        value={selectedTab}
        onChange={(_, newValue: number) => setSelectedTab(newValue)}
        counts={getStatusCounts()}
      />

      <RequestFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        tripType={tripType}
        onTripTypeChange={setTripType}
        serviceType={serviceType}
        onServiceTypeChange={setServiceType}
      />

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
          <Alert severity="error">Failed to load data: {error}</Alert>
        </Box>
      )}

      {!loading && !error && (
        <Paper
          elevation={2}
          sx={{ overflowX: "auto", bgcolor: "background.paper" }}
        >
          <TableContainer>
            <Table>
              <RequestTableHeader />
              <TableBody>
                {filteredRequests
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((request: Request) => (
                    <RequestListItem
                      key={request._id}
                      request={request}
                      onView={(request) => {
                        setSelectedRequest(request);
                        setIsDetailsOpen(true);
                      }}
                      onCopy={handleCopy}
                      onUpdateStatus={onUpdateStatus}
                      onEdit={onEdit}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <CustomTablePagination
            count={filteredRequests.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      {selectedRequest && (
        <RequestDetails
          request={selectedRequest}
          open={isDetailsOpen}
          onClose={() => {
            setIsDetailsOpen(false);
            setSelectedRequest(null);
          }}
          onCopy={handleCopy}
        />
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Container>
  );
}
