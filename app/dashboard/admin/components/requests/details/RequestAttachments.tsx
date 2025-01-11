"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  IconButton,
  Dialog,
  DialogContent,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Close as CloseIcon,
  Description as DocumentIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { useTheme } from "next-themes";

interface RequestAttachmentsProps {
  documents: string[];
  images: string[];
}

export const RequestAttachments = ({
  documents,
  images,
}: RequestAttachmentsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSnackbarMessage(`Downloaded: ${filename}`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (documents.length === 0 && images.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        mb: 4,
        p: 3,
        borderRadius: 2,
        bgcolor: isDarkTheme ? "#374151" : "#f3f4f6",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
      >
        Attachments
      </Typography>

      {documents.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ color: isDarkTheme ? "#b3b3b3" : "#666666" }}
          >
            Documents
          </Typography>
          <Grid container spacing={2}>
            {documents.map((doc, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    backgroundColor: isDarkTheme ? "#374151" : "#ffffff",
                    color: isDarkTheme ? "#ffffff" : "#000000",
                    "&:hover": {
                      boxShadow: 3,
                      transform: "scale(1.02)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    },
                  }}
                >
                  <DocumentIcon color="primary" />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" noWrap>
                      Document {index + 1}
                    </Typography>
                    <Link
                      href={doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="caption"
                      sx={{
                        display: "block",
                        color: isDarkTheme ? "#ffffff" : "#000000",
                      }}
                    >
                      View Document
                    </Link>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() =>
                      handleDownload(doc, `document-${index + 1}.pdf`)
                    }
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    <DownloadIcon fontSize="small" />
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {images.length > 0 && (
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ color: isDarkTheme ? "#b3b3b3" : "#666666" }}
          >
            Images
          </Typography>
          <ImageList cols={3} gap={16}>
            {images.map((img, index) => (
              <ImageListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                    "& .download-button": {
                      opacity: 1,
                    },
                  },
                  position: "relative",
                }}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={200}
                  style={{
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <IconButton
                  className="download-button"
                  size="small"
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    opacity: 0,
                    transition: "opacity 0.2s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const filename = `image-${index + 1}.jpg`;
                    handleDownload(img, filename);
                  }}
                >
                  <DownloadIcon fontSize="small" />
                </IconButton>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: isDarkTheme ? "#1f2937" : "#ffffff",
            color: isDarkTheme ? "#ffffff" : "#000000",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={() => {
              console.log("Closing image");
              setSelectedImage(null);
            }}
            sx={{
              cursor: "pointer",
              position: "absolute",
              zIndex: 1000,
              right: 8,
              top: 8,
              backgroundColor: "#ededed",
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedImage && (
            <Box sx={{ position: "relative", width: "100%", height: "80vh" }}>
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
