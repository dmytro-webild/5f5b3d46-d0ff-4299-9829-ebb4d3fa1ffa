"use client";

import { useState } from "react";
import { User, Mail, Lock, ShieldCheck, CheckCircle2, X } from "lucide-react";

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  church: string;
  division: string;
  joinedDate: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: UserProfile) => void;
}

export default function AuthModal({ isOpen, onClose, onAuthSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("SDA Believer / Youth Member");
  const [church, setChurch] = useState("Berean Seventh-day Adventist Church");
  const [division] = useState("Trans-European Division");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      const profile: UserProfile = {
        name: name || (mode === "login" ? "Mihle Nxumalo" : "New Believer"),
        email: email || "member@sevenfold.org",
        role,
        church,
        division,
        joinedDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
      };

      localStorage.setItem("sevenfold_active_user", JSON.stringify(profile));

      setTimeout(() => {
        setSuccess(false);
        onAuthSuccess(profile);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-[#010519]/80 backdrop-blur-md">
      <div className="bg-[#101B35] border border-[#1C2B4B] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-[#FEF9EE]">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-[#FEF9EE] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#010519] border border-[#F0BB5D] flex items-center justify-center text-[#F0BB5D] font-bold text-xl mx-auto mb-2 shadow-lg">
            7
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#FEF9EE]">
            {mode === "register" ? "Join the Sevenfold Ecosystem" : "Welcome Back to Sevenfold"}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {mode === "register"
              ? "Create your SDA Believer account for personalized devotionals, events & AI study tools."
              : "Sign in to access your saved notes, event tickets, and community forums."}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex bg-[#010519] p-1 rounded-xl border border-[#1C2B4B] mb-6">
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              mode === "register" ? "bg-[#101B35] text-[#F0BB5D] shadow" : "text-muted-foreground hover:text-[#FEF9EE]"
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              mode === "login" ? "bg-[#101B35] text-[#F0BB5D] shadow" : "text-muted-foreground hover:text-[#FEF9EE]"
            }`}
          >
            Sign In
          </button>
        </div>

        {success ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-lg font-serif font-bold text-emerald-400">
              {mode === "register" ? "Account Registered Successfully!" : "Welcome Back!"}
            </h4>
            <p className="text-xs text-muted-foreground">
              Connecting to secure Veltrix Technologies authentication servers...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {mode === "register" && (
              <div>
                <label className="block text-xs font-medium text-[#FEF9EE] mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mihle Nxumalo"
                    className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#FEF9EE] mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@church.org"
                  className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#FEF9EE] mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                />
              </div>
            </div>

            {mode === "register" && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#FEF9EE] mb-1">Role / Calling</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-3 py-2.5 text-xs text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                    >
                      <option value="SDA Believer / Youth Member">Youth Member</option>
                      <option value="Sabbath School Teacher">Sabbath School Teacher</option>
                      <option value="Pathfinder Leader">Pathfinder Leader</option>
                      <option value="Pastor / Church Elder">Pastor / Elder</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FEF9EE] mb-1">Local SDA Church</label>
                    <input
                      type="text"
                      value={church}
                      onChange={(e) => setChurch(e.target.value)}
                      placeholder="e.g. Berean SDA"
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-3 py-2.5 text-xs text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-sm font-bold rounded-xl mt-4 flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <span>Authenticating with Backend...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>{mode === "register" ? "Register Sevenfold Account" : "Sign In to Platform"}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
