export type ScreenView = 
  | 'home' 
  | 'mattress-collection' 
  | 'diwan-cots' 
  | 'custom-size-builder' 
  | 'bulk-institutional-orders' 
  | 'visit-our-unit';

export type MattressCategory = 
  | 'all' 
  | 'latex' 
  | 'pocket-spring' 
  | 'orthopaedic' 
  | 'memory-foam' 
  | 'coir';

export interface MattressModel {
  id: string;
  name: string;
  subtitle: string;
  category: MattressCategory;
  firmnessScore: number; // 1 - 10
  firmnessLabel: string;
  scaleRange: string;
  thicknessOptions: string[];
  warrantyYears: number;
  sizesAvailable: string;
  startingPrice: number;
  suitedFor: string;
  internalCore: string;
  imageUrl: string;
  badge?: string;
  featured?: boolean;
  description: string;
  features: string[];
}

export interface CotModel {
  id: string;
  name: string;
  woodType: string;
  dimensions: string;
  storageType: string;
  startingPrice: number;
  imageUrl: string;
  description: string;
}

export interface QuoteFormState {
  mattressName: string;
  length: number;
  width: number;
  thickness: number;
  quantity: number;
  customerName: string;
  phone: string;
  city: string;
  deliveryType: 'door-delivery' | 'factory-pickup';
  notes: string;
}

export interface QuizAnswers {
  sleepPosition: string;
  bodySupport: string;
  partnerDisturbance: string;
  firmnessPreference: string;
}
