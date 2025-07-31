export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
}

export interface AboutData {
  bio: string;
  email: string;
  phone: string;
  location: string;
  socials: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface Blog {
  title: string;
  summary?: string;
}

export interface ContactData {
  message: string;
  email: string;
  phone: string;
}

export interface PortfolioFormData {
  hero: HeroData;
  about: AboutData;
  skills: string[];
  services: Service[];
  portfolio: Project[];
  testimonials: Testimonial[];
  blog: Blog;
  contact: ContactData;
}
