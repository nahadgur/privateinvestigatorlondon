// data/locations.ts
export const LOCATIONS: Record<string, string[]> = {
  "Central London": ["City of London","Canary Wharf","Clerkenwell","Farringdon","Holborn","Chancery Lane","Aldgate","Liverpool Street","Moorgate","Bishopsgate","Bank","Blackfriars"],
  "West End & North London": ["Mayfair","Soho","Covent Garden","Fitzrovia","Bloomsbury","Marylebone","Islington","Camden","Hampstead","Highgate","Finchley","Barnet"],
  "East London": ["Shoreditch","Hoxton","Bethnal Green","Hackney","Dalston","Stratford","Bow","Poplar","Stepney","Whitechapel","Wapping","Bermondsey"],
  "South London": ["Brixton","Clapham","Battersea","Stockwell","Peckham","New Cross","Lewisham","Greenwich","Deptford","Elephant and Castle","Borough","Dulwich"],
  "West London": ["Kensington","Chelsea","Notting Hill","Hammersmith","Fulham","Chiswick","Ealing","Shepherd's Bush","Acton","Putney","Richmond","Wimbledon"],
  "North West & Outer London": ["Harrow","Wembley","Stanmore","Edgware","Hendon","Brent","Uxbridge","Ruislip","Northwood","Pinner","Watford","St Albans"]
};

export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}

export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
