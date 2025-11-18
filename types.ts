import React from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number; // 1-5
  tags: string[];
}

export interface MemoryImage {
  id: string;
  url: string;
  caption: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
  color: string;
}