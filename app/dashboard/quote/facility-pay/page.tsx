"use client";

import { useState } from "react";
import { Container, Paper, Grid, Typography, Alert, Box } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTheme } from "next-themes";
import "../../forms/styles/form.css";
import { useDispatch, useSelector } from "react-redux";

import { SubmitButton } from "../../forms/components/SubmitButton";
import { PatientSection } from "../../forms/sections/PatientSection";
import { TransportSection } from "../../forms/sections/TransportSection";
import { ServiceSection } from "../../forms/sections/ServiceSection";
import { RequesterSection } from "../../forms/sections/RequesterSection";
import { BillingSection } from "../../forms/sections/BillingSection";
import { RemarksSection } from "../../forms/sections/RemarksSection";
import { FileUploadSection } from "../../forms/sections/FileUploadSection";
import { schema } from "../../forms/validations/schema";
import TitleForm from "../../forms/utils/TitleForm";
import { RootState } from "@/app/redux/store/store";
import { scrollToTop } from "@/app/utils/scroll";
import { facilityPay } from "@/app/redux/actions/facilityPayAction";
 
const FacilityPay = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  console.log("state:", state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
 
    try {
      const formData = new FormData();

       const formatDate = (date: string | undefined): string | null =>
        date ? new Date(date).toISOString().split("T")[0] : null;

      const formatTime = (time: string | undefined): string | null =>
        time
          ? new Date(time).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          : null;
      const formattedDateOfBirth = formatDate(data.dateOfBirth);
      const formattedPickupDate = formatDate(data.pickupDate);
      const formattedPickupTime = formatTime(data.pickupTime);
      const formattedAppointmentTime = formatTime(data.appointmentTime);

      if (formattedDateOfBirth)
        formData.append("dateOfBirth", formattedDateOfBirth);
      if (formattedPickupDate)
        formData.append("pickupDate", formattedPickupDate);
      if (formattedPickupTime)
        formData.append("pickupTime", formattedPickupTime);
      if (formattedAppointmentTime)
        formData.append("appointmentTime", formattedAppointmentTime);

      Object.keys(data).forEach((key) => {
        if (
          ![
            "dateOfBirth",
            "pickupDate",
            "pickupTime",
            "appointmentTime",
          ].includes(key)
        ) {
          const value = data[key];
          if (value !== undefined && value !== null) {
            formData.append(key, value.toString());
          }
        }
      });

      imageUrls.forEach((url, index) => {
        formData.append(`images[${index}]`, url);
      });

      fileUrls.forEach((url, index) => {
        formData.append(`documents[${index}]`, url);
      });

 
      const result = await dispatch(facilityPay(formData) as any);

 
       if (facilityPay.fulfilled.match(result)) {
         setSuccessMsg(result.payload.message || "Form submitted successfully!"); 
         setErrorMsg("");
         scrollToTop();  
       } else {
         setErrorMsg("Something went wrong. Please try again.");
         setSuccessMsg("");
         scrollToTop();
       }
     } catch (error) {
       console.error("Error during form submission:", error);
       setErrorMsg("An error occurred while submitting the form.");
       scrollToTop();
       setSuccessMsg("");
     }
      
  };
  const renderFormSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
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
        className={`form-paper ${
          isDarkTheme ? "form-paper-dark" : "form-paper-light"
        }`}
        sx={{ p: 4 }}
      >
        <Grid item xs={12}>
          <TitleForm title={"Facility Pay"} primaryColor={primaryColor} />
        </Grid>

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

        <form onSubmit={handleSubmit(onSubmit)}>
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
              setValue={setValue}
              watch={watch}
              renderFormSection={renderFormSection}
            />
            <ServiceSection
              register={register}
              errors={errors}
              control={control}
              setValue={setValue}
              watch={watch}
              renderFormSection={renderFormSection}
            />
            <RequesterSection
              register={register}
              errors={errors}
              renderFormSection={renderFormSection}
            />
            <BillingSection
              setValue={setValue}
              register={register}
              errors={errors}
              renderFormSection={renderFormSection}
            />
            <RemarksSection
              register={register}
              renderFormSection={renderFormSection}
            />
            <FileUploadSection
              renderFormSection={renderFormSection}
              fileUrls={fileUrls}
              setFileUrls={setFileUrls}
              imageUrls={imageUrls}
              setImageUrls={setImageUrls}
            />
            <SubmitButton />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default FacilityPay;