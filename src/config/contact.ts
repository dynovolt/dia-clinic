export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface ContactConfig {
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
  coordinates: GeoCoordinates;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export const contactConfig: ContactConfig = {
  phone: "+1 (800) 555-0199",
  email: "appointments@dia-clinic.com",
  address: "742 Medical Sciences Parkway, Suite 100, Boston, MA 02111",
  mapUrl: "https://maps.google.com",
  coordinates: { lat: 42.3501, lng: -71.0601 },
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};
