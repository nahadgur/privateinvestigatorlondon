// data/serviceContent.ts
export const serviceContent: Record<string, {
  intro: string[]; benefits: { title: string; desc: string }[];
  candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[];
}> = {
  "surveillance-investigations": {
    intro: [
      "Professional surveillance is the core skill of private investigation — the ability to observe a subject covertly, document their activities accurately, and produce a report that stands up to legal scrutiny. In London, effective surveillance requires specific operational knowledge: familiarity with the transport network, awareness of camera coverage, and the ability to maintain covert observation in an urban environment without detection.",
      "Not all surveillance operatives are equal. An inexperienced operative loses subjects on the Tube, is spotted at static addresses, or produces reports that lack the detail and structure required for legal use. Our matched investigators are experienced London operatives with proven track records in your specific case type and area.",
      "All surveillance operations are conducted within UK law. Observation from public places, covert photography of subjects in public, and the production of timestamped evidence logs are standard professional practice. Methods that would constitute criminal offences are never used — and your matched investigator will explain exactly what their operation will involve before any work begins."
    ],
    benefits: [
      { "title": "Covert Observation Without Detection", "desc": "An experienced London operative knows how to maintain surveillance without alerting the subject — varying position, using appropriate cover, and adapting to the subject's movements. Detection compromises the operation and, in sensitive cases, can have serious personal consequences." },
      { "title": "Legally Admissible Evidence", "desc": "Surveillance evidence is only useful if it can be used. A professional investigator structures their operation and report to produce evidence that is factually precise, properly documented, and gathered using methods that will not be challenged in legal proceedings." },
      { "title": "Comprehensive Reporting", "desc": "A professional surveillance report contains a timestamped log of all observations, photographic and video evidence, location records, and a factual summary. The report is written to be understood by a court, tribunal, solicitor, or insurer — not just the client." },
      { "title": "Multi-Operative Capability", "desc": "Some surveillance operations require more than one operative — following a mobile subject across London, covering multiple exit points, or maintaining sustained coverage without risk of detection. Our network can coordinate multi-operative deployments where required." }
    ],
    candidateIntro: "Surveillance investigation is the right service for:",
    candidates: [
      "Individuals who need evidence of a partner's movements or behaviour for personal or legal purposes",
      "Employers who need evidence of an employee's activities during a period of claimed sickness absence",
      "Insurers and solicitors requiring surveillance evidence for personal injury or fraud cases",
      "Creditors who need evidence of a debtor's lifestyle inconsistent with their declared financial position",
      "Businesses suspecting employees of working for competitors or conducting unauthorised activity",
      "Anyone who needs factual, documented evidence of a subject's activities for legal or personal use"
    ],
    process: [
      { "title": "Case Briefing", "desc": "You brief the investigator on the subject, the objective, and any known information about the subject's routines, address, and vehicle. The investigator advises on the operational approach and provides a cost estimate for the planned operation." },
      { "title": "Pre-Surveillance Reconnaissance", "desc": "Before the main operation, the investigator typically conducts a reconnaissance of the target location — confirming access points, camera positions, and the best observation positions. This preparation significantly improves operational effectiveness." },
      { "title": "Surveillance Operation", "desc": "The operation is conducted according to the agreed plan. The investigator maintains a real-time timestamped log, gathers photographic and video evidence, and adapts their position and approach as the subject moves." },
      { "title": "Report and Evidence Delivery", "desc": "A comprehensive written report with attached evidence file is delivered on completion of the operation. The report is factually precise and structured for legal use. A verbal debrief is available for complex cases." }
    ],
  },
  "matrimonial-investigations": {
    intro: [
      "Matrimonial investigations require the same professional skill as any surveillance operation — combined with the sensitivity to handle cases where the client is often in significant emotional distress and the outcome will have major personal consequences. Our matched investigators are experienced in managing this balance: delivering factual evidence clearly without editorialising or influencing the client's decisions.",
      "The most common matrimonial instruction is infidelity investigation — establishing whether a partner is conducting an undisclosed relationship. But matrimonial investigations also cover cohabitation evidence for maintenance proceedings, financial behaviour during separation, and confirmation of a partner's declared address or employment status in contested proceedings.",
      "Every matrimonial case is handled with complete confidentiality. Your identity and case details are not disclosed beyond your matched investigator, and the investigation is conducted without the subject's knowledge."
    ],
    benefits: [
      { "title": "Factual Evidence Without Intrusion", "desc": "A professional investigation provides factual evidence of what was observed — without illegal intrusion, without accessing private devices, and without methods that could create legal liability for the client. What you receive is usable evidence gathered within the law." },
      { "title": "Evidence for Legal Proceedings", "desc": "Surveillance evidence of cohabitation, financial behaviour, or relationship patterns can be relevant in divorce proceedings, financial remedy applications, and child arrangement cases. A professionally structured report is written to be useful to your family law solicitor." },
      { "title": "Cohabitation Investigation", "desc": "Establishing cohabitation — rather than occasional overnight stays — requires documented evidence of a consistent pattern: address usage, domestic routines, combined financial arrangements. A thorough investigation distinguishes genuine cohabitation from a new relationship that has not yet reached that stage." },
      { "title": "Sensitivity and Discretion", "desc": "Matrimonial cases are handled by investigators experienced in managing client communication carefully. Results are delivered factually and clearly, with support for understanding what the evidence shows and what the appropriate next steps might be." }
    ],
    candidateIntro: "Matrimonial investigation is the right service for:",
    candidates: [
      "Individuals with genuine suspicions about a partner's fidelity who need factual confirmation before making decisions",
      "Those going through separation who need evidence of a former partner's cohabitation to vary a maintenance order",
      "Individuals in financial remedy proceedings who have reason to doubt their partner's declared financial position",
      "Those who need to confirm a partner's address or employment status for contested proceedings",
      "Anyone who needs factual, professionally gathered evidence of a partner's behaviour for legal or personal use"
    ],
    process: [
      { "title": "Confidential Case Assessment", "desc": "The investigator reviews your case, discusses the objective, and advises on the most appropriate approach. You are under no obligation at this stage. The case is assessed with complete confidentiality." },
      { "title": "Operational Planning", "desc": "Based on your briefing, the investigator develops an operational plan — identifying target locations, likely timescales, and the evidence required to meet your objective. A cost estimate is provided before work begins." },
      { "title": "Investigation", "desc": "The surveillance operation is conducted according to the agreed plan. The investigator maintains a timestamped log and gathers photographic and video evidence where appropriate." },
      { "title": "Report Delivery and Debrief", "desc": "A comprehensive factual report is delivered with supporting evidence. A personal debrief is offered — particularly important in matrimonial cases where the client may need time to process the findings." }
    ],
  },
  "background-checks": {
    intro: [
      "A professional background check provides verified information about an individual or business — drawn from public records, legally accessible databases, and open source intelligence. In a world where it is easy to misrepresent qualifications, conceal financial history, or obscure past directorships, proper due diligence provides protection that assumptions cannot.",
      "Background checks serve a wide range of purposes: pre-employment screening, tenant checks, business partner due diligence, romantic partner verification, and pre-litigation asset awareness. The scope of each check is tailored to its purpose — a check on a potential business partner requires different depth to a tenant reference check.",
      "All background checks are conducted using lawful methods. Our matched investigators use publicly accessible records, legally available databases, and open source research — never unlawful access to private data. The report is structured to document the source of every finding, ensuring its reliability and admissibility."
    ],
    benefits: [
      { "title": "Verified Information You Can Rely On", "desc": "A professional report documents the source of every finding — public record, database entry, or verified open source. You know not just what was found but how it was found, which determines how reliable it is and how it can be used." },
      { "title": "CCJ and Financial History", "desc": "County court judgements, insolvency events, and formal financial defaults are matters of public record. A professional check surfaces this information quickly and comprehensively — information that individuals and businesses sometimes actively conceal from potential partners or employers." },
      { "title": "Directorship and Corporate History", "desc": "Companies House records reveal past and current directorships, dissolved companies, and corporate structures. An individual with a pattern of failed companies, disqualifications, or undisclosed directorships represents a risk that only a thorough corporate background check will surface." },
      { "title": "Pre-Contract Protection", "desc": "Background checks conducted before signing a significant contract, entering a business partnership, or making a substantial financial commitment provide protection that is impossible to obtain after the event. The cost of a thorough check is trivial compared to the potential cost of a bad decision." }
    ],
    candidateIntro: "Background checks are the right service for:",
    candidates: [
      "Businesses conducting due diligence on potential partners, investors, or senior hires before a significant commitment",
      "Individuals considering a substantial financial transaction with someone whose background they cannot independently verify",
      "Landlords who require more thorough tenant screening than a basic reference agency provides",
      "Those entering a significant personal or romantic relationship who have reason to verify the other person's background",
      "Solicitors and insolvency practitioners requiring due diligence on individuals or entities in legal proceedings",
      "Anyone who needs verified information about a person or business before making a consequential decision"
    ],
    process: [
      { "title": "Scope Definition", "desc": "The investigator confirms the purpose of the check, the identity of the subject, and the specific information required. The scope is agreed upfront — this determines the cost, timescale, and what the report will contain." },
      { "title": "Research and Verification", "desc": "Research is conducted using lawful sources — public registers, court records, Companies House, electoral roll, credit reference data with appropriate consent, and open source intelligence. All sources are documented." },
      { "title": "Report Compilation", "desc": "Findings are compiled into a structured report with source documentation for every item. Where information cannot be verified, this is clearly noted — a professional report distinguishes confirmed findings from unverified intelligence." },
      { "title": "Delivery and Debrief", "desc": "The report is delivered with a summary of key findings. For complex due diligence reports, a verbal debrief is offered to ensure all findings are understood and any follow-up investigation identified." }
    ],
  },
  "asset-tracing": {
    intro: [
      "Asset tracing identifies and documents the assets of an individual or company — property, vehicles, business interests, and financial holdings — using publicly accessible records, open source intelligence, and field investigation. The purpose is typically to support enforcement of a judgement, inform financial remedy proceedings, or establish the true financial position of someone claiming poverty.",
      "A surprising number of asset traces produce results at odds with what the subject has declared. Property registered in a spouse's name, directorships in a relative's company, vehicles registered at an associate's address, and business income received through an undisclosed entity are all patterns that a thorough trace is designed to identify.",
      "Asset tracing reports are structured to be directly useful to solicitors and enforcement agents. The report identifies specific assets, their apparent value, their legal ownership, and the most likely route to enforcement. Our matched investigators have direct experience working with legal teams on contested financial proceedings."
    ],
    benefits: [
      { "title": "Enforcement Support", "desc": "A judgment is only as good as your ability to enforce it. An asset trace identifies the specific assets available for charging orders, third party debt orders, or controlled goods agreements — turning a paper judgment into recoverable money." },
      { "title": "Financial Remedy Evidence", "desc": "In divorce proceedings, a spouse who has concealed assets or transferred property to avoid a financial remedy order is a common problem. An asset trace provides the factual basis for a solicitor to challenge a Form E disclosure or apply for a freezing injunction." },
      { "title": "Lifestyle Assessment", "desc": "A subject living a lifestyle inconsistent with their declared financial position is a significant indicator of undisclosed assets. Surveillance evidence of expensive vehicles, holidays, or property use — combined with a desk-based asset trace — provides a compelling evidential picture for court." },
      { "title": "Corporate Structure Analysis", "desc": "Assets concealed through corporate structures — multiple companies, nominee directors, offshore arrangements — require analysis of company filings, directorship networks, and corporate registration records. Our investigators are experienced in unravelling complex corporate concealment." }
    ],
    candidateIntro: "Asset tracing is the right service for:",
    candidates: [
      "Creditors holding a court judgment who need to identify assets available for enforcement",
      "Solicitors acting in financial remedy proceedings where the other party's disclosure is suspected to be incomplete",
      "Individuals owed money by someone claiming to have no assets",
      "Businesses considering legal action who need to assess whether the defendant has assets worth pursuing",
      "Trustees in bankruptcy or insolvency practitioners tracing assets that may have been concealed before insolvency",
      "Anyone who needs to establish the true financial position of an individual or company"
    ],
    process: [
      { "title": "Subject Identification", "desc": "The investigator confirms the identity details of the subject — full name, date of birth, known addresses, and any known business interests. Accurate identification is essential before any search can be relied upon." },
      { "title": "Desk-Based Research", "desc": "Land Registry, Companies House, DVLA, electoral roll, court records, and open source searches are conducted systematically. All findings are documented with source references." },
      { "title": "Field Investigation", "desc": "Where desk research indicates property use, business premises, or lifestyle indicators requiring physical confirmation, field operatives conduct discreet observation and verification." },
      { "title": "Report for Legal Use", "desc": "The completed report identifies each asset located, its apparent ownership, estimated value where ascertainable, and the recommended enforcement route. The report is structured to be used directly by enforcement solicitors." }
    ],
  },
  "employee-investigations": {
    intro: [
      "Employee investigations serve businesses that have reason to suspect misconduct, dishonesty, or behaviour inconsistent with an employee's stated situation. The most common instructions are sickness absence investigations, suspected theft or fraud, unauthorised use of company assets, and suspected work for competitors during employment.",
      "Employee investigations must be conducted lawfully and proportionately. An investigation that breaches an employee's legal rights — particularly under GDPR and the Human Rights Act — can expose the employer to more liability than the original misconduct. Professional investigators understand these boundaries and advise employers on what can and cannot be done before any operation begins.",
      "Evidence gathered in a properly conducted investigation supports disciplinary proceedings, employment tribunal defence, and in cases of fraud or theft, police reports and civil recovery actions. A poorly conducted investigation — or one conducted without legal advice — can undermine proceedings entirely."
    ],
    benefits: [
      { "title": "Legally Defensible Evidence", "desc": "Evidence for use in disciplinary or tribunal proceedings must be gathered using lawful methods and documented precisely. A professional investigator structures the operation and report to produce evidence that cannot be successfully challenged on procedural grounds." },
      { "title": "Sickness Absence Investigation", "desc": "An employee claiming incapacity who is observed engaged in activities inconsistent with their stated condition provides clear grounds for disciplinary action. A professional surveillance report documents exactly what was observed, when, and where — without interpretation or overreach." },
      { "title": "Fraud and Theft Evidence", "desc": "Suspected employee fraud or theft requires a methodical evidence-gathering approach — financial records analysis, surveillance, witness evidence, and digital forensics where appropriate. A professional investigator works with the employer and their legal advisers to build a comprehensive evidence file." },
      { "title": "Competitive Intelligence and IP Theft", "desc": "Employees suspected of working for a competitor or taking confidential information require targeted investigation — surveillance of their activities outside working hours, analysis of their professional connections, and coordination with digital forensics specialists if device evidence is relevant." }
    ],
    candidateIntro: "Employee investigation is the right service for:",
    candidates: [
      "Employers with reasonable grounds to suspect an employee of sickness absence fraud",
      "Businesses with evidence or strong suspicion of employee theft, fraud, or misappropriation",
      "HR and legal teams building an evidence file for disciplinary or tribunal proceedings",
      "Employers who suspect a current employee of working for a competitor or establishing a competing business",
      "Businesses dealing with a data breach or IP theft where the source is suspected to be internal",
      "Companies that need to establish the facts before deciding whether to proceed with formal action"
    ],
    process: [
      { "title": "Legal Assessment and Briefing", "desc": "The investigator reviews the suspected conduct, advises on what can lawfully be investigated, and discusses the evidential objective. Employers are advised to involve their employment solicitor at this stage to ensure the investigation and any subsequent disciplinary process are aligned." },
      { "title": "Investigation Planning", "desc": "The investigation approach is agreed — surveillance, records review, digital forensics, or a combination. Timescales, costs, and the specific evidence required for the employer's intended use are confirmed." },
      { "title": "Evidence Gathering", "desc": "The investigation is conducted according to the agreed plan using lawful methods. All evidence is documented precisely — who did what, when, where, and how it was observed." },
      { "title": "Report for Proceedings", "desc": "The report is structured for use in disciplinary proceedings or tribunal. The investigator is available to provide a witness statement or statement of evidence if proceedings advance to a formal hearing." }
    ],
  },
  "process-serving": {
    intro: [
      "Process serving is the formal delivery of legal documents to a named individual in a manner recognised by the courts. Personal service — direct delivery to the named individual, with confirmation of identity — is the most legally secure form and produces an affidavit of service that can be filed as proof of delivery.",
      "Professional process servers in London are experienced in effecting service efficiently and in handling evasive subjects — those who have been informed that proceedings are coming and are actively avoiding service. Tracing a current address, identifying the right moment for service, and documenting the service correctly are all skills that distinguish a professional from an untrained individual.",
      "Our matched process servers cover all London areas and operate seven days a week. For urgent instructions — injunctions, statutory demands, or imminent deadlines — same-day service attempts are available."
    ],
    benefits: [
      { "title": "Personal Service with Affidavit", "desc": "Personal service — delivery directly to the named individual — is the most legally secure form of service. A professional process server produces a sworn affidavit of service documenting when, where, and how service was effected, and how the recipient was identified." },
      { "title": "Evasive Subject Expertise", "desc": "Subjects who know proceedings are coming sometimes make themselves difficult to serve. A professional server has the skills to locate a current address, identify the right moment for service, and effect service on subjects who are actively avoiding it." },
      { "title": "Seven-Day Coverage Across London", "desc": "Legal deadlines do not respect business hours. Our network covers all London areas and operates seven days a week — including urgent same-day instructions for injunctions and statutory demands where time is critical." },
      { "title": "Court-Ready Documentation", "desc": "An affidavit of service is a sworn legal document. It must be accurate, complete, and properly sworn to be accepted by the court. Professional process servers produce affidavits that meet the court's requirements without amendment." }
    ],
    candidateIntro: "Process serving is the right service for:",
    candidates: [
      "Solicitors requiring personal service of divorce petitions, claim forms, injunctions, or statutory demands",
      "Individuals in legal proceedings who need to effect service on an uncooperative respondent or defendant",
      "Creditors who need to serve a statutory demand as a precursor to bankruptcy or winding-up proceedings",
      "Those who need to serve an injunction at short notice on a named individual in London",
      "Anyone whose attempt to self-serve has been refused, evaded, or is otherwise not producing an affidavit of service"
    ],
    process: [
      { "title": "Instruction and Document Review", "desc": "The process server reviews the documents to be served, confirms the identity details of the recipient, and identifies the address or addresses where service will be attempted. Urgency and deadline requirements are confirmed." },
      { "title": "Service Attempt", "desc": "Service is attempted at the address provided. The server identifies the recipient, effects service, and records the time, location, and circumstances. Up to three attempts are included in the standard instruction." },
      { "title": "Address Tracing", "desc": "If the subject is not found at the provided address, tracing methods are used to locate a current address — electoral roll, credit reference data with consent, open source research, and field investigation of known associated addresses." },
      { "title": "Affidavit of Service", "desc": "On successful service, a sworn affidavit of service is prepared documenting all relevant details. The affidavit is provided to the instructing solicitor or client for filing with the court." }
    ],
  },
};
