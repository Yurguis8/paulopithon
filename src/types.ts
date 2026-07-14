export interface Product {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  image: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
