import { Chip, ChipProps } from "@mui/material";
import { RequestCategory } from "../../types/request";

interface RequestTypeChipProps extends Omit<ChipProps, "color"> {
  category: RequestCategory;
}

export const RequestTypeChip = ({
  category,
  ...props
}: RequestTypeChipProps) => {
  const getColor = (): ChipProps["color"] => {
    switch (category) {
      case "booking":
        return "primary";
      case "facility":
        return "secondary";
      case "quote":
        return "info";
      case "insurance":
        return "warning";
      case "private":
        return "success";
      case "special":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Chip
      {...props}
      label={category.toUpperCase()}
      color={getColor()}
      size="small"
    />
  );
};
