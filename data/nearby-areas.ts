// data/nearby-areas.ts
export const NEARBY_AREAS: Record<string, string[]> = {
  "city-of-london": ["Moorgate","Clerkenwell","Aldgate","Liverpool Street","Canary Wharf"],
  "canary-wharf": ["City of London","Poplar","Bermondsey","Greenwich","Wapping"],
  "mayfair": ["Soho","Marylebone","Fitzrovia","Kensington","Covent Garden"],
  "kensington": ["Chelsea","Notting Hill","Mayfair","Hammersmith","Fulham"],
  "islington": ["Angel","Clerkenwell","Hackney","Camden","Highbury"],
  "shoreditch": ["Hoxton","Hackney","Bethnal Green","Clerkenwell","Liverpool Street"],
  "brixton": ["Clapham","Stockwell","Herne Hill","Peckham","Streatham"],
  "hammersmith": ["Fulham","Chiswick","Shepherd's Bush","Putney","Ealing"],
  "camden": ["Islington","Kentish Town","Hampstead","King's Cross","Bloomsbury"],
  "hackney": ["Shoreditch","Dalston","Stoke Newington","Islington","Bethnal Green"]
};

export function getNearbyAreas(slug: string): string[] {
  return NEARBY_AREAS[slug] || [];
}
