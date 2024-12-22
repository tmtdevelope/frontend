"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { transportFormSchema, type TransportFormValues } from "@/lib/validations/transport"
import { PatientInfoSection } from "./form-sections/patient-info"
import { TransportDetailsSection } from "./form-sections/transport-details"
import { RequesterInfoSection } from "./form-sections/requester-info"
import { DocumentUploadSection } from "./form-sections/document-upload"
import { RemarksSection } from "./form-sections/remarks"

interface TransportFormProps {
  type: "private" | "facility" | "insurance" | "special"
}

export function TransportForm({ type }: TransportFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<TransportFormValues>({
    resolver: zodResolver(transportFormSchema),
    defaultValues: {
      tripType: "oneWay",
      serviceType: "wheelchair",
      stairsAssistance: "no",
      oxygenRequired: "no",
    },
  })

  async function onSubmit(data: TransportFormValues) {
    try {
      setIsSubmitting(true)
      // Here you would typically send the data to your API
      console.log("Form submitted:", data)
      
      toast({
        title: "Success",
        description: "Transport request submitted successfully",
      })
      
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit transport request",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <PatientInfoSection form={form} />
        <TransportDetailsSection form={form} />
        <RequesterInfoSection form={form} />
        <DocumentUploadSection form={form} />
        <RemarksSection form={form} />
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  )
}