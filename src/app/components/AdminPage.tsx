import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { type Booking } from '../../utils/bookings';
import { api, clearToken } from '../../utils/api';

type StatusFilter = 'all' | Booking['status'];
type Lang = 'en' | 'sv';

const LANG_KEY = 'admin_lang';

const T = {
  en: {
    // Login
    appName: 'Nordic Uppsala Taxi',
    adminDashboard: 'Admin Dashboard',
    signIn: 'Sign In',
    username: 'Username',
    password: 'Password',
    invalidCredentials: 'Invalid username or password.',
    signingIn: 'Signing in...',
    backToMain: '← Back to main site',
    // Nav
    adminTag: 'Admin',
    loading: 'Loading...',
    refresh: '↻ Refresh',
    backToSite: 'Back to site',
    signOut: 'Sign Out',
    // Page
    bookingMgmt: 'Booking Management',
    bookingMgmtSub: 'View and manage all taxi bookings.',
    // Stats
    total: 'Total',
    pending: 'Pending',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
    bookingsLabel: 'bookings',
    // Filters
    searchPlaceholder: 'Search by name, phone, ID...',
    all: 'All',
    newestFirst: 'Newest first',
    nameAZ: 'Name A–Z',
    // Table
    id: 'ID',
    passenger: 'Passenger',
    route: 'Route',
    departure: 'Departure',
    vehicle: 'Vehicle',
    status: 'Status',
    action: 'Action',
    noBookings: 'No bookings found',
    showing: 'Showing',
    of: 'of',
    // Drawer
    bookingDetails: 'Booking Details',
    passengersLabel: 'passengers',
    childSeat: 'Child seat',
    pet: 'Pet',
    updateStatus: 'Update Status',
    deleteBooking: 'Delete Booking',
    confirmDelete: 'Delete this booking?',
    failedDelete: 'Failed to delete booking',
    failedStatus: 'Failed to update status',
    created: 'Created',
    // Change credentials
    changeCreds: 'Change Credentials',
    changeCredsSub: 'Update the admin username and password. You will need to log in again afterwards.',
    oldUsername: 'Current Username',
    oldPassword: 'Current Password',
    newUsername: 'New Username',
    newPassword: 'New Password',
    confirmNewPassword: 'Confirm New Password',
    save: 'Save',
    cancel: 'Cancel',
    saving: 'Saving...',
    credsUpdated: 'Credentials updated. Please log in again.',
    passwordsDontMatch: 'New passwords do not match.',
    passwordTooShort: 'Password must be at least 6 characters.',
    fillAllCredFields: 'Please fill in all fields.',
    changeCredsFailed: 'Failed to update credentials.',
  },
  sv: {
    // Login
    appName: 'Nordic Uppsala Taxi',
    adminDashboard: 'Adminpanel',
    signIn: 'Logga in',
    username: 'Användarnamn',
    password: 'Lösenord',
    invalidCredentials: 'Felaktigt användarnamn eller lösenord.',
    signingIn: 'Loggar in...',
    backToMain: '← Tillbaka till huvudsidan',
    // Nav
    adminTag: 'Admin',
    loading: 'Laddar...',
    refresh: '↻ Uppdatera',
    backToSite: 'Tillbaka till sidan',
    signOut: 'Logga ut',
    // Page
    bookingMgmt: 'Bokningshantering',
    bookingMgmtSub: 'Visa och hantera alla taxibokningar.',
    // Stats
    total: 'Totalt',
    pending: 'Väntar',
    confirmed: 'Bekräftad',
    completed: 'Slutförd',
    cancelled: 'Avbokad',
    bookingsLabel: 'bokningar',
    // Filters
    searchPlaceholder: 'Sök efter namn, telefon, ID...',
    all: 'Alla',
    newestFirst: 'Senaste först',
    nameAZ: 'Namn A–Ö',
    // Table
    id: 'ID',
    passenger: 'Passagerare',
    route: 'Rutt',
    departure: 'Avgång',
    vehicle: 'Fordon',
    status: 'Status',
    action: 'Åtgärd',
    noBookings: 'Inga bokningar hittades',
    showing: 'Visar',
    of: 'av',
    // Drawer
    bookingDetails: 'Bokningsdetaljer',
    passengersLabel: 'passagerare',
    childSeat: 'Barnstol',
    pet: 'Husdjur',
    updateStatus: 'Uppdatera status',
    deleteBooking: 'Ta bort bokning',
    confirmDelete: 'Ta bort denna bokning?',
    failedDelete: 'Det gick inte att ta bort bokningen',
    failedStatus: 'Det gick inte att uppdatera status',
    created: 'Skapad',
    // Change credentials
    changeCreds: 'Byt inloggningsuppgifter',
    changeCredsSub: 'Uppdatera adminanvändarnamn och lösenord. Du måste logga in igen efteråt.',
    oldUsername: 'Nuvarande användarnamn',
    oldPassword: 'Nuvarande lösenord',
    newUsername: 'Nytt användarnamn',
    newPassword: 'Nytt lösenord',
    confirmNewPassword: 'Bekräfta nytt lösenord',
    save: 'Spara',
    cancel: 'Avbryt',
    saving: 'Sparar...',
    credsUpdated: 'Uppgifterna har uppdaterats. Logga in igen.',
    passwordsDontMatch: 'De nya lösenorden matchar inte.',
    passwordTooShort: 'Lösenordet måste vara minst 6 tecken.',
    fillAllCredFields: 'Vänligen fyll i alla fält.',
    changeCredsFailed: 'Det gick inte att uppdatera uppgifterna.',
  },
} as const;

