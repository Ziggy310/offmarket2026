import { useState } from "react";
import { Plus, Trash2, Edit, LogOut, Upload, Eye, EyeOff } from "lucide-react";
import type { HappeningNowData } from "@/components/HappeningNow";

const ADMIN_PASSWORD = "offmkt2025";

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  entry: string;
  description: string;
  featured: boolean;
}

const initialEvents: Event[] = [
  { id: 1, name: "Roda de Samba", date: "2025-03-07", time: "19:00", entry: "Free Entry", description: "Authentic samba circle", featured: true },
  { id: 2, name: "Samba de Tarde", date: "2025-03-15", time: "15:00", entry: "Ticketed", description: "Afternoon samba with lunch", featured: true },
  { id: 3, name: "Ritmo Futuro Showcase", date: "2025-03-14", time: "17:00", entry: "Free Entry", description: "Electronic music showcase", featured: false },
];

const defaultHappeningNow: HappeningNowData = {
  visible: true,
  eventName: "DIA DAS CRIANÇAS",
  date: "Sábado, 1 de Junho",
  time: "A partir das 14h",
  description: "Uma tarde especial para os mais pequenos. Atividades, animação e muita diversão para toda a família no espaço Off Market.",
  entryType: "free",
};
export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [tab, setTab] = useState<"events" | "happeningnow" | "gallery" | "info">("events");
  const [happeningNow, setHappeningNow] = useState<HappeningNowData>(defaultHappeningNow);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuth(true);
      setError("");
    } else {
      setError("Wrong password");
    }
  };

  const handleSave = () => {
    if (editingEvent) {
      setEvents(events.map((ev) => ev.id === editingEvent.id ? { ...ev, ...formData } : ev));
    } else {
      setEvents([...events, { id: Date.now(), ...formData }]);
    }
    setShowForm(false);
    setEditingEvent(null);
    setFormData({ name: "", date: "", time: "", entry: "Free Entry", description: "", featured: false });
  };

  const handleEdit = (ev: Event) => {
    setEditingEvent(ev);
    setFormData({ name: ev.name, date: ev.date, time: ev.time, entry: ev.entry, description: ev.description, featured: ev.featured });
    setShowForm(true);
  };

  const handleDelete = (id: number) => setEvents(events.filter((ev) => ev.id !== id));

  if (!auth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-card border border-border rounded-lg p-8 w-full max-w-sm">
          <h1 className="font-display text-3xl text-foreground text-center mb-6">ADMIN LOGIN</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none mb-4"
          />
          {error && <p className="text-primary text-sm mb-4 font-body">{error}</p>}
          <button type="submit" className="w-full bg-primary text-primary-foreground font-display text-lg tracking-wider py-3 rounded-full hover:bg-primary/90 transition-colors">
            LOG IN
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <h1 className="font-display text-xl text-foreground">OFF MKT ADMIN</h1>
          <button onClick={() => setAuth(false)} className="flex items-center gap-1 text-muted-foreground hover:text-primary font-body text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(["events", "gallery", "info"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg font-display text-base tracking-wider transition-colors ${
                tab === t ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {tab === "events" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl text-foreground">EVENTS MANAGER</h2>
              <button onClick={() => { setShowForm(true); setEditingEvent(null); setFormData({ name: "", date: "", time: "", entry: "Free Entry", description: "", featured: false }); }} className="flex items-center gap-1 bg-primary text-primary-foreground font-display tracking-wider px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" /> ADD EVENT
              </button>
            </div>

            {showForm && (
              <div className="bg-card border border-border rounded-lg p-6 mb-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Event Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background border border-border rounded-lg px-4 py-2 font-body text-foreground focus:border-primary focus:outline-none" />
                  <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="bg-background border border-border rounded-lg px-4 py-2 font-body text-foreground focus:border-primary focus:outline-none" />
                  <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="bg-background border border-border rounded-lg px-4 py-2 font-body text-foreground focus:border-primary focus:outline-none" />
                  <select value={formData.entry} onChange={(e) => setFormData({ ...formData, entry: e.target.value })} className="bg-background border border-border rounded-lg px-4 py-2 font-body text-foreground focus:border-primary focus:outline-none">
                    <option>Free Entry</option>
                    <option>Ticketed</option>
                    <option>Reservations Required</option>
                  </select>
                </div>
                <textarea placeholder="Description" rows={3} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-2 font-body text-foreground focus:border-primary focus:outline-none resize-none" />
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 font-body text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} className="accent-primary" />
                    {formData.featured ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    Publish to Homepage
                  </label>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleSave} className="bg-primary text-primary-foreground font-display px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">SAVE</button>
                  <button onClick={() => { setShowForm(false); setEditingEvent(null); }} className="bg-muted text-muted-foreground font-display px-6 py-2 rounded-full text-sm hover:bg-muted/80 transition-colors">CANCEL</button>
                </div>
              </div>
            )}

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-display text-sm text-muted-foreground tracking-wider">NAME</th>
                    <th className="text-left p-3 font-display text-sm text-muted-foreground tracking-wider hidden md:table-cell">DATE</th>
                    <th className="text-left p-3 font-display text-sm text-muted-foreground tracking-wider hidden md:table-cell">ENTRY</th>
                    <th className="text-left p-3 font-display text-sm text-muted-foreground tracking-wider hidden md:table-cell">FEATURED</th>
                    <th className="text-right p-3 font-display text-sm text-muted-foreground tracking-wider">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((ev) => (
                    <tr key={ev.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-body text-sm text-foreground">{ev.name}</td>
                      <td className="p-3 font-body text-sm text-muted-foreground hidden md:table-cell">{ev.date}</td>
                      <td className="p-3 hidden md:table-cell"><span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">{ev.entry}</span></td>
                      <td className="p-3 hidden md:table-cell">{ev.featured ? <Eye className="w-4 h-4 text-primary" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}</td>
                      <td className="p-3 text-right">
                        <button onClick={() => handleEdit(ev)} className="text-muted-foreground hover:text-primary mr-2 transition-colors"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(ev.id)} className="text-muted-foreground hover:text-primary transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "gallery" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl text-foreground">GALLERY MANAGER</h2>
              <button className="flex items-center gap-1 bg-primary text-primary-foreground font-display tracking-wider px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
                <Upload className="w-4 h-4" /> UPLOAD PHOTOS
              </button>
            </div>
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="font-body text-muted-foreground">Gallery management requires Lovable Cloud for image storage. Enable Cloud to upload and manage photos.</p>
            </div>
          </div>
        )}

        {tab === "info" && (
          <div>
            <h2 className="font-display text-2xl text-foreground mb-6">QUICK INFO</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-1">Phone</label>
                <p className="font-body text-foreground">+351 937 208 678</p>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-1">Address</label>
                <p className="font-body text-foreground">N125 395, 8125-017 Quarteira, Algarve, Portugal</p>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-1">Hours</label>
                <p className="font-body text-foreground">Tue–Thu: 6:30PM–12AM · Fri–Sat: 6:30PM–2AM · Sun: 7PM–12AM · Mon: Closed</p>
              </div>
              <p className="font-body text-xs text-muted-foreground italic">Enable Lovable Cloud to make these editable and persist changes.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
