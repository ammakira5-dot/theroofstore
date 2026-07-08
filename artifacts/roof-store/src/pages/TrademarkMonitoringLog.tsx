import { useState, useEffect, useCallback } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Loader2, LogOut, RefreshCw, PlusCircle, Bot, User, AlertTriangle } from "lucide-react";

interface LogEntry {
  id: number;
  entryType: "manual" | "auto_check";
  summary: string;
  details: string | null;
  sourceUrl: string | null;
  contentSnapshot: string | null;
  contentHash: string | null;
  recordedBy: string | null;
  createdAt: string;
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    timeZoneName: "short",
  }).format(new Date(iso));
}

type Role = "admin" | "attorney" | null;

export default function TrademarkMonitoringLog() {
  const [password, setPassword] = useState(() => sessionStorage.getItem("admin_pw") ?? "");
  const [authed, setAuthed] = useState(false);
  const [role, setRole] = useState<Role>(null);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [recordedBy, setRecordedBy] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchEntries = useCallback(async (pw: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/trademark-monitoring/entries", {
        headers: { "x-admin-password": pw },
      });
      if (res.status === 401) { setError("Wrong password."); setAuthed(false); return; }
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setEntries(data.entries);
      setRole(data.role ?? null);
      setAuthed(true);
      sessionStorage.setItem("admin_pw", pw);
    } catch {
      setError("Could not load log. Is the API server running?");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) fetchEntries(saved);
  }, [fetchEntries]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    fetchEntries(password);
  }

  function logout() {
    sessionStorage.removeItem("admin_pw");
    setAuthed(false);
    setRole(null);
    setEntries([]);
    setPassword("");
  }

  async function handleAddEntry(e: React.FormEvent) {
    e.preventDefault();
    if (!summary.trim()) return;
    setSubmitting(true);
    try {
      const pw = sessionStorage.getItem("admin_pw") ?? "";
      const res = await fetch("/api/trademark-monitoring/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": pw },
        body: JSON.stringify({
          summary,
          details: details || undefined,
          sourceUrl: sourceUrl || undefined,
          recordedBy: recordedBy || undefined,
        }),
      });
      if (!res.ok) throw new Error("Failed to save entry");
      setSummary(""); setDetails(""); setSourceUrl("");
      await fetchEntries(pw);
    } catch {
      setError("Could not save entry.");
    } finally {
      setSubmitting(false);
    }
  }

  async function runCheckNow() {
    setChecking(true);
    setError(null);
    try {
      const pw = sessionStorage.getItem("admin_pw") ?? "";
      const res = await fetch("/api/trademark-monitoring/check-now", {
        method: "POST",
        headers: { "x-admin-password": pw },
      });
      if (!res.ok) throw new Error("Check failed");
      await fetchEntries(pw);
    } catch {
      setError("Automated check failed to run.");
    } finally {
      setChecking(false);
    }
  }

  if (!authed) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary">Monitoring &amp; Defense Log</h1>
            <p className="text-muted-foreground text-sm mt-1">Trademark Evidence — Private</p>
          </div>
          <form onSubmit={handleLogin} className="bg-card border rounded-2xl p-8 shadow-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-pw">Access Password</Label>
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
    <>
      <SEO
        title="Monitoring & Defense Log | The Roof Store"
        description="Private trademark monitoring log — not indexed."
        noindex
      />
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-3xl font-serif font-bold text-primary">Monitoring &amp; Defense Log</h1>
              {role === "attorney" && (
                <span className="text-xs font-semibold uppercase tracking-wide bg-accent/10 text-accent rounded-full px-2.5 py-1">
                  Attorney Access — Read Only
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              Append-only record. Entries cannot be edited or deleted once saved — this preserves evidentiary integrity.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => fetchEntries(sessionStorage.getItem("admin_pw") ?? "")}>
              <RefreshCw className="h-4 w-4 mr-1" /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-1" /> Sign Out
            </Button>
          </div>
        </div>

        {error && <p className="text-sm text-destructive bg-destructive/10 rounded px-3 py-2 mb-4">{error}</p>}

        {role === "attorney" && (
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-6 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              You're signed in with <span className="font-semibold text-foreground">read-only attorney access</span>. This view only shows the log for your review —
              there are no buttons to add entries or trigger checks on purpose, so the evidentiary record can't be altered from this account.
              Everything below was recorded automatically by the monitoring system or added by the site admin.
            </p>
          </div>
        )}

        {role === "admin" && (
          <>
            {/* Automated check */}
            <div className="bg-card border rounded-xl p-5 mb-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-sm">Automated Check — theroof.store</p>
                  <p className="text-xs text-muted-foreground">Fetches the live homepage, hashes the content, and flags any change since the last check for your review.</p>
                </div>
              </div>
              <Button size="sm" onClick={runCheckNow} disabled={checking} className="bg-accent hover:bg-accent/90 text-white">
                {checking ? <><Loader2 className="h-4 w-4 mr-1.5 animate-spin" />Running…</> : "Run Check Now"}
              </Button>
            </div>

            {/* Manual entry form */}
            <form onSubmit={handleAddEntry} className="bg-card border rounded-xl p-5 mb-8 space-y-3">
              <p className="font-semibold text-sm flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Add Manual Entry</p>
              <div className="space-y-2">
                <Label htmlFor="summary">What did you observe? (required)</Label>
                <Input id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="e.g. Checked Google Search Console — no manual actions or unusual link spikes" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="sourceUrl">Source / where checked (optional)</Label>
                  <Input id="sourceUrl" value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} placeholder="e.g. Google Search Console" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recordedBy">Recorded by (optional)</Label>
                  <Input id="recordedBy" value={recordedBy} onChange={(e) => setRecordedBy(e.target.value)} placeholder="Your name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Details (optional)</Label>
                <Textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} rows={3} placeholder="Any additional notes, findings, or context" />
              </div>
              <Button type="submit" disabled={submitting || !summary.trim()} className="bg-primary hover:bg-primary/90 text-white">
                {submitting ? <><Loader2 className="h-4 w-4 mr-1.5 animate-spin" />Saving…</> : <><PlusCircle className="h-4 w-4 mr-1.5" />Add Entry</>}
              </Button>
            </form>
          </>
        )}

        {/* Log entries */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">No entries yet.</div>
        ) : (
          <div className="space-y-3">
            {entries.map((e) => {
              const isFlagged = e.entryType === "auto_check" && e.summary.includes("CHANGE DETECTED");
              return (
                <div key={e.id} className={`bg-card border rounded-xl overflow-hidden shadow-sm ${isFlagged ? "border-amber-400" : ""}`}>
                  <button className="w-full text-left px-5 py-4" onClick={() => setExpanded(expanded === e.id ? null : e.id)}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-start gap-3">
                        {e.entryType === "auto_check" ? (
                          isFlagged ? <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" /> : <Bot className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        ) : (
                          <User className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        )}
                        <div>
                          <p className="font-semibold text-sm">{e.summary}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {formatDate(e.createdAt)} · {e.entryType === "auto_check" ? "Automated check" : `Manual${e.recordedBy ? ` — ${e.recordedBy}` : ""}`}
                            {e.sourceUrl ? ` · ${e.sourceUrl}` : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                  {expanded === e.id && (e.details || e.contentSnapshot) && (
                    <div className="border-t bg-muted/40 px-5 py-4 text-sm space-y-3">
                      {e.details && (
                        <div>
                          <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">Details</p>
                          <p className="whitespace-pre-wrap text-foreground">{e.details}</p>
                        </div>
                      )}
                      {e.contentSnapshot && (
                        <div>
                          <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">Stored Snapshot (first 20,000 characters of fetched HTML)</p>
                          <pre className="bg-gray-900 text-gray-100 text-[10px] p-3 rounded max-h-48 overflow-auto whitespace-pre-wrap break-all">{e.contentSnapshot}</pre>
                          {e.contentHash && <p className="text-[10px] text-muted-foreground mt-1">SHA-256: {e.contentHash}</p>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
