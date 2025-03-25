// src/services/eventApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Event, EventType } from '../types';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Event'],
  endpoints: (builder) => ({
    getEvents: builder.query<Event[], void>({
      query: () => 'events',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Event' as const, id })), 'Event']
          : ['Event'],
    }),
    getEvent: builder.query<Event, string>({
      query: (id) => `events/${id}`,
      providesTags: (result, error, id) => [{ type: 'Event', id }],
    }),
    createEvent: builder.mutation<Event, Partial<Event>>({
      query: (body) => ({
        url: 'events',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Event'],
    }),
    updateEvent: builder.mutation<Event, Partial<Event>>({
      query: ({ id, ...patch }) => ({
        url: `events/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Event', id }],
    }),
    deleteEvent: builder.mutation<void, string>({
      query: (id) => ({
        url: `events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Event'],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetEventQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;