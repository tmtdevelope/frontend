"use client";

import { useState } from "react";
import { Box, Alert, Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImageIcon from "@mui/icons-material/Image";
import { UploadButton } from "../components/UploadButton";
import {
  ALLOWED_FILE_TYPES,
  FILE_TYPE_ERROR_MESSAGES,
  MAX_FILE_SIZE,
  MAX_FILES,
} from "../constants/fileUpload";
import { FilePreview } from "../components/FilePreview";

interface FileUploadSectionProps {
  fileUrls: string[];
  imageUrls: string[];
  setFileUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  renderFormSection: (section: {
    title: string;
    children: JSX.Element;
  }) => JSX.Element;
}

const uploadToCloudinary = async (
  file: File,
  folder: string,
): Promise<string> => {
  if (
    !process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ||
    !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  ) {
    throw new Error("Cloudinary configuration is missing");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  );
  formData.append("folder", folder); // Specify folder dynamically

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data.secure_url;
};

export function FileUploadSection({
  imageUrls,
  renderFormSection,
  setFileUrls,
  fileUrls,
  setImageUrls,
}: FileUploadSectionProps) {
  const [error, setError] = useState<string | null>("");
  const [loadingFiles, setLoadingFiles] = useState<string[]>([]);

  const removeFile = (index: number, type: "documents" | "images") => {
    if (type === "documents") {
      setFileUrls((prev) => prev.filter((_, i) => i !== index));
    } else {
      setImageUrls((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "documents" | "images",
  ): Promise<void> => {
    const fileList = event.target.files;
    if (!fileList) return;

    const newFiles = Array.from(fileList);
    const currentFiles = type === "documents" ? fileUrls : imageUrls;

    if (currentFiles.length + newFiles.length > MAX_FILES) {
      setError(`You can only upload up to ${MAX_FILES} ${type}.`);
      return;
    }

    const validFiles: File[] = [];
    for (const file of newFiles) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB.`);
        return;
      }
      if (!ALLOWED_FILE_TYPES[type].includes(file.type)) {
        setError(FILE_TYPE_ERROR_MESSAGES[type]);
        return;
      }
      validFiles.push(file);
    }

    const newUrls: string[] = [];
    for (const file of validFiles) {
      try {
        setLoadingFiles((prev) => [...prev, file.name]);
        const url = await uploadToCloudinary(file, type);
        newUrls.push(url);
        setLoadingFiles((prev) => prev.filter((name) => name !== file.name));
      } catch (err: any) {
        setError(err.message);
      }
    }

    if (type === "documents") {
      setFileUrls((prev) => [...prev, ...newUrls]);
    } else {
      setImageUrls((prev) => [...prev, ...newUrls]);
    }
  };

  return renderFormSection({
    title: "Documents & Images",
    children: (
      <>
        {error && (
          <Box mb={2}>
            <Alert severity="error" onClose={() => setError(null)}>
              {error}
            </Alert>
          </Box>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <UploadButton
              icon={<CloudUploadIcon />}
              label="Upload Documents"
              onUpload={(e) => handleFileUpload(e, "documents")}
              type="documents"
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: 2,
              }}
            >
              {fileUrls.map((file, index) => (
                <FilePreview
                  key={index}
                  file={file}
                  onDelete={() => removeFile(index, "documents")}
                  isLoading={loadingFiles.includes(file)}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <UploadButton
              icon={<ImageIcon />}
              label="Upload Images"
              onUpload={(e) => handleFileUpload(e, "images")}
              type="images"
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: 2,
              }}
            >
              {imageUrls.map((url, index) => (
                <FilePreview
                  key={index}
                  file={url}
                  onDelete={() => removeFile(index, "images")}
                  isLoading={loadingFiles.includes(url)}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </>
    ),
  });
}
