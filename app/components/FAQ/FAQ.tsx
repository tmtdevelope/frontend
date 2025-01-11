"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of medical transportation services do you offer?",
    answer:
      "We offer non-emergency medical transportation services including appointments, dialysis, therapy sessions, and hospital discharges.",
  },
  {
    question: "How do I schedule a ride?",
    answer:
      "You can schedule a ride by calling our dispatch center, using our online booking system, or through our mobile app.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance providers and Medicaid. Please contact us for specific coverage information.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently serve the greater metropolitan area and surrounding counties. Contact us for specific service area information.",
  },
  {
    question: "Are your drivers trained medical professionals?",
    answer:
      "Our drivers are certified in first aid and CPR, and receive specialized training in patient transport and safety protocols.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="py-16">
      <Container>
        <Typography
          variant="h2"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </Typography>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className="mb-4 shadow-sm border rounded-lg"
            >
              <AccordionSummary expandIcon={<ChevronDown />} className="">
                <Typography className="font-semibold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