const statusColors: Record<Booking['status'], string> = {
  pending:   'bg-amber-100 text-amber-800 border border-amber-200',
  confirmed: 'bg-blue-100 text-blue-800 border border-blue-200',
  completed: 'bg-green-100 text-green-800 border border-green-200',
  cancelled: 'bg-red-100 text-red-800 border border-red-200',
};

const USABLE_STATUSES = ['pending', 'confirmed', 'completed', 'cancelled'] as const;

export default function AdminPage() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem(LANG_KEY)) as Lang | null;
    return saved === 'en' || saved === 'sv' ? saved : 'sv';
  });
  const tr = T[lang];

  const statusLabels: Record<Booking['status'], string> = {
    pending:   tr.pending,
    confirmed: tr.confirmed,
    completed: tr.completed,
    cancelled: tr.cancelled,
  };

  const setLangPersist = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem(LANG_KEY, l); } catch { /* ignore */ }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<'createdAt' | 'name'>('createdAt');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  // Change credentials modal
  const [showCredsModal, setShowCredsModal] = useState(false);
  const [credOldUser, setCredOldUser] = useState('');
  const [credOldPass, setCredOldPass] = useState('');
  const [credNewUser, setCredNewUser] = useState('');
  const [credNewPass, setCredNewPass] = useState('');
  const [credNewPass2, setCredNewPass2] = useState('');
  const [credError, setCredError] = useState('');
  const [credSaving, setCredSaving] = useState(false);

  const resetCredsForm = () => {
    setCredOldUser('');
    setCredOldPass('');
    setCredNewUser('');
    setCredNewPass('');
    setCredNewPass2('');
    setCredError('');
    setCredSaving(false);
  };

  const handleChangeCreds = async (e: React.FormEvent) => {
    e.preventDefault();
    setCredError('');

    if (!credOldUser.trim() || !credOldPass || !credNewUser.trim() || !credNewPass || !credNewPass2) {
      setCredError(tr.fillAllCredFields);
      return;
    }
    if (credNewPass.length < 6) {
      setCredError(tr.passwordTooShort);
      return;
    }
    if (credNewPass !== credNewPass2) {
      setCredError(tr.passwordsDontMatch);
      return;
    }

    setCredSaving(true);
    try {
      await api.changeAdminCredentials({
        oldUsername: credOldUser.trim(),
        oldPassword: credOldPass,
        newUsername: credNewUser.trim(),
        newPassword: credNewPass,
      });
      // Force re-login with new credentials
      alert(tr.credsUpdated);
      clearToken();
      setIsLoggedIn(false);
      setShowCredsModal(false);
      resetCredsForm();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : tr.changeCredsFailed;
      setCredError(msg || tr.changeCredsFailed);
      setCredSaving(false);
    }
  };

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getBookings();
      setBookings(data);
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes('401')) {
        setIsLoggedIn(false);
        clearToken();
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) fetchBookings();
  }, [isLoggedIn, fetchBookings]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      await api.login(username, password);
      setIsLoggedIn(true);
    } catch {
      setLoginError(tr.invalidCredentials);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    clearToken();
    setIsLoggedIn(false);
    setBookings([]);
  };

  const handleStatusChange = async (id: string, status: Booking['status']) => {
    try {
      await api.updateStatus(id, status);
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
      if (selectedBooking?.id === id) setSelectedBooking(prev => prev ? { ...prev, status } : null);
    } catch {
      alert(tr.failedStatus);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(tr.confirmDelete)) return;
    try {
      await api.deleteBooking(id);
      setBookings(prev => prev.filter(b => b.id !== id));
      if (selectedBooking?.id === id) setSelectedBooking(null);
    } catch {
      alert(tr.failedDelete);
    }
  };

  const filtered = bookings
    .filter(b => {
      const q = search.toLowerCase();
      return (
        (statusFilter === 'all' || b.status === statusFilter) &&
        (b.name.toLowerCase().includes(q) ||
          b.phone.includes(q) ||
          b.id.toLowerCase().includes(q) ||
          b.from.toLowerCase().includes(q) ||
          b.to.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b.createdAt.localeCompare(a.createdAt);
    });

  const stats = {
    total:     bookings.length,
    pending:   bookings.filter(b => b.status === 'pending').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  };

  // ─── Language toggle component ───────────────────────────────────────────────
  const LangToggle = ({ dark = false }: { dark?: boolean }) => (
    <div className={`inline-flex rounded-xl overflow-hidden border ${dark ? 'border-white/20' : 'border-gray-200'}`}>
      {(['sv', 'en'] as const).map(l => (
        <button
          key={l}
          onClick={() => setLangPersist(l)}
          className={`px-2.5 py-1 text-xs font-semibold uppercase transition-all ${
            lang === l
              ? (dark ? 'bg-[#efbf04] text-black' : 'bg-[#efbf04] text-black')
              : (dark ? 'bg-white/5 text-gray-300 hover:bg-white/10' : 'bg-white text-gray-500 hover:bg-gray-50')
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  // ─── Login ───────────────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-end mb-4">
            <LangToggle dark />
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#efbf04] mb-4 shadow-lg">
              <svg className="w-9 h-9 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5S16.67 13 17.5 13s1.5.67 1.5 1.5S18.33 16 17.5 16zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">{tr.appName}</h1>
            <p className="text-gray-400 text-sm mt-1">{tr.adminDashboard}</p>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-lg font-semibold text-white mb-6">{tr.signIn}</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{tr.username}</label>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{tr.password}</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04] transition-all"
                />
              </div>
              {loginError && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {loginError}
                </div>
              )}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full bg-[#efbf04] hover:bg-[#d9ab03] disabled:opacity-60 text-black font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-[#efbf04]/20 mt-2"
              >
                {loginLoading ? tr.signingIn : tr.signIn}
              </button>
            </form>
          </div>

          <div className="text-center mt-6">
            <Link to="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              {tr.backToMain}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Dashboard ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 font-['Rubik',sans-serif]">

      {/* Top Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#efbf04] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5S16.67 13 17.5 13s1.5.67 1.5 1.5S18.33 16 17.5 16zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-none">{tr.appName}</p>
                <p className="text-xs text-gray-400 leading-none mt-0.5">{tr.adminTag}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LangToggle />
              <button
                onClick={fetchBookings}
                disabled={loading}
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors hidden sm:block disabled:opacity-50"
              >
                {loading ? tr.loading : tr.refresh}
              </button>
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors hidden sm:block">
                {tr.backToSite}
              </Link>
              <button
                onClick={() => { resetCredsForm(); setShowCredsModal(true); }}
                title={tr.changeCreds}
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">{tr.signOut}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{tr.bookingMgmt}</h1>
          <p className="text-gray-500 text-sm mt-1">{tr.bookingMgmtSub}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.total}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
            <p className="text-xs text-gray-400 mt-1">{tr.bookingsLabel}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{tr.pending}</p>
            <p className="text-3xl font-bold text-amber-600 mt-1">{stats.pending}</p>
            <p className="text-xs text-gray-400 mt-1">{tr.bookingsLabel}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-green-100 shadow-sm">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">{tr.completed}</p>
            <p className="text-3xl font-bold text-green-600 mt-1">{stats.completed}</p>
            <p className="text-xs text-gray-400 mt-1">{tr.bookingsLabel}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-red-100 shadow-sm">
            <p className="text-xs font-semibold text-red-500 uppercase tracking-wide">{tr.cancelled}</p>
            <p className="text-3xl font-bold text-red-500 mt-1">{stats.cancelled}</p>
            <p className="text-xs text-gray-400 mt-1">{tr.bookingsLabel}</p>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Filters */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={tr.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04] transition-all"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {(['all', ...USABLE_STATUSES] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    statusFilter === s ? 'bg-[#efbf04] text-black shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {s === 'all' ? tr.all : statusLabels[s]}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#efbf04] bg-white text-gray-700"
            >
              <option value="createdAt">{tr.newestFirst}</option>
              <option value="name">{tr.nameAZ}</option>
            </select>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-12 text-gray-400 text-sm">{tr.loading}</div>
          )}

          {/* Desktop Table */}
          {!loading && (
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.id}</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.passenger}</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.route}</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.departure}</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.vehicle}</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.status}</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">{tr.action}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-16 text-gray-400 text-sm">{tr.noBookings}</td>
                    </tr>
                  ) : (
                    filtered.map(booking => (
                      <tr
                        key={booking.id}
                        onClick={() => setSelectedBooking(booking)}
                        className="hover:bg-gray-50/80 cursor-pointer transition-colors"
                      >
                        <td className="px-5 py-4 text-xs font-mono text-gray-400">{booking.id.slice(0, 8)}…</td>
                        <td className="px-5 py-4">
                          <p className="text-sm font-semibold text-gray-900">{booking.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{booking.phone}</p>
                          {booking.email && <p className="text-xs text-blue-400 mt-0.5">{booking.email}</p>}
                        </td>
                        <td className="px-5 py-4">
                          <p className="text-sm text-gray-700">📍 {booking.from}</p>
                          <p className="text-sm text-gray-700 mt-0.5">🏁 {booking.to}</p>
                        </td>
                        <td className="px-5 py-4 text-sm text-gray-600 whitespace-nowrap">{booking.departureTime}</td>
                        <td className="px-5 py-4">
                          <p className="text-sm text-gray-700">{booking.carSize}</p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {booking.passengers}👤
                            {booking.hasChild ? ' 👶' : ''}
                            {booking.hasPet ? ' 🐾' : ''}
                          </p>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${statusColors[booking.status]}`}>
                            {statusLabels[booking.status]}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                            <select
                              value={booking.status}
                              onChange={e => handleStatusChange(booking.id, e.target.value as Booking['status'])}
                              className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 outline-none focus:border-[#efbf04] bg-white"
                            >
                              {USABLE_STATUSES.map(s => (
                                <option key={s} value={s}>{statusLabels[s]}</option>
                              ))}
                            </select>
                            <button
                              onClick={() => handleDelete(booking.id)}
                              className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Mobile Cards */}
          {!loading && (
            <div className="md:hidden divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <p className="text-center py-12 text-gray-400 text-sm">{tr.noBookings}</p>
              ) : (
                filtered.map(booking => (
                  <div key={booking.id} className="p-4" onClick={() => setSelectedBooking(booking)}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{booking.name}</p>
                        <p className="text-sm text-gray-400">{booking.phone}</p>
                        {booking.email && <p className="text-xs text-blue-400">{booking.email}</p>}
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold ${statusColors[booking.status]}`}>
                        {statusLabels[booking.status]}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                      <p className="text-sm text-gray-600">📍 {booking.from} → 🏁 {booking.to}</p>
                      <p className="text-xs text-gray-400 mt-1">⏰ {booking.departureTime}</p>
                    </div>
                    <div className="flex gap-2" onClick={e => e.stopPropagation()}>
                      <select
                        value={booking.status}
                        onChange={e => handleStatusChange(booking.id, e.target.value as Booking['status'])}
                        className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-[#efbf04] bg-white"
                      >
                        {USABLE_STATUSES.map(s => (
                          <option key={s} value={s}>{statusLabels[s]}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="px-3 py-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/50 text-xs text-gray-400">
            {tr.showing} {filtered.length} {tr.of} {bookings.length} {tr.bookingsLabel}
          </div>
        </div>
      </div>

      {/* Detail Drawer */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setSelectedBooking(null)} />
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between z-10">
              <div>
                <p className="font-bold text-gray-900">{tr.bookingDetails}</p>
                <p className="text-xs text-gray-400 font-mono">{selectedBooking.id}</p>
              </div>
              <button onClick={() => setSelectedBooking(null)} className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5 space-y-5">
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-semibold ${statusColors[selectedBooking.status]}`}>
                  {statusLabels[selectedBooking.status]}
                </span>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{tr.passenger}</p>
                <p className="text-base font-bold text-gray-900">{selectedBooking.name}</p>
                <p className="text-sm text-gray-500 mt-1">{selectedBooking.phone}</p>
                {selectedBooking.email && (
                  <p className="text-sm text-blue-500 mt-1">{selectedBooking.email}</p>
                )}
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{tr.route}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#efbf04] flex-shrink-0" />
                    <p className="text-sm text-gray-700">{selectedBooking.from}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{selectedBooking.to}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">⏰ {selectedBooking.departureTime}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{tr.vehicle}</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">{selectedBooking.carSize}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-lg">👤 {selectedBooking.passengers} {tr.passengersLabel}</span>
                  {selectedBooking.hasChild && <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs px-3 py-1 rounded-lg">👶 {tr.childSeat}</span>}
                  {selectedBooking.hasPet && <span className="bg-orange-50 border border-orange-200 text-orange-700 text-xs px-3 py-1 rounded-lg">🐾 {tr.pet}</span>}
                </div>
                {selectedBooking.price > 0 && (
                  <p className="text-sm font-bold text-gray-900 mt-3">{selectedBooking.price} SEK</p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{tr.updateStatus}</p>
                <div className="grid grid-cols-2 gap-2">
                  {USABLE_STATUSES.map(s => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(selectedBooking.id, s)}
                      className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        selectedBooking.status === s ? 'bg-[#efbf04] text-black shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {statusLabels[s]}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => handleDelete(selectedBooking.id)} className="w-full py-3 rounded-xl bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition-all">
                {tr.deleteBooking}
              </button>

              <p className="text-xs text-gray-400 text-center">{tr.created}: {selectedBooking.createdAt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Change Credentials Modal */}
      {showCredsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => { if (!credSaving) { setShowCredsModal(false); resetCredsForm(); } }}
          />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <p className="font-bold text-gray-900 text-lg">{tr.changeCreds}</p>
              <p className="text-xs text-gray-500 mt-1">{tr.changeCredsSub}</p>
            </div>

            <form onSubmit={handleChangeCreds} className="p-6 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.oldUsername}</label>
                <input
                  type="text"
                  autoComplete="username"
                  value={credOldUser}
                  onChange={e => setCredOldUser(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04]/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.oldPassword}</label>
                <input
                  type="password"
                  autoComplete="current-password"
                  value={credOldPass}
                  onChange={e => setCredOldPass(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04]/30 transition-all"
                />
              </div>

              <div className="border-t border-gray-100 my-2" />

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.newUsername}</label>
                <input
                  type="text"
                  autoComplete="off"
                  value={credNewUser}
                  onChange={e => setCredNewUser(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04]/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.newPassword}</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={credNewPass}
                  onChange={e => setCredNewPass(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04]/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.confirmNewPassword}</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={credNewPass2}
                  onChange={e => setCredNewPass2(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-[#efbf04] focus:ring-1 focus:ring-[#efbf04]/30 transition-all"
                />
              </div>

              {credError && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5 text-red-700 text-sm">
                  {credError}
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setShowCredsModal(false); resetCredsForm(); }}
                  disabled={credSaving}
                  className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-xl transition-all disabled:opacity-60"
                >
                  {tr.cancel}
                </button>
                <button
                  type="submit"
                  disabled={credSaving}
                  className="flex-1 bg-[#efbf04] hover:bg-[#d9ab03] disabled:opacity-60 text-black font-bold py-2.5 rounded-xl transition-all"
                >
                  {credSaving ? tr.saving : tr.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
