import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Loader2, LogOut, RefreshCw } from "lucide-react";

const SOURCE_LABELS: Record<string, string> = {
  "contact-form": "Contact Page",
  "quote-modal": "Pop-up Modal",
  "city-page-form": "City Page",
  "county-page-form": "County Page",
  "service-area-form": "Service Area",
};

const SOURCE_COLORS: Record<string, string> = {
  "contact-form": "bg-blue-100 text-blue-800",
  "quote-modal": "bg-purple-100 text-purple-800",
  "city-page-form": "bg-green-100 text-green-800",
  "county-page-form": "bg-amber-100 text-amber-800",
  "service-area-form": "bg-orange-100 text-orange-800",
};

interface Submission {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  address: string | null;
  roofType: string | null;
  message: string | null;
  source: string;
  createdAt: string;
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit", hour12: true,
  }).format(new Date(iso));
}

function formatRoofType(t: string | null) {
  const map: Record<string, string> = {
    tile: "Tile", flat: "Flat / Low Slope", metal: "Metal",
    shingle: "Shingle", foam: "Foam / SPF", other: "Other",
  };
  return t ? (map[t] ?? t) : null;
}

export default function Admin() {
  const [password, setPassword] = useState(() => sessionStorage.getItem("admin_pw") ?? "");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [search, setSearch] = useState("");
  const [filterSource, setFilterSource] = useState("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const fetchSubmissions = useCallback(async (pw: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/submissions", {
        headers: { "x-admin-password": pw },
      });
      if (res.status === 401) { setError("Wrong password."); setAuthed(false); return; }
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setSubmissions(data.submissions);
      setAuthed(true);
      sessionStorage.setItem("admin_pw", pw);
    } catch {
      setError("Could not load submissions. Is the API server running?");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) fetchSubmissions(saved);
  }, [fetchSubmissions]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    fetchSubmissions(password);
  }

  function logout() {
    sessionStorage.removeItem("admin_pw");
    setAuthed(false);
    setSubmissions([]);
    setPassword("");
  }

  const filtered = submissions.filter((s) => {
    const matchSource = filterSource === "all" || s.source === filterSource;
    const q = search.toLowerCase();
    const matchSearch = !q || s.name.toLowerCase().includes(q) || s.phone.includes(q) || (s.email ?? "").toLowerCase().includes(q) || (s.address ?? "").toLowerCase().includes(q);
    return matchSource && matchSearch;
  });

  if (!authed) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-1">The Roof Store — Lead Management</p>
          </div>
          <form onSubmit={handleLogin} className="bg-card border rounded-2xl p-8 shadow-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-pw">Admin Password</Label>
              <Input
                id="admin-pw"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoFocus
              />
            </div>
            {error && <p className="text-sm text-destructive bg-destructive/10 rounded px-3 py-2">{error}</p>}
            <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white">
              {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Checking…</> : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">Lead Submissions</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {filtered.length} of {submissions.length} leads
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => fetchSubmissions(sessionStorage.getItem("admin_pw") ?? "")}>
            <RefreshCw className="h-4 w-4 mr-1" /> Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4 mr-1" /> Sign Out
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <Input
          placeholder="Search name, phone, email, address…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <select
          value={filterSource}
          onChange={(e) => setFilterSource(e.target.value)}
          className="h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All Sources</option>
          {Object.entries(SOURCE_LABELS).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-24 text-muted-foreground">
          {submissions.length === 0 ? "No submissions yet. Forms are ready to collect leads!" : "No results match your search."}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full text-left px-6 py-4"
                onClick={() => setExpanded(expanded === s.id ? null : s.id)}
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div>
                      <div className="font-bold text-foreground">{s.name}</div>
                      <div className="text-sm text-muted-foreground">{formatDate(s.createdAt)}</div>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${SOURCE_COLORS[s.source] ?? "bg-gray-100 text-gray-700"}`}>
                      {SOURCE_LABELS[s.source] ?? s.source}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <a
                      href={`tel:${s.phone}`}
                      className="flex items-center gap-1.5 text-accent font-bold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {s.phone}
                    </a>
                    {s.email && (
                      <a
                        href={`mailto:${s.email}`}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {s.email}
                      </a>
                    )}
                  </div>
                </div>
              </button>

              {expanded === s.id && (
                <div className="border-t bg-muted/40 px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {s.address && (
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground text-xs uppercase tracking-wide mb-0.5">Property Address</div>
                        <div className="text-muted-foreground">{s.address}</div>
                      </div>
                    </div>
                  )}
                  {s.roofType && (
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground text-xs uppercase tracking-wide mb-0.5">Roof Type</div>
                        <div className="text-muted-foreground">{formatRoofType(s.roofType)}</div>
                      </div>
                    </div>
                  )}
                  {s.message && (
                    <div className="sm:col-span-2 flex items-start gap-2">
                      <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground text-xs uppercase tracking-wide mb-0.5">Message</div>
                        <div className="text-muted-foreground whitespace-pre-wrap">{s.message}</div>
                      </div>
                    </div>
                  )}
                  <div className="sm:col-span-2 pt-2 border-t flex gap-3">
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white">
                      <a href={`tel:${s.phone}`}><Phone className="h-3.5 w-3.5 mr-1.5" />Call Now</a>
                    </Button>
                    {s.email && (
                      <Button asChild size="sm" variant="outline">
                        <a href={`mailto:${s.email}`}><Mail className="h-3.5 w-3.5 mr-1.5" />Send Email</a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
