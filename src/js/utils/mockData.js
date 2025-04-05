
// Mock data for lab reports visualization

export const getLabReportByPatientId = (patientId) => {
  return mockLabReports.find(report => report.patientId === patientId);
};

export const mockLabReports = [
  {
    id: "REP-001",
    patientId: "PT-12345",
    patientName: "John Smith",
    reportDate: "2025-03-10",
    categories: [
      {
        id: "CBC",
        name: "Complete Blood Count (CBC)",
        description: "Measures various components and features of your blood",
        tests: [
          {
            id: "HGB",
            name: "Hemoglobin",
            value: 14.2,
            previousValues: [13.9, 14.1, 13.8],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 13.5, max: 17.5, unit: "g/dL" },
            isAbnormal: false,
            description: "Protein in your red blood cells that carries oxygen to your body's organs and tissues"
          },
          {
            id: "WBC",
            name: "White Blood Cell Count",
            value: 11.5,
            previousValues: [7.2, 7.5, 7.1],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 4.5, max: 11.0, unit: "10^3/μL" },
            isAbnormal: true,
            description: "Cells that help fight infections by attacking bacteria, viruses, and germs"
          },
          {
            id: "PLT",
            name: "Platelet Count",
            value: 250,
            previousValues: [245, 260, 255],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 150, max: 450, unit: "10^3/μL" },
            isAbnormal: false,
            description: "Cells that help your blood clot and prevent excessive bleeding"
          },
          {
            id: "RBC",
            name: "Red Blood Cell Count",
            value: 5.1,
            previousValues: [4.9, 5.0, 4.8],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 4.5, max: 5.5, unit: "10^6/μL" },
            isAbnormal: false,
            description: "Cells that carry oxygen from your lungs to the rest of your body"
          }
        ]
      },
      {
        id: "LIPID",
        name: "Lipid Profile",
        description: "Measures fats and fatty substances in your blood",
        tests: [
          {
            id: "CHOL",
            name: "Total Cholesterol",
            value: 210,
            previousValues: [220, 225, 230],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0, max: 200, unit: "mg/dL" },
            isAbnormal: true,
            description: "Measures all the cholesterol in your blood"
          },
          {
            id: "HDL",
            name: "HDL Cholesterol",
            value: 55,
            previousValues: [50, 52, 48],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 40, max: 60, unit: "mg/dL" },
            isAbnormal: false,
            description: "Good cholesterol that helps remove other forms of cholesterol from your bloodstream"
          },
          {
            id: "LDL",
            name: "LDL Cholesterol",
            value: 130,
            previousValues: [142, 145, 148],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0, max: 100, unit: "mg/dL" },
            isAbnormal: true,
            description: "Bad cholesterol that can build up in your arteries"
          },
          {
            id: "TRIG",
            name: "Triglycerides",
            value: 140,
            previousValues: [150, 155, 160],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0, max: 150, unit: "mg/dL" },
            isAbnormal: false,
            description: "Type of fat found in your blood"
          }
        ]
      },
      {
        id: "LFT",
        name: "Liver Function Test",
        description: "Measures various chemicals and proteins in your blood to evaluate liver function",
        tests: [
          {
            id: "ALT",
            name: "Alanine Transaminase",
            value: 35,
            previousValues: [30, 32, 28],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0, max: 40, unit: "U/L" },
            isAbnormal: false,
            description: "Enzyme found mainly in the liver that indicates liver health"
          },
          {
            id: "AST",
            name: "Aspartate Aminotransferase",
            value: 42,
            previousValues: [35, 38, 36],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0, max: 40, unit: "U/L" },
            isAbnormal: true,
            description: "Enzyme found in the liver and other tissues that can indicate liver damage"
          },
          {
            id: "BIL",
            name: "Total Bilirubin",
            value: 0.8,
            previousValues: [0.7, 0.9, 0.8],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0.1, max: 1.2, unit: "mg/dL" },
            isAbnormal: false,
            description: "Substance produced during the breakdown of red blood cells"
          }
        ]
      },
      {
        id: "THYROID",
        name: "Thyroid Profile",
        description: "Checks the function of your thyroid gland",
        tests: [
          {
            id: "TSH",
            name: "Thyroid Stimulating Hormone",
            value: 4.8,
            previousValues: [4.5, 4.6, 4.7],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 0.4, max: 4.0, unit: "mIU/L" },
            isAbnormal: true,
            description: "Controls how much thyroxine (T4) and triiodothyronine (T3) your thyroid makes"
          },
          {
            id: "T4",
            name: "Thyroxine",
            value: 8.5,
            previousValues: [8.7, 8.6, 8.8],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 4.5, max: 11.2, unit: "μg/dL" },
            isAbnormal: false,
            description: "Main hormone produced by your thyroid gland"
          },
          {
            id: "T3",
            name: "Triiodothyronine",
            value: 120,
            previousValues: [125, 118, 122],
            previousDates: ["2025-01-10", "2024-09-15", "2024-06-20"],
            referenceRange: { min: 80, max: 200, unit: "ng/dL" },
            isAbnormal: false,
            description: "Active form of thyroid hormone that regulates your body's metabolic rate"
          }
        ]
      }
    ]
  },
  {
    id: "REP-002",
    patientId: "PT-67890",
    patientName: "Jane Doe",
    reportDate: "2025-04-01",
    categories: [
      {
        id: "CBC",
        name: "Complete Blood Count (CBC)",
        description: "Measures various components and features of your blood",
        tests: [
          {
            id: "HGB",
            name: "Hemoglobin",
            value: 12.1,
            previousValues: [12.3, 12.5, 12.0],
            previousDates: ["2025-02-01", "2024-10-15", "2024-07-20"],
            referenceRange: { min: 12.0, max: 15.5, unit: "g/dL" },
            isAbnormal: false,
            description: "Protein in your red blood cells that carries oxygen to your body's organs and tissues"
          },
          {
            id: "WBC",
            name: "White Blood Cell Count",
            value: 6.8,
            previousValues: [7.0, 6.5, 6.9],
            previousDates: ["2025-02-01", "2024-10-15", "2024-07-20"],
            referenceRange: { min: 4.5, max: 11.0, unit: "10^3/μL" },
            isAbnormal: false,
            description: "Cells that help fight infections by attacking bacteria, viruses, and germs"
          },
          {
            id: "PLT",
            name: "Platelet Count",
            value: 320,
            previousValues: [310, 300, 315],
            previousDates: ["2025-02-01", "2024-10-15", "2024-07-20"],
            referenceRange: { min: 150, max: 450, unit: "10^3/μL" },
            isAbnormal: false,
            description: "Cells that help your blood clot and prevent excessive bleeding"
          }
        ]
      },
      {
        id: "LIPID",
        name: "Lipid Profile",
        description: "Measures fats and fatty substances in your blood",
        tests: [
          {
            id: "CHOL",
            name: "Total Cholesterol",
            value: 185,
            previousValues: [190, 195, 200],
            previousDates: ["2025-02-01", "2024-10-15", "2024-07-20"],
            referenceRange: { min: 0, max: 200, unit: "mg/dL" },
            isAbnormal: false,
            description: "Measures all the cholesterol in your blood"
          },
          {
            id: "HDL",
            name: "HDL Cholesterol",
            value: 65,
            previousValues: [63, 60, 62],
            previousDates: ["2025-02-01", "2024-10-15", "2024-07-20"],
            referenceRange: { min: 40, max: 60, unit: "mg/dL" },
            isAbnormal: true,
            description: "Good cholesterol that helps remove other forms of cholesterol from your bloodstream"
          },
          {
            id: "LDL",
            name: "LDL Cholesterol",
            value: 95,
            previousValues: [100, 105, 110],
            previousDates: ["2025-02-01", "2024-10-15", "2024-07-20"],
            referenceRange: { min: 0, max: 100, unit: "mg/dL" },
            isAbnormal: false,
            description: "Bad cholesterol that can build up in your arteries"
          }
        ]
      }
    ]
  }
];
