import { Event } from '../types';

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await fetch('/api/events');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const fetchEvent = async (id: string): Promise<Event> => {
  const response = await fetch(`/api/events/${id}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};