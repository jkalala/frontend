
// src/types.ts
export type EventType = 'COUNCIL' | 'COMMITTEE' | 'WORKSHOP';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: EventType;  // Use the defined type
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    type: string;
  }
  
  export interface Registration {
    id: string;
    passCode: string;
    // Add other registration fields as needed
  }

  export interface Event {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    type: 'COUNCIL' | 'COMMITTEE' | 'WORKSHOP';
    image?: string;
  }