import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { STATUS_REQUEST } from "../../constants/category";

interface RequestStatusMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onUpdateStatus: (status: string) => void;
}

const statusOptions = [
  { label: "Pending", status: STATUS_REQUEST.PENDING, color: "#4CAF50" },
  { label: "Confirmed", status: STATUS_REQUEST.CONFIRMED, color: "#FF9800" },
  {
    label: "Adjusted & Confirmed",
    status: STATUS_REQUEST.CONFIRMED_ADJUSTED,
    color: "#FF5722",
  },
  { label: "Cancel", status: STATUS_REQUEST.CANCELLED, color: "#F44336" },
  { label: "Ignore", status: STATUS_REQUEST.IGNORED, color: "#9E9E9E" },
];

export const RequestStatusMenu: React.FC<RequestStatusMenuProps> = React.memo(
  ({ anchorEl, onClose, onUpdateStatus }) => {
    return (
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        {statusOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => onUpdateStatus(option.status)}
            sx={{ color: option.color, fontWeight: "bold" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    );
  },
);
