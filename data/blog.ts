// data/blog.ts
export interface ContentBlock {
  type: string; text?: string; src?: string; alt?: string;
  items?: string[]; articles?: { slug: string; title: string; image?: string }[];
}
export interface BlogArticle {
  slug: string; title: string; metaTitle: string; metaDescription: string;
  category: string; publishDate: string; featuredImage: string; excerpt: string;
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-to-hire-private-investigator-london-guide',
    title: 'How to Hire a Private Investigator in London: A Complete Guide',
    metaTitle: 'How to Hire a Private Investigator in London 2026 | Complete Guide',
    metaDescription: 'Everything you need to know before hiring a private investigator in London — credentials to check, questions to ask, what to expect, and how to ensure the evidence gathered will be legally usable.',
    category: 'Client Guides',
    publishDate: '2026-01-15',
    featuredImage: '/images/hero-main.png',
    excerpt: 'Hiring a private investigator for the first time is unfamiliar territory for most people. This guide covers everything you need to know — from checking credentials to understanding what evidence you can and cannot legally obtain.',
    content: [
      { type: 'p', text: 'Private investigation is an unregulated profession in the UK. There is no licensing body, no mandatory qualification, and no register of approved investigators. This means anyone can set up as a private investigator — and some do, with no training and no understanding of the legal limits that determine whether the evidence they gather will be usable or worthless.' },
      { type: 'p', text: 'This guide covers what to check before instructing an investigator, what questions to ask, and how to ensure the evidence gathered will serve your purpose — whether that is personal confirmation, family court proceedings, or an employment tribunal.' },
      { type: 'h2', text: 'Credentials to check before instructing' },
      { type: 'p', text: 'While there is no mandatory licensing in the UK, credible investigators typically hold one or more of the following: membership of the Association of British Investigators (ABI), the Institute of Professional Investigators (IPI), or the World Association of Detectives (WAD). These bodies require members to adhere to codes of conduct and provide a complaints route if something goes wrong.' },
      { type: 'list', items: [
        'Ask for proof of professional body membership and check it directly with the organisation',
        'Ask how long they have been operating and in what capacity before going independent',
        'Ask for references from previous clients or solicitors where confidentiality permits',
        'Ask specifically what methods they will and will not use — a professional will answer clearly',
        'Never instruct anyone who claims to be able to access phone records, emails, or private accounts'
      ]},
      { type: 'h2', text: 'Questions to ask before agreeing to instruction' },
      { type: 'p', text: 'Before agreeing to any instruction, ask the investigator to explain exactly what their operation will involve, what methods they will use, and what the evidence file will contain. Ask specifically whether the methods are lawful and whether the report will be structured for legal use if that is your intention. A professional investigator will answer these questions directly — an evasive answer is a warning sign.' },
      { type: 'h2', text: 'What evidence can a private investigator legally gather?' },
      { type: 'p', text: 'Investigators can legally observe subjects in public places, photograph and film subjects where there is no reasonable expectation of privacy, conduct background research using publicly accessible records, and produce written reports of their observations. They cannot trespass, intercept communications, access private computer systems, or use any method constituting a criminal offence — regardless of who instructs them to do so.' },
    ]
  },
  {
    slug: 'surveillance-evidence-court-admissibility-uk',
    title: 'Is Surveillance Evidence Admissible in UK Courts?',
    metaTitle: 'Surveillance Evidence Admissibility UK | Private Investigator Guide',
    metaDescription: 'A clear guide to whether surveillance evidence gathered by a private investigator is admissible in UK courts — family proceedings, employment tribunal, county court, and insurance claims.',
    category: 'Legal Guides',
    publishDate: '2026-02-10',
    featuredImage: '/images/hero-services.png',
    excerpt: 'Surveillance evidence gathered by a private investigator is generally admissible in civil proceedings in the UK — but the method of gathering, the documentation, and the legal proceedings involved all affect how it can be used.',
    content: [
      { type: 'p', text: 'One of the most common questions clients ask before instructing a private investigator is whether the evidence gathered will actually be usable. The answer depends on three things: how the evidence was gathered, how it is documented, and what proceedings it is intended to support.' },
      { type: 'h2', text: 'Evidence gathered in public is generally admissible' },
      { type: 'p', text: 'Surveillance evidence — photographs, video footage, and written observation logs — gathered from a public place where the subject has no reasonable expectation of privacy is generally admissible in civil proceedings in England and Wales. Courts have consistently admitted this type of evidence in family proceedings, employment tribunals, and county court actions.' },
      { type: 'h2', text: 'How the evidence is documented matters' },
      { type: 'p', text: 'A court is more likely to admit evidence that is precisely documented — timestamped, location-referenced, and supported by a clear chain of custody from observation to report. A professional investigator structures their log and report to meet this standard. Informal notes, undated photographs, or a report that contains the investigator\'s interpretation rather than factual observation are all more vulnerable to challenge.' },
      { type: 'h2', text: 'Different proceedings apply different rules' },
      { type: 'list', items: [
        'Family court: surveillance evidence is routinely admitted in financial remedy and child arrangement proceedings',
        'Employment tribunal: surveillance of an employee in a public place is generally admissible for sickness absence cases',
        'County court: documentary evidence including background check reports and asset traces is standard evidence',
        'Criminal proceedings: different and stricter rules apply — the Crown Prosecution Service controls what is used',
        'Insurance claims: evidence submitted to an insurer is governed by contract and insurance law, not court rules'
      ]},
      { type: 'h2', text: 'Unlawfully gathered evidence' },
      { type: 'p', text: 'Evidence gathered through trespass, communications interception, or unauthorised computer access is not only inadmissible but may expose both the investigator and the client to criminal liability. A professional investigator will never use these methods — and any investigator who claims to access phone records or private accounts is either misrepresenting their capabilities or committing a crime.' },
    ]
  },
  {
    slug: 'private-investigator-london-costs-2026',
    title: 'Private Investigator Costs in London: What to Expect in 2026',
    metaTitle: 'Private Investigator Costs London 2026 | Fee Guide',
    metaDescription: 'A transparent guide to private investigator costs in London in 2026 — hourly rates for surveillance, fixed fees for background checks and asset tracing, process serving costs, and what affects the total.',
    category: 'Client Guides',
    publishDate: '2026-03-01',
    featuredImage: '/images/hero-services.png',
    excerpt: 'Private investigator fees in London vary significantly by service type and case complexity. This guide gives transparent guidance on what to expect — and what questions to ask before agreeing to any instruction.',
    content: [
      { type: 'p', text: 'Private investigator costs in London vary significantly depending on the type of investigation, the number of operatives required, and the complexity of the case. Understanding the typical fee structure before instructing protects you from surprises and allows you to budget accurately for your case.' },
      { type: 'h2', text: 'Surveillance and operational investigation' },
      { type: 'p', text: 'Surveillance work is typically charged per operative hour, ranging from £55 to £85 per hour in London depending on the investigator\'s experience and the nature of the operation. Most investigators require a minimum engagement of four to six hours per session. A two-day surveillance operation with one operative typically costs £600 to £1,000 in operative time, plus travel and any specialist equipment.' },
      { type: 'h2', text: 'Background checks and due diligence' },
      { type: 'p', text: 'Background checks are typically fixed-fee. A basic individual check covering CCJ searches, Companies House, and electoral roll verification costs £150 to £300. A comprehensive due diligence report on a business entity or individual with multiple company connections costs £400 to £800. International verification or complex corporate structures are quoted individually.' },
      { type: 'h2', text: 'Asset tracing and process serving' },
      { type: 'list', items: [
        'Asset tracing: £250 to £500 for a desk-based report, £600 to £1,200 for a comprehensive trace with field investigation',
        'Process serving: £95 to £200 for standard service within London, £200 to £350 for urgent or evasive-subject instructions',
        'Most investigators require a 50% retainer before commencing work',
        'Ask for a written cost estimate before instructing — this should specify what is included and what would be charged separately',
        'Be cautious of unusually low quotes — they often reflect limited capability or methods that will not produce usable evidence'
      ]},
      { type: 'h2', text: 'What affects the total cost' },
      { type: 'p', text: 'The total cost of an investigation depends primarily on how long it takes to achieve the evidential objective. A surveillance operation that achieves its objective on day one costs far less than one requiring five days to establish a pattern of behaviour. Providing the investigator with accurate information about the subject\'s known routines and locations at the outset is the single most effective way to keep costs controlled.' },
    ]
  }
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => blogArticles.find(a => a.slug === slug);
export const getAllArticleSlugs = (): string[] => blogArticles.map(a => a.slug);
