// data/cityContent.ts
export const cityPageContent = {
  introHeading: (cityName: string) => `Private Investigator Services in ${cityName}`,
  introParagraphs: (cityName: string) => [
    `Finding the right private investigator in ${cityName} means more than a directory search. Our matching service connects clients with investigators who have specific operational experience in ${cityName} and with your type of case — giving you a relevant introduction rather than a list of whoever is available.`,
    `Whether you need surveillance, a matrimonial investigation, a background check, asset tracing, or process serving in ${cityName}, our network includes vetted investigators across every investigation type. The matching is free and completely confidential.`
  ],
  matchingHeading: (cityName: string) => `Why ${cityName} Clients Choose Our Investigator Matching Service`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: "Case-Specific Matching", desc: `We review your case type, location, and objectives and match you with an investigator who has specific experience with exactly that kind of investigation in ${cityName} — not a general operative with no relevant background.` },
    { iconName: 'Shield', title: "Vetted Investigators Only", desc: `Every investigator in our network has been assessed on professional credentials, relevant experience, and operating history before joining. We turn away more applicants than we accept so you do not have to filter the unreliable options yourself.` },
    { iconName: 'Clock', title: "24-Hour Introductions", desc: `Most ${cityName} clients receive their first introduction within 24 hours. For urgent cases — imminent process serving, time-sensitive surveillance, or same-day requirements — faster matching is often possible.` },
    { iconName: 'CheckCircle', title: "Free Re-Match Guarantee", desc: `If your first introduction is not the right fit for your case, we will find you another at no charge. The right match between client and investigator makes a material difference to case outcomes.` }
  ],
  sidebarCta: (cityName: string) => ({
    heading: `Find a Private Investigator in ${cityName}`,
    description: `Describe your case and we will introduce you to the right investigator in ${cityName} within 24 hours. Completely confidential, no obligation, no cost.`
  }),
  sidebarFinance: (cityName: string) => ({
    heading: `Retainer-Based Engagement`,
    description: `Most investigators serving ${cityName} require a retainer before commencing work, with the balance payable on delivery of the completed report and evidence file.`
  }),
  bottomCta: (cityName: string) => ({
    heading: `Find Your Private Investigator in ${cityName} Today`,
    description: `Completely confidential. No obligation until you choose to proceed. Introductions within 24 hours.`
  }),
  schemaServiceTypes: [
    "surveillance-investigations",
    "matrimonial-investigations",
    "background-checks",
    "asset-tracing",
    "employee-investigations",
    "process-serving"
  ],
};
