// data/pricing.ts
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; serviceIncludes: string; description: string; }
export const pricingTiers: PricingTier[] = [
  { "treatment": "Surveillance Investigations", "slug": "surveillance-investigations", "priceFrom": 55, "priceTo": 85, "typicalDuration": "Per operative hour", "serviceIncludes": "Mobile and static surveillance, covert photography and video, timestamped log, written report, evidence file", "description": "Surveillance in London is typically charged per operative hour, with a minimum engagement of four to six hours. Rates vary based on the number of operatives required, the complexity of the area, and whether specialist equipment is needed. Multi-day operations may attract a day rate. Always confirm the minimum engagement and what is included in the hourly rate before instructing." },
  { "treatment": "Matrimonial Investigations", "slug": "matrimonial-investigations", "priceFrom": 65, "priceTo": 95, "typicalDuration": "Per operative hour", "serviceIncludes": "Covert surveillance, photographic evidence, relationship pattern documentation, comprehensive written report", "description": "Matrimonial surveillance is charged similarly to general surveillance — per operative hour with a minimum engagement. The total cost depends on how many days of surveillance are required to achieve the evidential objective. A typical matrimonial investigation requiring confirmation of a specific pattern of behaviour runs to two to four operative days. A clear case objective discussed upfront allows the investigator to estimate the likely total cost." },
  { "treatment": "Background Checks & Due Diligence", "slug": "background-checks", "priceFrom": 150, "priceTo": 800, "typicalDuration": "Fixed fee per report", "serviceIncludes": "Identity verification, CCJ and insolvency searches, Companies House checks, employment verification, open source intelligence", "description": "Background checks are typically charged as a fixed fee based on the scope of the report. A basic individual check costs £150 to £300. A comprehensive due diligence report on a business partner or corporate entity costs £400 to £800 or more depending on complexity and the number of individuals or entities involved. Confirm exactly what is included before instructing." },
  { "treatment": "Asset Tracing", "slug": "asset-tracing", "priceFrom": 250, "priceTo": 1200, "typicalDuration": "Fixed fee or day rate", "serviceIncludes": "Property and land registry searches, vehicle traces, company directorship searches, lifestyle assessment, written report", "description": "Asset tracing is charged as a fixed fee for standard report-based work, or a day rate for field investigation. A desk-based asset trace including standard register searches costs £250 to £500. A comprehensive trace including field investigation and lifestyle assessment costs £600 to £1,200 or more. Complex cases involving multiple entities or suspected concealment are quoted individually." },
  { "treatment": "Employee Investigations", "slug": "employee-investigations", "priceFrom": 55, "priceTo": 85, "typicalDuration": "Per operative hour", "serviceIncludes": "Covert surveillance, evidence gathering, timestamped log, legally compliant report suitable for disciplinary proceedings", "description": "Employee investigations involving surveillance are charged per operative hour on the same basis as general surveillance. Report-based investigations — fraud analysis, digital forensics, or records review — are typically charged at a fixed fee or day rate. Corporate clients with ongoing investigation requirements may negotiate a retained arrangement with their matched investigator." },
  { "treatment": "Process Serving", "slug": "process-serving", "priceFrom": 95, "priceTo": 350, "typicalDuration": "Fixed fee per instruction", "serviceIncludes": "Up to three service attempts, affidavit of service, GPS-verified service record where required", "description": "Process serving is typically charged as a fixed fee per instruction covering a defined number of service attempts — usually three. The fee varies based on location within London and the urgency of service. Evasive subject tracing and additional attempts beyond the initial instruction are charged separately. An affidavit of service is included as standard." }
];

export const servicePricingMap: Record<string, string[]> = {
  "surveillance-investigations": ["surveillance-investigations"],
  "matrimonial-investigations": ["matrimonial-investigations"],
  "background-checks": ["background-checks"],
  "asset-tracing": ["asset-tracing"],
  "employee-investigations": ["employee-investigations"],
  "process-serving": ["process-serving"]
};

export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ["surveillance-investigations"];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}

export const treatmentIncludes = [
  "Mobile and static surveillance, covert photography and video, timestamped log, written report, evidence file",
  "Covert surveillance, photographic evidence, relationship pattern documentation, comprehensive written report",
  "Identity verification, CCJ and insolvency searches, Companies House checks, employment verification, open source intelligence",
  "Property and land registry searches, vehicle traces, company directorship searches, lifestyle assessment, written report",
  "Covert surveillance, evidence gathering, timestamped log, legally compliant report suitable for disciplinary proceedings",
  "Up to three service attempts, affidavit of service, GPS-verified service record where required"
];

export const financeInfo = {
  available: false,
  interestFree: false,
  monthlyFrom: 0,
  spreadOver: '',
  description: 'Most investigators require a retainer before commencing work, with the balance payable on delivery of the report. Corporate clients may arrange invoiced payment terms.'
};
