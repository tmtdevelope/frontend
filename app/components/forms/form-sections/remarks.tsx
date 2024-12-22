"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"
import { TransportFormValues } from "@/lib/validations/transport"

interface RemarksProps {
  form: UseFormReturn<TransportFormValues>
}

export function RemarksSection({ form }: RemarksProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Additional Remarks</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remarks</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter any additional information or special requirements"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}