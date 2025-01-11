// utils/statusColors.ts
export const getStatusColor = (status: string) => {
  const colors: Record<string, "success" | "warning" | "error" | "default"> = {
    active: "success",
    pending: "warning",
    inactive: "error",
    rejected: "default",
  };
  return colors[status.toLowerCase()] || "default";
};
