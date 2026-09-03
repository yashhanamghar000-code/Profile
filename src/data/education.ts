import { EducationItem, CertificationItem } from '../types';

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Engineering",
  field: "Information Technology",
  university: "Savitribai Phule Pune University",
  college: "MMCOE (Marathwada Mitra Mandal's College of Engineering)",
  location: "Pune, India",
  cgpa: "8.0 / 10.0",
  period: "2022 - 2026"
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    year: "Verified",
    skills: ["Data Analytics", "Forensic Data Analysis", "Executive Insights"]
  },
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group",
    platform: "Forage",
    year: "Verified",
    skills: ["Generative AI", "Data Transformation", "Predictive Framing"]
  },
  {
    title: "Tata Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group",
    platform: "Forage",
    year: "Verified",
    skills: ["Data Storytelling", "Executive Dashboards", "KPI Visuals"]
  }
];
