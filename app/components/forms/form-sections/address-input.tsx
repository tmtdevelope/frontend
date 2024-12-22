"use client"

import { useEffect, useRef, useState } from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2, MapPin } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import { TransportFormValues } from "@/lib/validations/transport"

interface AddressInputProps {
  form: UseFormReturn<TransportFormValues>
  name: keyof TransportFormValues
  label: string
}

export function AddressInput({ form, name, label }: AddressInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([])
  const [showPredictions, setShowPredictions] = useState(false)

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      script.onload = () => {
        if (inputRef.current) {
          const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
            componentRestrictions: { country: "us" },
            fields: ["formatted_address", "geometry"]
          })

          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace()
            if (place.formatted_address) {
              form.setValue(name, place.formatted_address, { shouldValidate: true })
              setShowPredictions(false)
            }
          })
        }
      }
    }

    loadGoogleMapsScript()
  }, [form, name])

  const handleInputChange = async (value: string) => {
    form.setValue(name, value)
    if (value.length > 2) {
      setIsLoading(true)
      setShowPredictions(true)
      // Simulate API call delay
      setTimeout(() => {
        setPredictions([
          { description: "123 Main St, City, State" },
          { description: "456 Oak Ave, Town, State" },
          { description: "789 Pine Rd, Village, State" }
        ] as google.maps.places.AutocompletePrediction[])
        setIsLoading(false)
      }, 500)
    } else {
      setPredictions([])
      setShowPredictions(false)
    }
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                ref={inputRef}
                onChange={(e) => {
                  field.onChange(e)
                  handleInputChange(e.target.value)
                }}
                onFocus={() => setShowPredictions(true)}
                className="pr-10"
                placeholder="Start typing an address..."
              />
              {isLoading && (
                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>
          </FormControl>
          <FormMessage />
          
          {showPredictions && predictions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-popover border rounded-md shadow-lg">
              {predictions.map((prediction, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-left hover:bg-muted transition-colors text-sm"
                  onClick={() => {
                    form.setValue(name, prediction.description, { shouldValidate: true })
                    setShowPredictions(false)
                  }}
                >
                  {prediction.description}
                </button>
              ))}
            </div>
          )}
        </FormItem>
      )}
    />
  )
}