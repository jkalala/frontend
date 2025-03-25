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