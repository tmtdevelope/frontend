import {
  Bed,
  WheelchairPickup,
  Stairs,
  Accessibility,
  LocalHospital,
  DirectionsBoat,
  TransferWithinAStation,
  MedicalServices,
} from "@mui/icons-material";

export const services = [
  {
    title: "Gurney Transportation",
    description:
      "Our fleet is equipped with specialized equipment to ensure safe and secure transport for patients who need stretcher or gurney services. Our trained staff prioritize comfort and professionalism.",
    Icon: Bed,
  },
  {
    title: "Wheelchair Transportation",
    description:
      "Our fleet is equipped with wheelchair-accessible vehicles to accommodate both standard and bariatric wheelchairs. We offer professional assistance and ensure secure transport for patients requiring wheelchair services. We prioritize safety and comfort during every trip.",
    Icon: WheelchairPickup,
  },
  {
    title: "Stairs Assistance",
    description:
      "Our team is trained to provide stairs assistance for patients in multi-level homes or apartments. We use specialized equipment to safely transport patients up or down stairs, ensuring comfort and security.",
    Icon: Stairs,
  },
  {
    title: "Ambulatory Transport",
    description:
      "Ambulatory transportation is for patients who are mobile but need assistance. Our drivers provide extra help for walking to and from the vehicle, ensuring a safe and secure ride to medical appointments.",
    Icon: TransferWithinAStation,
  },
  {
    title: "Dialysis Transportation",
    description:
      "We provide regular and punctual dialysis transportation for patients who need to attend recurring treatments. Our focus is on timely service, ensuring patients can make their dialysis sessions without delay.",
    Icon: LocalHospital,
  },
  {
    title: "Seaport Transportation",
    description:
      "Trust Medical Transportation now offers Seaport Transportation services. Whether you need assistance getting to or from a seaport, we provide safe, reliable transportation for individuals, groups, and those requiring wheelchair or stretcher services. Our vehicles are equipped with ramps and hydraulic lifts to ensure smooth boarding for passengers with mobility challenges.",
    Icon: DirectionsBoat,
  },
  {
    title: "Hospital Discharge Transportation",
    description:
      "Our hospital discharge transportation ensures patients transition safely from hospital to home or other healthcare facilities after discharge. We work with medical staff to provide comfortable and timely transport.",
    Icon: Accessibility,
  },
  {
    title: "Medical Transportation",
    description:
      "Medical transportation provides essential services for non-emergency transport to medical appointments, hospitals, or other healthcare facilities. Services include wheelchair and gurney transport, as well as assistance for those with limited mobility. Reliable and safe, medical transportation ensures that patients arrive on time and comfortably to their appointments, reducing missed treatments and improving healthcare access.",
    Icon: MedicalServices,
  },
];
