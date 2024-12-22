"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { FormLabel } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { X, File, Image as ImageIcon, Upload } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import { TransportFormValues } from "@/lib/validations/transport"

interface DocumentUploadProps {
  form: UseFormReturn<TransportFormValues>
}

export function DocumentUploadSection({ form }: DocumentUploadProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const onPdfDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      setPdfFile(acceptedFiles[0])
      simulateUpload()
    }
  }, [])

  const onImageDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      setImageFile(acceptedFiles[0])
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(acceptedFiles[0])
      simulateUpload()
    }
  }, [])

  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 100)
  }

  const { getRootProps: getPdfRootProps, getInputProps: getPdfInputProps, isDragActive: isPdfDragActive } = useDropzone({
    onDrop: onPdfDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1
  })

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps, isDragActive: isImageDragActive } = useDropzone({
    onDrop: onImageDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxFiles: 1
  })

  const removeFile = (type: "pdf" | "image") => {
    if (type === "pdf") {
      setPdfFile(null)
    } else {
      setImageFile(null)
      setImagePreview(null)
    }
    setUploadProgress(0)
  }

  return (
    <Card className="transition-colors duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Document Upload
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PDF Upload */}
          <div className="space-y-4">
            <FormLabel>Upload PDF Document</FormLabel>
            <div
              {...getPdfRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer
                ${isPdfDragActive ? "border-primary bg-primary/5" : "hover:border-primary/50"}
              `}
            >
              <input {...getPdfInputProps()} />
              <div className="flex flex-col items-center gap-2">
                <File className={`h-8 w-8 ${isPdfDragActive ? "text-primary" : "text-muted-foreground"}`} />
                <span className="text-sm text-center text-muted-foreground">
                  {isPdfDragActive ? "Drop PDF here" : "Drag & drop PDF or click to select"}
                </span>
              </div>
            </div>
            {pdfFile && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                  <File className="h-4 w-4" />
                  <span className="text-sm flex-1 truncate">{pdfFile.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile("pdf")}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Progress value={uploadProgress} className="h-1" />
              </div>
            )}
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <FormLabel>Upload Image</FormLabel>
            <div
              {...getImageRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer
                ${isImageDragActive ? "border-primary bg-primary/5" : "hover:border-primary/50"}
              `}
            >
              <input {...getImageInputProps()} />
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className={`h-8 w-8 ${isImageDragActive ? "text-primary" : "text-muted-foreground"}`} />
                <span className="text-sm text-center text-muted-foreground">
                  {isImageDragActive ? "Drop image here" : "Drag & drop image or click to select"}
                </span>
              </div>
            </div>
            {imageFile && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                  <ImageIcon className="h-4 w-4" />
                  <span className="text-sm flex-1 truncate">{imageFile.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile("image")}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Progress value={uploadProgress} className="h-1" />
                {imagePreview && (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}