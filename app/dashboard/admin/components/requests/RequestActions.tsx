import React from "react";
import { IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import {
  Visibility as ViewIcon,
  ContentCopy as CopyIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";

interface RequestActionsProps {
  onView: () => void;
  onCopy: () => void;
  onEdit?: () => void;
  onToggleRemarks: () => void;
  isRemarksExpanded: boolean;
  hasRemarks: boolean;
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl?: HTMLElement | null;
  onMenuClose: () => void;
  onUpdateStatus?: (status: string) => void;
  statusOptions?: { label: string; status: string; color: string }[];
  isDarkTheme: boolean;
}

export const RequestActions: React.FC<RequestActionsProps> = ({
  onView,
  onCopy,
  onEdit,
  onToggleRemarks,
  isRemarksExpanded,
  hasRemarks,
  onMenuOpen,
  anchorEl,
  onMenuClose,
  onUpdateStatus,
  statusOptions,
  isDarkTheme,
}) => {
  return (
    <>
      <Tooltip title="View Details">
        <IconButton onClick={onView} size="small" sx={{ color: "#4CAF50" }}>
          <ViewIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Copy Driver Info">
        <IconButton onClick={onCopy} size="small" sx={{ color: "#2196F3" }}>
          <CopyIcon />
        </IconButton>
      </Tooltip>

      {hasRemarks && (
        <Tooltip title="Toggle Remarks">
          <IconButton
            onClick={onToggleRemarks}
            size="small"
            sx={{ color: "#FF9800" }}
          >
            {isRemarksExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title="More Options">
        <IconButton onClick={onMenuOpen} size="small" sx={{ color: "#9E9E9E" }}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onMenuClose}>
        {statusOptions &&
          statusOptions.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => onUpdateStatus?.(option.status)}
              sx={{ color: option.color }}
            >
              {option.label}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};
