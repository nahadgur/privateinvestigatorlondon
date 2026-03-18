// data/serviceLocationContent.ts
export const serviceLocationContent: Record<string, {
  intro: (city: string) => string[]; steps: (city: string) => string[]; whyPoints: (city: string) => string[];
}> = {
  "surveillance-investigations": {
    intro: (city) => [
      `Surveillance in ${city} requires an investigator with direct operational experience in the area — familiarity with the street layout, transport options, camera coverage, and the right approach for the type of location involved. Our matched investigators have conducted surveillance operations in ${city} and know how to maintain covert observation effectively in that environment.`,
      `We match ${city} clients with surveillance operatives whose experience matches your case type and location — not just whoever is available. Introductions are made within 24 hours and all cases are handled in complete confidence.`
    ],
    steps: (city) => [
      `Describe your surveillance requirement — subject, objective, and any known information about routines`,
      `We match you with a surveillance operative experienced in ${city} and your case type`,
      `Introduction made within 24 hours — operative reviews case and provides a cost estimate`,
      `Operational planning confirmed — target location, approach, and expected duration`,
      `Surveillance operation conducted with timestamped log and photographic evidence`,
      `Written report and evidence file delivered on completion`
    ],
    whyPoints: (city) => [
      `Operatives with direct experience working in ${city} — familiar with the area's environment and challenges`,
      `Legally compliant methods throughout — evidence structured for court or legal use`,
      `Comprehensive timestamped reports with photographic and video evidence`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "matrimonial-investigations": {
    intro: (city) => [
      `Matrimonial investigations in ${city} require an investigator who combines operational skill with the sensitivity to handle cases that are deeply personal. Our matched investigators are experienced in conducting discreet matrimonial surveillance in ${city} and in delivering findings clearly and compassionately to clients who may be facing significant personal difficulty.`,
      `All matrimonial cases are handled with complete confidentiality. Your identity and case details are never disclosed beyond your matched investigator.`
    ],
    steps: (city) => [
      `Describe your case — the nature of your concern and what you need to establish`,
      `We match you with a matrimonial investigator experienced in ${city} cases`,
      `Confidential introduction within 24 hours — investigator reviews case and advises on approach`,
      `Operational plan agreed — timescale, target locations, and expected costs confirmed`,
      `Investigation conducted with timestamped log and photographic evidence`,
      `Comprehensive report delivered with a personal debrief available`
    ],
    whyPoints: (city) => [
      `Experienced matrimonial investigators in ${city} — sensitive, discreet, and professionally skilled`,
      `Complete confidentiality at every stage — your identity is never disclosed to the subject`,
      `Evidence structured for family court and financial remedy proceedings where required`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "background-checks": {
    intro: (city) => [
      `Background checks for ${city} clients cover individual verification, business partner due diligence, employment history checks, and financial background assessment — conducted using lawful sources and documented to the standard required for legal or commercial use.`,
      `We match ${city} clients with investigators who have experience with your specific check type and the depth of due diligence your situation requires. Most standard checks are completed within 24 to 72 hours.`
    ],
    steps: (city) => [
      `Describe the background check you need — subject identity, purpose, and scope`,
      `We match you with an investigator experienced in your type of check`,
      `Introduction within 24 hours — scope and cost confirmed before work begins`,
      `Research conducted using lawful publicly accessible sources and verified databases`,
      `Report compiled with source documentation for every finding`,
      `Report delivered with debrief available for complex due diligence`
    ],
    whyPoints: (city) => [
      `Lawful methods throughout — every finding documented with its source`,
      `Scope tailored to your purpose — business due diligence differs from a tenant check`,
      `Most standard checks completed within 24 to 72 hours`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "asset-tracing": {
    intro: (city) => [
      `Asset tracing in ${city} establishes the property, vehicles, business interests, and financial holdings of an individual or company — using publicly accessible records, open source intelligence, and field investigation where required. Reports are structured for direct use by solicitors and enforcement agents.`,
      `We match ${city} clients with investigators experienced in asset tracing for your specific purpose — debt enforcement, financial remedy proceedings, or pre-litigation assessment. Introductions within 24 hours.`
    ],
    steps: (city) => [
      `Describe the asset trace required — subject identity and the purpose of the investigation`,
      `We match you with an asset tracing specialist with experience in your case type`,
      `Introduction within 24 hours — scope, cost, and timescale confirmed`,
      `Desk-based research across public registers, Companies House, and Land Registry`,
      `Field investigation where property use, business premises, or lifestyle evidence requires physical confirmation`,
      `Report delivered structured for enforcement or legal proceedings`
    ],
    whyPoints: (city) => [
      `Investigators experienced in asset tracing for enforcement and financial remedy proceedings`,
      `Reports structured for direct use by solicitors and enforcement agents`,
      `Field investigation capability in ${city} for lifestyle assessment and property confirmation`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "employee-investigations": {
    intro: (city) => [
      `Employee investigations in ${city} help businesses gather lawful evidence of suspected misconduct, sickness absence fraud, theft, or unauthorised activity — in a way that supports disciplinary proceedings without exposing the employer to legal liability. Our matched investigators advise on the legal boundaries before any operation begins.`,
      `We match ${city} businesses with investigators experienced in employment cases and familiar with the evidential requirements of disciplinary and tribunal proceedings.`
    ],
    steps: (city) => [
      `Describe the suspected conduct and the evidence you need`,
      `We match you with an investigator experienced in employee investigations in ${city}`,
      `Introduction within 24 hours — legal boundaries discussed and approach agreed`,
      `Investigation plan confirmed — surveillance, records review, or combined approach`,
      `Evidence gathered using lawful methods with precise documentation`,
      `Report structured for disciplinary proceedings or tribunal`
    ],
    whyPoints: (city) => [
      `Investigators who understand the legal boundaries of employee investigation — protecting the employer`,
      `Evidence structured for disciplinary proceedings and employment tribunal`,
      `Experience with sickness absence, fraud, theft, and competitive intelligence cases`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "process-serving": {
    intro: (city) => [
      `Process serving in ${city} covers personal service of court documents, divorce petitions, injunctions, statutory demands, and legal notices — with a sworn affidavit of service produced for court use. Our matched process servers cover all ${city} addresses and operate seven days a week.`,
      `For evasive subjects in ${city}, our investigators combine process serving with tracing capability — locating a current address before attempting service where the provided address has not produced a result.`
    ],
    steps: (city) => [
      `Provide the documents to be served and the recipient's identity and known address`,
      `We match you with a process server covering ${city}`,
      `Introduction within 24 hours — urgency and deadline confirmed`,
      `Service attempted at the provided address — up to three attempts included`,
      `Address tracing instructed if the subject is not found at the provided address`,
      `Affidavit of service prepared and delivered on successful service`
    ],
    whyPoints: (city) => [
      `Process servers covering all ${city} areas, operating seven days a week`,
      `Evasive subject experience — tracing and serving subjects who are actively avoiding service`,
      `Sworn affidavit of service produced to court standard on every instruction`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
};
