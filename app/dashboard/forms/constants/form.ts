export const tripTypes = [
  { value: "oneWay", label: "One Way" },
  { value: "roundTrip", label: "Round Trip" },
  { value: "waitReturn", label: "Driver Wait & Return" },
];

export const serviceTypes = [
  { value: "wheelchair", label: "Wheelchair Transport" },
  { value: "stretcher", label: "Stretcher/Gurney Transport" },
  { value: "ambulatory", label: "Ambulatory Transport" },
  { value: "airport", label: "Airport Transport" },
];

export const wheelchairSizes = [
  { value: "standard", label: "Standard Size" },
  { value: "bariatric", label: "Bariatric Size" },
  { value: "Scooter", label: "Scooter & Power Chair" },
];

export const oxygenOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
export const stairsAssistanceOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];
export const assistanceTransportation = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
 export const assistanceOptions = ["Caregiver", "Attendant", "Nurse"];

export const diagnosticCodes = [
  { code: "M62.81", description: "Muscle Weakness (Generalized)" },
  { code: "R26.89", description: "Other Abnormalities of Gait and Mobility" },
  { code: "R54", description: "Age-Related Physical Debility" },
  {
    code: "Z74.2",
    description:
      "Need for Assistance at Home and No Other Household Member Able to Render Care",
  },
  { code: "Z74.3", description: "Need for Continuous Supervision" },
  { code: "Z99.3", description: "Dependence on Wheelchair" },
  {
    code: "E11.9",
    description: "Type 2 Diabetes Mellitus Without Complications",
  },
  {
    code: "I11.9",
    description: "Hypertensive Heart Disease Without Heart Failure",
  },
  { code: "D64.9", description: "Anemia, Unspecified" },
  { code: "Z86.16", description: "Personal History of COVID-19" },
  { code: "Z89.511", description: "Acquired Absence of Right Leg Below Knee" },
  { code: "K74.69", description: "Other Cirrhosis of Liver" },
  {
    code: "J44.9",
    description: "Chronic Obstructive Pulmonary Disease, Unspecified",
  },
  { code: "I85.00", description: "Esophageal Varices Without Bleeding" },
  {
    code: "K21.9",
    description: "Gastro-Esophageal Reflux Disease Without Esophagitis",
  },
  {
    code: "N40.0",
    description:
      "Benign Prostatic Hyperplasia Without Lower Urinary Tract Symptoms",
  },
  { code: "R42", description: "Dizziness and Giddiness" },
  { code: "E78.5", description: "Hyperlipidemia, Unspecified" },
  {
    code: "E43",
    description: "Unspecified Severe Protein-Calorie Malnutrition",
  },
  { code: "I73.9", description: "Peripheral Vascular Disease, Unspecified" },
  { code: "D61.818", description: "Other Pancytopenia" },
  { code: "D46.9", description: "Myelodysplastic Syndrome, Unspecified" },
  {
    code: "Z59.3",
    description: "Problems Related to Living in Residential Institution",
  },
  {
    code: "Z91.89",
    description: "Other Personal Risk Factors, Not Elsewhere Classified",
  },
  {
    code: "Z75.1",
    description: "Person Awaiting Admission to Residential Institution",
  },
  {
    code: "M48.061",
    description:
      "Spinal Stenosis, Lumbar Region Without Neurogenic Claudication",
  },
  { code: "R13.10", description: "Dysphagia, Unspecified" },
  {
    code: "M86.171",
    description: "Other Acute Osteomyelitis, Right Ankle and Foot",
  },
  {
    code: "E11.65",
    description: "Type 2 Diabetes Mellitus with Hyperglycemia",
  },
  { code: "I48.0", description: "Paroxysmal Atrial Fibrillation" },
  { code: "I81", description: "Portal Vein Thrombosis" },
  { code: "Z89.5", description: "Acquired Absence of Kidney" },
  { code: "D69.6", description: "Thrombocytopenia, Unspecified" },
  { code: "N18.4", description: "Chronic Kidney Disease, Stage 4 (Severe)" },
  { code: "K92.2", description: "Gastrointestinal Hemorrhage, Unspecified" },
  { code: "F31.9", description: "Bipolar Disorder, Unspecified" },
  {
    code: "C64.1",
    description: "Malignant Neoplasm of Right Kidney, Except Renal Pelvis",
  },
  { code: "M48.9", description: "Spondylopathy, Unspecified" },
  {
    code: "F03.90",
    description: "Unspecified Dementia Without Behavioral Disturbance",
  },
  { code: "Z60.2", description: "Problems Related to Living Alone" },
  {
    code: "Z59.8",
    description: "Other Problems Related to Housing and Economic Circumstances",
  },
  { code: "G20", description: "Parkinson’s Disease" },
  { code: "G30.9", description: "Alzheimer’s Disease, Unspecified" },
  { code: "R16.1", description: "Splenomegaly, Not Elsewhere Classified" },
  {
    code: "E88.09",
    description:
      "Other Disorders of Plasma-Protein Metabolism, Not Elsewhere Classified",
  },
  { code: "H26.9", description: "Unspecified Cataract" },
  {
    code: "Z86.718",
    description: "Personal History of Other Venous Thrombosis and Embolism",
  },
  {
    code: "I13.10",
    description:
      "Hypertensive Heart and Chronic Kidney Disease Without Heart Failure",
  },
  {
    code: "F32.9",
    description: "Major Depressive Disorder, Single Episode, Unspecified",
  },
  { code: "Z11.52", description: "Encounter for Screening for COVID-19" },
  {
    code: "D61.89",
    description:
      "Other Specified Aplastic Anemias and Other Bone Marrow Failure Syndromes",
  },
  { code: "I73.9", description: "Peripheral Vascular Disease, Unspecified" },
  {
    code: "M81.0",
    description:
      "Age-Related Osteoporosis Without Current Pathological Fracture",
  },
  { code: "E66.9", description: "Obesity, Unspecified" },
  { code: "E03.9", description: "Hypothyroidism, Unspecified" },
  { code: "Z91.81", description: "History of Falling" },
  { code: "R41.82", description: "Altered Mental Status, Unspecified" },
  { code: "F05", description: "Delirium Due to Known Physiological Condition" },
  { code: "R32", description: "Unspecified Urinary Incontinence" },
  { code: "G35", description: "Multiple Sclerosis" },
  { code: "G62.9", description: "Polyneuropathy, Unspecified" },
  { code: "M25.561", description: "Pain in Right Knee" },
  { code: "M25.562", description: "Pain in Left Knee" },
  {
    code: "M17.11",
    description: "Unilateral Primary Osteoarthritis, Right Knee",
  },
  {
    code: "M17.12",
    description: "Unilateral Primary Osteoarthritis, Left Knee",
  },
  {
    code: "M47.812",
    description:
      "Spondylosis Without Myelopathy or Radiculopathy, Cervical Region",
  },
  { code: "Z74.09", description: "Other Reduced Mobility" },
  { code: "Z87.440", description: "Personal History of Urinary Calculi" },
  { code: "R29.6", description: "Falls, Repeated" },
  { code: "Z76.0", description: "Encounter for Issue of Repeat Prescriptions" },
  {
    code: "F06.8",
    description:
      "Other Specified Mental Disorders Due to Known Physiological Condition",
  },
  { code: "R15.9", description: "Full Incontinence of Feces" },
  { code: "G89.29", description: "Other Chronic Pain" },
  { code: "M19.90", description: "Osteoarthritis, Unspecified Site" },
  { code: "M24.2", description: "Disorder of Ligament, Unspecified" },
  { code: "F41.9", description: "Anxiety Disorder, Unspecified" },
  {
    code: "F33.9",
    description: "Major Depressive Disorder, Recurrent, Unspecified",
  },
  {
    code: "F09",
    description:
      "Unspecified Mental Disorder Due to Known Physiological Condition",
  },
  { code: "I87.2", description: "Venous Insufficiency (Chronic) (Peripheral)" },
  { code: "R60.0", description: "Localized Edema" },
  { code: "R50.9", description: "Fever, Unspecified" },
  { code: "Z59.4", description: "Lack of Adequate Food" },
  { code: "G47.00", description: "Insomnia, Unspecified" },
  { code: "R31.9", description: "Hematuria, Unspecified" },
  {
    code: "E53.8",
    description: "Deficiency of Other Specified B Group Vitamins",
  },
  { code: "E55.9", description: "Vitamin D Deficiency, Unspecified" },
  {
    code: "Z91.19",
    description:
      "Patient's Noncompliance with Other Medical Treatment and Regimen",
  },
  {
    code: "I25.10",
    description:
      "Atherosclerotic Heart Disease of Native Coronary Artery Without Angina Pectoris",
  },
  { code: "Z68.30", description: "Body Mass Index (BMI) 30.0-30.9, Adult" },
  { code: "Z68.32", description: "Body Mass Index (BMI) 32.0-32.9, Adult" },
  {
    code: "E66.01",
    description: "Morbid (Severe) Obesity Due to Excess Calories",
  },
  { code: "R26.0", description: "Ataxic Gait" },
  { code: "F72", description: "Severe Intellectual Disabilities" },
  { code: "M15.0", description: "Primary Generalized (Osteo)arthritis" },
  { code: "M25.50", description: "Pain in Unspecified Joint" },
  {
    code: "Z91.120",
    description: "Patient's Intentional Underdosing of Medication Regimen",
  },
];
