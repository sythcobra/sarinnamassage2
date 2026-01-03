export type Language = 'en' | 'th';

export interface Service {
  id: string;
  name: string;
  description: string;
  price60: number;
  price90: number;
  price120: number;
  stats: {
    relaxation: number; // 0-10
    pressure: number; // 0-10 (Soft to Strong)
    healthFocus: string[];
  };
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface BookingState {
  step: number;
  date: string;
  time: string;
  duration: string;
  treatment: string;
}

export type PageView = 'home' | 'menu' | 'reviews' | 'contact' | 'booking' | 'vacancies' | 'policy';

export enum ViewType {
  CHAT = 'chat',
  VISION = 'vision',
  IMAGE_GEN = 'image-gen',
  LIVE = 'live',
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}