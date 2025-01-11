import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "../constants/fileUpload";

export const validateFile = (
  file: File,
  type: "documents" | "images",
): string | null => {
  if (!ALLOWED_FILE_TYPES[type].includes(file.type)) {
    return `Invalid file type: ${file.type}`;
  }

  if (file.size > MAX_FILE_SIZE) {
    return `File size exceeds 5MB limit: ${(file.size / 1024 / 1024).toFixed(2)}MB`;
  }

  return null;
};

export const createObjectURL = (file: File): string => {
  return URL.createObjectURL(file);
};

export const revokeObjectURL = (url: string): void => {
  URL.revokeObjectURL(url);
};
