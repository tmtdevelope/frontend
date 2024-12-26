"use client";

import { useState } from "react";
import { Container, Paper, Grid, Typography, Alert, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scrollToTop } from "@/app/utils/scroll";
import { useTheme } from "next-themes";
import "../dashboard/forms/styles/form.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { privatePay } from "@/app/redux/actions/forms/privatePayActions";
import { ServiceSection } from "../dashboard/forms/sections/ServiceSection";
import { SubmitButton } from "../dashboard/forms/components/SubmitButton";
import TitleForm from "../dashboard/forms/utils/TitleForm";
import { schema } from "../dashboard/forms/validations/schema";
import { FileUploadSection } from "../dashboard/forms/sections/FileUploadSection";
import { RemarksSection } from "../dashboard/forms/sections/RemarksSection";
import { RequesterSection } from "../dashboard/forms/sections/RequesterSection";
import { TransportSection } from "../dashboard/forms/sections/TransportSection";
import { bookingNow } from "../redux/actions/forms/bookingNowActions";
import { PatientSection } from "../dashboard/forms/sections/PatientSection";

const BookingNow = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
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
  const onSubmit = async (data: Record<string, any>): Promise<void> => {
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

      const result = await dispatch(bookingNow(formData) as any);

      if (privatePay.fulfilled.match(result)) {
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
        sx={{
          backgroundColor: isDarkTheme ? "#1f2937" : "#fff",
          padding: 4,
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <TitleForm title={" Booking Now"} primaryColor={primaryColor} />
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
              control={control}
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
              setValue={setValue}
              control={control}
              watch={watch}
              renderFormSection={renderFormSection}
            />
            <RequesterSection
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
export default BookingNow;
