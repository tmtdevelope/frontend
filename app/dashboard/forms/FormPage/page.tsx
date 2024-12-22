"use client";

import { useState } from "react";
import { Container, Paper, Grid, Typography, Alert, Box } from "@mui/material";
import { PatientSection } from "../sections/PatientSection";
import { FileUploadSection } from "../sections/FileUploadSection";
import { SubmitButton } from "../components/SubmitButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TransportSection } from "../sections/TransportSection";
import { ServiceSection } from "../sections/ServiceSection";
import { RequesterSection } from "../sections/RequesterSection";
import { RemarksSection } from "../sections/RemarksSection";
import { BillingSection } from "../sections/BillingSection";
import { useTheme } from "next-themes";
import "../styles/form.css";
import { schema } from "../validations/schema";
 import {useDispatch} from 'react-redux';
export default function TransportForm() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handleSubmitData = async (data: any) => {
    try {
      // إعداد البيانات التي سيتم إرسالها
      const formData = {
        ...data,
        files: files, // أضف الملفات هنا إذا كنت بحاجة إليها
        images: images, // أضف الصور هنا إذا كنت بحاجة إليها
      };
  
      // إرسال البيانات عبر Redux
      // dispatch(submitFormData(formData));
  
      setSuccessMsg("Form submitted successfully!");
      setErrorMsg("");
      setFiles([]);
      setImages([]);
      setPreviewUrls([]);
    } catch (error) {
      setErrorMsg("An error occurred while submitting the form.");
      setSuccessMsg("");
    }
  };
  const renderFormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            borderBottom: `2px solid #6366f1`,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: primaryColor,
            paddingBottom: 1,
            marginBottom: 2,
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </>
  );

  return (
    <Container className="form-container">
      <Paper
        elevation={3}
        className={`form-paper ${isDarkTheme ? "form-paper-dark" : "form-paper-light"}`}
        sx={{ p: 4 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            marginBottom: 4,
            color: primaryColor,
          }}
        >
          Transport Request Form
        </Typography>

        {(successMsg || errorMsg) && (
          <Box mb={3}>
            {successMsg && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {successMsg}
              </Alert>
            )}
            {errorMsg && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMsg}
              </Alert>
            )}
          </Box>
        )}

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <Grid container spacing={3}>
            <PatientSection
              register={register}
              errors={errors}
              setValue={setValue}
              renderFormSection={renderFormSection}
            />
            <TransportSection
              register={register}
              control={control}
              errors={errors}
              watch={watch}
              renderFormSection={renderFormSection}
            />
            <ServiceSection
              register={register}
              errors={errors}
              watch={watch}
              renderFormSection={renderFormSection}
            />
            <RequesterSection
              register={register}
              errors={errors}
              renderFormSection={renderFormSection}
            />
            <BillingSection
              register={register}
              errors={errors}
              renderFormSection={renderFormSection}
            />
            <RemarksSection
              register={register}
              renderFormSection={renderFormSection}
            />
            <FileUploadSection
              files={files}
              setFiles={setFiles}
              images={images}
              setImages={setImages}
              previewUrls={previewUrls}
              setPreviewUrls={setPreviewUrls}
              renderFormSection={renderFormSection}
            />
            <SubmitButton />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
