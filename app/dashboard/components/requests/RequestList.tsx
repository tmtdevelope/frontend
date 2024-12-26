import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Chip, useTheme } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as ViewIcon } from '@mui/icons-material';
import { Request } from '../../forms/types/request';

interface RequestListProps {
  requests: Request[];
  onView: (request: Request) => void;
  onEdit: (request: Request) => void;
  onDelete: (id: string) => void;
}

export const RequestList = ({ requests, onView, onEdit, onDelete }: RequestListProps) => {
 
 
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Service Type</TableCell>
            <TableCell>Pickup Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request, i) => (
            <TableRow key={request.id + i}>
              <TableCell>{request.patientName}</TableCell>
              <TableCell>
                <Chip
                  label={request.category}
                  color="primary"
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{request.serviceType}</TableCell>
              <TableCell>
              {request.pickupDate
                  ? new Date(request.pickupDate).toLocaleDateString()
                  : 'N/A'}
                <br />
           
              </TableCell>
             
              <TableCell>
  <IconButton onClick={() => onView(request)} color="primary" size="small">
    <ViewIcon />
  </IconButton>
  <IconButton onClick={() => onEdit(request)} color="info" size="small">
    <EditIcon />
  </IconButton>
  <IconButton onClick={() => onDelete(request.id)} color="error" size="small">
    <DeleteIcon />
  </IconButton>
</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
