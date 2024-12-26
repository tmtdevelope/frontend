"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Chip,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { Request } from '@/app/types/use-places-autocomplete'; 

interface RequestDetailsProps {
  request: Request;
  open: boolean;
  onClose: () => void;
  onEdit: (request: Request) => void;
}

export const RequestDetails = ({ request, open, onClose, onEdit }: RequestDetailsProps) => {
  const DetailItem = ({ label, value }: { label: string; value: any }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1">{value || 'N/A'}</Typography>
    </Box>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Request Details</Typography>
          <Chip
            label={request.status}
            color={
              request.status === 'completed'
                ? 'success'
                : request.status === 'pending'
                ? 'warning'
                : request.status === 'cancelled'
                ? 'error'
                : 'info'
            }
          />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Patient Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <DetailItem label="Patient Name" value={request.patientName} />
                <DetailItem label="Patient ID" value={request.patientID} />
                <DetailItem label="Phone Number" value={request.phoneNumber} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DetailItem label="Category" value={request.category} />
                <DetailItem label="Service Type" value={request.serviceType} />
                {request.weight && (
                  <DetailItem label="Weight" value={`${request.weight} kg`} />
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Trip Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <DetailItem label="Pickup Address" value={request.pickupAddress} />
                <DetailItem label="Pickup Date" value={new Date(request.pickupDate).toLocaleDateString()} />
                <DetailItem label="Pickup Time" value={request.pickupTime} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DetailItem label="Dropoff Address" value={request.dropoffAddress} />
                <DetailItem label="Appointment Time" value={request.appointmentTime} />
                {request.roomNumber && (
                  <DetailItem label="Room Number" value={request.roomNumber} />
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Requester Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <DetailItem label="Requester Name" value={request.requesterName} />
                <DetailItem label="Requester Email" value={request.requesterEmail} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DetailItem label="Requester Phone" value={request.requesterPhone} />
                <DetailItem 
                  label="Request Date" 
                  value={new Date(request.createdAt).toLocaleString()} 
                />
              </Grid>
            </Grid>
          </Grid>

          {request.remarks && (
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Additional Information
              </Typography>
              <DetailItem label="Remarks" value={request.remarks} />
            </Grid>
          )}
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button onClick={onClose}>Close</Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => onEdit(request)}
          >
            Edit Request
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};