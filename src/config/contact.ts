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
  phone: "+91 63642 26888",
  email: "info@dia-clinic-placeholder.com",
  address: "2nd Main Rd, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043 (Located In: Swaathi Medicals)",
  mapUrl: "https://maps.google.com/?q=Dia+Speciality+Diabetes+Thyroid+Centre+Kasturi+Nagar+Bengaluru",
  coordinates: { lat: 13.0116, lng: 77.6548 },
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};
