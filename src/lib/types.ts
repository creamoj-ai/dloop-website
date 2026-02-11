export type ZoneDemand = "alta" | "media" | "bassa";

export interface ZoneData {
  id: string;
  name: string;
  demand: ZoneDemand;
  orders_per_hour: number;
  distance_km: number;
  earning_min: number;
  earning_max: number;
  latitude: number;
  longitude: number;
  updated_at: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  earnings: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  city_zone: string;
}
