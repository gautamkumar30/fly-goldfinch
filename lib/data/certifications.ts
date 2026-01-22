export interface Certification {
  id: string;
  name: string;
  fullName: string;
  country: string;
  description: string;
  logo?: string;
}

export const certifications: Certification[] = [
  {
    id: 'australia-specialist',
    name: 'Australia Specialist',
    fullName: 'Premier Aussie Specialist Program (ASP)',
    country: 'Australia',
    description: 'Certified expert in Australian travel destinations and experiences.',
  },
  {
    id: 'nz-kiwi',
    name: 'KIWI Specialist',
    fullName: 'New Zealand KIWI Specialist Program',
    country: 'New Zealand',
    description: 'Trained specialist for New Zealand tourism experiences.',
  },
  {
    id: 'sa-fundi',
    name: 'Fundi Specialist',
    fullName: 'South Africa Fundi Travel Expert',
    country: 'South Africa',
    description: 'Expert knowledge of South African destinations and safari experiences.',
  },
  {
    id: 'switzerland-certified',
    name: 'Switzerland Certified',
    fullName: 'Switzerland Tourism Certified Partner',
    country: 'Switzerland',
    description: 'Official partner of Switzerland Tourism with specialized training.',
  },
  {
    id: 'hong-kong-specialist',
    name: 'Hong Kong Specialist',
    fullName: 'Hong Kong Tourism Board Certified',
    country: 'Hong Kong',
    description: 'Specialized training in Hong Kong travel experiences.',
  },
  {
    id: 'fiji-happiness',
    name: 'Fiji Happiness',
    fullName: 'Fiji Happiness Specialist (Fijimatai)',
    country: 'Fiji',
    description: 'Certified specialist for Fiji island experiences.',
  },
  {
    id: 'malaysia-certified',
    name: 'Visit Malaysia',
    fullName: 'Visit Malaysia Certified Partner',
    country: 'Malaysia',
    description: 'Official partner of Tourism Malaysia.',
  },
  {
    id: 'singapore-specialist',
    name: 'Singapore Specialist',
    fullName: 'Uniquely Singapore Certified',
    country: 'Singapore',
    description: 'Singapore Tourism Board certified partner.',
  },
];

export const getCertificationsByCountry = (country: string): Certification | undefined => {
  return certifications.find(c => c.country.toLowerCase() === country.toLowerCase());
};
