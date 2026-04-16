import type { Booking } from './bookings';

const BASE_URL = 'http://localhost:3001';
const TOKEN_KEY = 'admin_token';

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function saveToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  const token = getToken();
  const res = await fetch(BASE_URL + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
  return data as T;
}

// Backend row → frontend Booking
function mapBooking(b: Record<string, unknown>): Booking {
  return {
    id: b.id as string,
    name: (b.name as string) ?? '',
    email: (b.email as string) ?? '',
    phone: b.phone as string,
    from: b.from as string,
    to: b.to as string,
    passengers: (b.passengerCount as number) ?? 1,
    carSize: (b.carSize as string) ?? '',
    hasChild: (b.childSeat as boolean) ?? false,
    hasPet: (b.havePet as boolean) ?? false,
    departureTime: (b.when as string) ?? '',
    price: (b.price as number) ?? 0,
    status: b.status as Booking['status'],
    createdAt: b.createdAt as string,
  };
}

// Frontend Booking input → backend body
function mapToBackend(booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) {
  return {
    name: booking.name,
    email: booking.email || null,
    phone: booking.phone,
    from: booking.from,
    to: booking.to,
    when: booking.departureTime,
    carSize: booking.carSize,
    passengerCount: booking.passengers,
    havePet: booking.hasPet,
    childSeat: booking.hasChild,
    price: booking.price,
  };
}

export const api = {
  // ── Admin auth ────────────────────────────────────────────────────────────
  async login(username: string, password: string): Promise<string> {
    const data = await request<{ success: boolean; token: string }>('POST', '/api/admin/login', { username, password });
    saveToken(data.token);
    return data.token;
  },

  // ── Bookings ─────────────────────────────────────────────────────────────
  async getBookings(): Promise<Booking[]> {
    const data = await request<{ success: boolean; data: Record<string, unknown>[] }>('GET', '/api/bookings');
    return data.data.map(mapBooking);
  },

  async createBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<Booking> {
    const data = await request<{ success: boolean; data: Record<string, unknown> }>('POST', '/api/bookings', mapToBackend(booking));
    return mapBooking(data.data);
  },

  async updateStatus(id: string, status: Booking['status']): Promise<void> {
    await request('PATCH', `/api/bookings/${id}/status`, { status });
  },

  async deleteBooking(id: string): Promise<void> {
    await request('DELETE', `/api/bookings/${id}`);
  },
};
