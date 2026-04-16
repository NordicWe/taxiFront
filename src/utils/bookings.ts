import { api } from './api';

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  passengers: number;
  carSize: string;
  hasChild: boolean;
  hasPet: boolean;
  departureTime: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export async function getBookings(): Promise<Booking[]> {
  return api.getBookings();
}

export async function addBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<Booking> {
  return api.createBooking(booking);
}

export async function updateBookingStatus(id: string, status: Booking['status']): Promise<void> {
  return api.updateStatus(id, status);
}

export async function deleteBooking(id: string): Promise<void> {
  return api.deleteBooking(id);
}
