import React from 'react';
import type { VisaService, Skill, PortfolioItem, OtherCard } from './types';
import { SeoIcon, WordpressIcon, WritingIcon, EditIcon, DeliveryIcon, TimeIcon } from './components/Icons';

export const PRICING = {
  per_word: 1.5,
  per_word_discounted: 1.3,
  seo: 400,
  images: 100,
};

export const VISA_SERVICES: VisaService[] = [
  { name: 'Statement of Purpose (SOP)', description: 'Short (500–700 words)', price: '₹1,200' },
  { name: 'Statement of Purpose (SOP)', description: 'Standard (800–1,200 words)', price: '₹1,500–₹1,800' },
  { name: 'Statement of Purpose (SOP)', description: 'Complex / Specialized', price: '₹2,000–₹2,500' },
  { name: 'Visa Cover Letter', description: '300–500 words', price: '₹800–₹1,000' },
  { name: 'Letter of Explanation (LOE)', description: 'For visa applications', price: '₹1,000–₹1,200' },
  { name: 'Scholarship / Motivation Letter', description: 'Crafted to impress', price: '₹1,200–₹1,500' },
  { name: 'Editing & Proofreading', description: 'Refining your draft', price: '₹500–₹800 per doc' },
];

export const SKILLS: Skill[] = [
    { name: 'SEO & Keyword Research', description: 'Proficient with Google Keyword Planner & Semrush to find high-ranking, relevant keywords.', icon: SeoIcon },
    { name: 'WordPress Publishing', description: 'Experienced in uploading, formatting, and optimizing posts directly in WordPress.', icon: WordpressIcon },
    { name: 'SOP & Visa Writing', description: 'Skilled at drafting compelling Statements of Purpose and other critical visa documents.', icon: WritingIcon },
    { name: 'Editing & Proofreading', description: 'Ensuring grammatical accuracy, clarity, and adherence to your brand’s unique tone.', icon: EditIcon },
];

export const PORTFOLIO_LINKS: PortfolioItem[] = [
  {
    url: 'https://docs.google.com/document/d/19IPm4zoPAOxCUU2H4WUFDDOUMhitubXBU2F1RqkiUYI/edit?usp=drive_link',
    title: 'SEO-Optimized Blog Sample 1',
    description: 'An example of an in-depth, research-backed article designed to rank on search engines and engage readers.'
  },
  {
    url: 'https://docs.google.com/document/d/1IsBs7W6_zMsH0Q5xg885hNsaohsfoVdLGIxH6YM5AIs/edit?usp=sharing',
    title: 'SEO-Optimized Blog Sample 2',
    description: 'Demonstrates versatility in writing for a different industry, focusing on keyword integration and user intent.'
  }
];

export const WHY_CHOOSE_ME_POINTS = [
  '4+ years of professional writing experience.',
  'Strong focus on combining SEO with genuine user engagement.',
  'Proven track record of delivering high-quality, plagiarism-free content on time.',
  'Open to a paid trial to demonstrate quality and brand fit.'
];

export const OTHER_CARDS: OtherCard[] = [
  {
    title: "Delivery Capacity",
    description: "I can deliver 3–4 high-quality blogs per week, depending on word count and research complexity.",
    icon: DeliveryIcon,
  },
  {
    title: "Turnaround Time",
    description: "A standard 1,000-word blog is typically completed in 1–2 business days, including revisions.",
    icon: TimeIcon,
  },
];
