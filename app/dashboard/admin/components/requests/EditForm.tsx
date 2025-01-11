import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface EditFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData: any;
}

export const EditForm: React.FC<EditFormProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  // تعيين قيمة افتراضية لـ initialData إذا كانت null أو undefined
  const defaultData = {
    patientName: "",
    pickupAddress: "",
    dropoffAddress: "",
    roomNumber: "",
    pickupTime: "",
    serviceType: "",
    tripType: "",
    wheelchairSize: "",
    needsWheelchair: "",
    requiresOxygen: "",
    appointmentTime: "",
    remarks: "",
  };

  const [formData, setFormData] = React.useState(initialData || defaultData);

  React.useEffect(() => {
    // تحديث formData عند تغيير initialData
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Request</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Patient Name"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Pickup Address"
          name="pickupAddress"
          value={formData.pickupAddress}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Dropoff Address"
          name="dropoffAddress"
          value={formData.dropoffAddress}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Room Number"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Pickup Time"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Service Type"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Trip Type"
          name="tripType"
          value={formData.tripType}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Wheelchair Size"
          name="wheelchairSize"
          value={formData.wheelchairSize}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Need Wheelchair"
          name="needsWheelchair"
          value={formData.needsWheelchair}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Oxygen O2"
          name="requiresOxygen"
          value={formData.requiresOxygen}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Appointment Time"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Remarks"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
