
// Fix: Added React import to provide access to the React namespace for type definitions
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}