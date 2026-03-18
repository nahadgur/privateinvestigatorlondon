// data/services.ts
export interface FAQ { question: string; answer: string; }
export interface Service { id: string; title: string; slug: string; description: string; image: string; icon: string; color: string; faqs: FAQ[]; }
export const services: Service[] = [
  {
    "id": "surveillance-investigations",
    "title": "Surveillance Investigations",
    "slug": "surveillance-investigations",
    "description": "Professional surveillance operations across London. Static and mobile surveillance, covert filming, subject tracking, and comprehensive written and photographic reports suitable for court, insurance, or personal use.",
    "faqs": [
      { "question": "How is surveillance conducted legally in London?", "answer": "Lawful surveillance involves observing subjects in public places or from public vantage points where there is no reasonable expectation of privacy. Investigators cannot trespass on private property, look through windows into private spaces, or intercept private communications. Evidence gathered from a public place — street footage, photography of a subject entering or leaving a location — is generally admissible in civil proceedings. A professional investigator will explain exactly what their surveillance will and will not cover before any operation begins." },
      { "question": "How long does a surveillance operation typically last?", "answer": "This depends entirely on the objective. Some clients need a single day of surveillance to confirm or disprove a specific suspicion. Others require multiple days across different times and locations to establish a pattern of behaviour. Most surveillance operations in London run for two to five days before a meaningful report can be produced. Your investigator will advise on the optimal duration based on your case requirements and the subject's known routines." },
      { "question": "What does a surveillance report contain?", "answer": "A professional surveillance report contains a written log of all observations with timestamped entries, photographic and/or video evidence gathered during the operation, details of locations and movements observed, and a factual summary. Reports are written to be factually precise and legally defensible — they record what was observed, not interpretations. Your investigator will advise on the appropriate format for your intended use, whether personal, legal, or insurance-related." }
    ],
    "image": "/images/surveillance-investigations.png", "icon": "Eye", "color": "brand"
  },
  {
    "id": "matrimonial-investigations",
    "title": "Matrimonial Investigations",
    "slug": "matrimonial-investigations",
    "description": "Discreet matrimonial and relationship investigations for London clients. Infidelity investigations, confirmation of suspicions, cohabitation evidence, and financial behaviour investigations — handled with complete sensitivity and confidentiality.",
    "faqs": [
      { "question": "How do you handle matrimonial investigations sensitively?", "answer": "Matrimonial investigations require more sensitivity than most case types because the client is often in significant emotional distress and the outcome — whatever it is — will have major personal consequences. Our matched investigators are experienced in managing client communication with care, providing factual reports without editorialising, and supporting clients in understanding what the evidence shows and what it does not. Every case is handled in complete confidence." },
      { "question": "Can surveillance evidence be used in divorce proceedings?", "answer": "Evidence of behaviour, cohabitation, and financial conduct can be relevant in divorce and financial remedy proceedings. Surveillance evidence confirming a change in living arrangements may be relevant to maintenance calculations or child arrangement orders. Evidence of dissipation of matrimonial assets may be relevant in financial proceedings. Your family law solicitor should advise on relevance and admissibility for your specific circumstances — your investigator can liaise directly with your legal team where helpful." },
      { "question": "What is a cohabitation investigation?", "answer": "A cohabitation investigation establishes whether a former spouse or partner is living with a new partner — relevant because maintenance payments (spousal support) typically end on cohabitation. Investigators gather evidence of overnight stays, shared address use, combined utility accounts, and day-to-day domestic patterns consistent with cohabitation rather than occasional visits. This evidence is commonly used to apply to the court to vary or terminate a maintenance order." }
    ],
    "image": "/images/matrimonial-investigations.png", "icon": "Heart", "color": "brand"
  },
  {
    "id": "background-checks",
    "title": "Background Checks & Due Diligence",
    "slug": "background-checks",
    "description": "Comprehensive background checks and due diligence investigations for individuals and businesses. Employment verification, financial history, criminal record screening, company director checks, and pre-contract due diligence on individuals and businesses.",
    "faqs": [
      { "question": "What does a professional background check include?", "answer": "A professional background check typically includes verification of identity and address history, county court judgement (CCJ) and insolvency searches, company directorships past and present, electoral roll and open source verification, professional qualification and employment history checks, and media and public record searches. The scope is tailored to the purpose — a check on a potential business partner is different from a tenant screening or pre-employment check." },
      { "question": "Are background checks legal under GDPR?", "answer": "Background checks conducted for legitimate purposes using lawful methods are legal under UK GDPR. The key is having a legitimate basis for processing the information and not accessing data through unlawful means. A professional investigator will conduct background checks using legally accessible sources — public registers, court records, Companies House, credit reference data accessed with appropriate consent, and open source intelligence. Unlawful methods — hacking, blagging, or accessing protected databases — are illegal regardless of the purpose." },
      { "question": "How quickly can a background check be completed?", "answer": "A standard background check on an individual can typically be completed within 24 to 72 hours for a basic report, or three to five working days for a comprehensive due diligence report. Complex corporate due diligence involving multiple entities, international verification, or tracing through multiple directorships may take longer. Your investigator will confirm a realistic timescale after reviewing the scope of what is required." }
    ],
    "image": "/images/background-checks.png", "icon": "Search", "color": "brand"
  },
  {
    "id": "asset-tracing",
    "title": "Asset Tracing",
    "slug": "asset-tracing",
    "description": "Asset tracing investigations for creditors, solicitors, and individuals. Locate hidden assets, property, vehicles, bank accounts, and business interests to support debt recovery, financial remedy proceedings, or enforcement of judgements.",
    "faqs": [
      { "question": "What assets can be traced by a private investigator?", "answer": "Asset tracing investigations can locate UK property ownership through Land Registry searches, vehicle registrations through DVLA records, company directorships and shareholdings through Companies House, business premises and trading addresses through open source and field investigation, and lifestyle indicators inconsistent with declared financial position through surveillance and observation. Overseas assets require specialist international tracing capability — something to confirm with your investigator at the outset." },
      { "question": "How is asset tracing used in legal proceedings?", "answer": "Asset tracing evidence supports enforcement of county court judgements, applications for charging orders over property, third party debt orders against bank accounts, and financial remedy applications in divorce proceedings. A well-documented asset trace provides your solicitors with the information needed to identify the most effective enforcement route and to challenge false declarations of financial position. Investigators can work directly with your legal team to ensure the report meets the evidential requirements of your proceedings." },
      { "question": "What if a debtor claims to have no assets?", "answer": "Debtors who claim to have no traceable assets are sometimes concealing them — in the names of associates, through dissolved and reformed companies, or through offshore structures. A professional asset trace goes beyond the obvious searches to look for patterns of concealment: property transferred shortly before a judgement, directorships in relatives' names, and lifestyle evidence inconsistent with declared poverty. Not all claims of insolvency are genuine, and a thorough trace frequently locates assets that were intended to remain hidden." }
    ],
    "image": "/images/asset-tracing.png", "icon": "MapPin", "color": "brand"
  },
  {
    "id": "employee-investigations",
    "title": "Employee Investigations",
    "slug": "employee-investigations",
    "description": "Workplace and employee investigations for London businesses. Suspected fraud, theft, or misconduct; false sickness absence claims; data theft and IP investigations; and covert surveillance of employees suspected of working for competitors.",
    "faqs": [
      { "question": "Can employers legally investigate employees?", "answer": "Yes — employers have legitimate grounds to investigate employees suspected of misconduct, fraud, or dishonesty. However, investigations must be conducted lawfully, proportionately, and in a way that does not constitute an unlawful breach of the employee's privacy rights under GDPR and the Human Rights Act. A professional investigator will advise on what can and cannot be done legally in your specific circumstances before any investigation begins — protecting both the evidence gathered and the employer from legal exposure." },
      { "question": "What is a sickness absence investigation?", "answer": "A sickness absence investigation establishes whether an employee on sick leave is genuinely incapacitated as claimed, or is engaged in activities inconsistent with their stated condition. Surveillance of an employee claiming a back injury who is observed carrying heavy loads or playing sport, for example, provides evidence for a disciplinary process and may also be relevant to insurance fraud. Investigators document what is observed factually — the report records activities witnessed, not medical conclusions." },
      { "question": "How is employee investigation evidence used in disciplinary proceedings?", "answer": "Evidence gathered by a private investigator is typically introduced as part of the employer's evidence in a disciplinary hearing. The investigator may be asked to provide a witness statement or, in employment tribunal proceedings, a statement of evidence. Reports must be factually precise and gathered using lawful methods to withstand challenge. Employment law solicitors often work alongside investigators to ensure the investigation and disciplinary process are conducted correctly from the outset." }
    ],
    "image": "/images/employee-investigations.png", "icon": "Briefcase", "color": "brand"
  },
  {
    "id": "process-serving",
    "title": "Process Serving",
    "slug": "process-serving",
    "description": "Professional process serving across London. Personal service of court documents, divorce petitions, injunctions, statutory demands, and legal notices — with full affidavit of service for court use. Swift, reliable, and legally compliant.",
    "faqs": [
      { "question": "What is process serving and when is it required?", "answer": "Process serving is the formal delivery of legal documents to a named individual in a legally recognised manner. It is required for divorce petitions, court claim forms, injunctions, statutory demands, and various other legal proceedings where the recipient must be formally notified. Personal service — delivery directly to the named individual — is the most secure form and produces an affidavit of service that can be filed with the court as proof of delivery." },
      { "question": "What happens if a subject is evading service?", "answer": "Some individuals actively avoid being served — not answering their door, changing address, or otherwise making themselves difficult to locate. A professional process server has methods for locating and effecting service on evasive subjects: observation of known addresses and workplaces, tracing of current address through investigative methods, and use of surveillance techniques to identify the right moment for service. If personal service proves impossible, substitute service or service by alternative means (including social media or email in some cases) can be applied for from the court." },
      { "question": "What is an affidavit of service?", "answer": "An affidavit of service is a sworn statement made by the process server confirming that service was effected — who was served, when, where, what documents were served, and how the server identified the recipient. It is a legally admissible document that can be filed with the court as proof that the other party has been formally notified of proceedings. A professionally prepared affidavit of service is essential for proceedings to advance where the other party subsequently claims not to have received the documents." }
    ],
    "image": "/images/process-serving.png", "icon": "FileText", "color": "brand"
  }
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
