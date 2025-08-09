import React from 'react';

export interface PricingDetails {
  rate: number;
  writingFee: number;
  seoFee: number;
  imageFee: number;
  total: number;
}

export interface VisaService {
  name: string;
  description: string;
  price: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface OtherCard {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface PortfolioItem {
  url: string;
  title: string;
  description: string;
}
