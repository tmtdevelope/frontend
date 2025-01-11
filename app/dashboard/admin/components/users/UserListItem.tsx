// "use client";
// import {
//     TableRow,
//     TableCell,
//     Box,
//     Typography,
//     IconButton,
//     Tooltip,
//     Chip,
//     Avatar,
// } from "@mui/material";
// import { Edit, Trash2, UserCog } from 'lucide-react';
// import { User } from '../../types/user';

// interface UserListItemProps {
//     user: User;
//     onEdit: (user: User) => void;
//     onDelete: (userId: string) => void;
//     onRoleChange: (userId: string) => void;
// }

// export const UserListItem: React.FC<UserListItemProps> = ({
//     user,
//     onEdit,
//     onDelete,
//     onRoleChange,
// }) => {
//     return (
//         <TableRow hover>
//             <TableCell>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Avatar>{user.firstName[0]}</Avatar>
//                     <Typography>{user.firstName} {user.lastName}</Typography>
//                 </Box>
//             </TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>{user.phone}</TableCell>
//             <TableCell>{user.jobTitle}</TableCell>
//             <TableCell>{user.organizationName}</TableCell>
//             <TableCell>{user.facilityAddress}</TableCell>
//             <TableCell>
//                 <Chip label={user.status} color={user.status === 'active' ? 'success' : 'warning'} />
//             </TableCell>
//             <TableCell>
//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                     <Tooltip title="Edit User">
//                         <IconButton onClick={() => onEdit(user)}>
//                             <Edit />
//                         </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Delete User">
//                         <IconButton onClick={() => onDelete(user._id)} color="error">
//                             <Trash2 />
//                         </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Change Role">
//                         <IconButton onClick={() => onRoleChange(user._id)}>
//                             <UserCog />
//                         </IconButton>
//                     </Tooltip>
//                 </Box>
//             </TableCell>
//         </TableRow>
//     );
// };
