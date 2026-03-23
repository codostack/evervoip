import { useState } from "react";

const FEATURES = [
  { icon: "🚀", title: "Lightning Fast Setup", desc: "Get your account running in under 2 minutes."  },


];



const STATS = [
  { val: "50K+",  label: "Registered Users" },
  { val: "99.9%", label: "Uptime Guarantee" },
  { val: "4.9★",  label: "Average Rating"   },
  { val: "180+",  label: "Countries"         },
];

/* ── Field component ── */
function Field({ label, name, type = "text", placeholder, value, onChange, onFocus, onBlur, error, icon, textarea }) {
  const inputBase =
    "w-full pl-10 pr-4 py-3 text-sm font-normal bg-gray-50 border rounded-xl text-gray-800 outline-none transition-all duration-200 placeholder-gray-300 hover:border-cyan-300 hover:bg-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100";
  const inputErr  = "border-red-400 focus:border-red-400 focus:ring-red-100";
  const inputOk   = "border-gray-200";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-600 tracking-wide">
        {label} <span className="text-red-400">*</span>
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50 pointer-events-none select-none">
          {icon}
        </span>
        {textarea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            rows={4}
            className={`${inputBase} ${error ? inputErr : inputOk} pt-3 resize-none leading-relaxed`}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${inputBase} ${error ? inputErr : inputOk}`}
          />
        )}
      </div>
      {error && (
        <span className="text-xs text-red-500 flex items-center gap-1">
          ⚠ {error}
        </span>
      )}
    </div>
  );
}

/* ── Success screen ── */
function SuccessScreen({ name, email }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center bg-white rounded-3xl border border-gray-100 shadow-xl p-16 max-w-md w-full animate-bounce-in">
        <span className="text-6xl block mb-5">🎉</span>
        <h2 className="font-extrabold text-2xl text-gray-900 mb-3">You're all set!</h2>
        <p className="text-sm text-gray-500 leading-7">
          Welcome aboard, <strong className="text-gray-800">{name || "friend"}</strong>! We've received your details and will be in touch shortly at{" "}
          <strong className="text-cyan-600">{email}</strong>.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
export default function RegistrationPage() {
  const [form,      setForm]      = useState({ name: "", email: "", phone: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hovBtn,    setHovBtn]    = useState(false);
  const [tIdx,      setTIdx]      = useState(0);
  const [errors,    setErrors]    = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name        = "Full name is required";
    if (!form.email.includes("@")) e.email       = "Enter a valid email";
    if (!form.phone.trim())        e.phone       = "Phone number is required";
    if (!form.description.trim())  e.description = "Please add a short description";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen name={form.name} email={form.email} />;

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden font-sans">

      {/* ── dot-grid background via Tailwind pattern ── */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40"
           style={{ backgroundImage: "radial-gradient(circle, #a5f3fc 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* ── page layout ── */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 items-start">

        {/* ════════════════════════════════════════
            LEFT — ADVERTISEMENT COLUMN
        ════════════════════════════════════════ */}
        <div className="flex flex-col gap-6">

          {/* ── Brand Hero Card ── */}
          <div className="relative rounded-3xl p-10 overflow-hidden bg-gradient-to-br from-cyan-500 via-cyan-600 to-teal-700 shadow-2xl shadow-cyan-200">
            {/* decorative overlay blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white opacity-5 -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-400 opacity-10 translate-y-16 -translate-x-16" />
            </div>
            {/* spinning accent */}
            <div className="absolute right-6 top-4 text-7xl text-white opacity-5 select-none animate-spin [animation-duration:20s]">✦</div>

            {/* logo row */}
            <div className="relative z-10 flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-xl animate-bounce">
                🔷
              </div>
              <div>
                <div className="text-white font-extrabold text-lg leading-tight">YourBrand</div>
                <div className="text-cyan-100/70 text-[10px] uppercase tracking-widest">Premium Platform</div>
              </div>
            </div>

            {/* headline */}
            <h2 className="relative z-10 text-3xl font-extrabold text-white leading-snug mb-4">
              Start Building<br />
              <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
                The Future
              </span>
              <br />Today
            </h2>

            {/* sub */}
            <p className="relative z-10 text-sm text-cyan-100/80 leading-7 font-light mb-8 max-w-sm">
              Join thousands of creators, developers, and enterprises who trust us to power their most ambitious projects. No credit card required.
            </p>

            {/* stats 2×2 grid */}
            <div className="relative z-10 grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div key={i}
                  className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3 cursor-default transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                  <div className="text-xl font-extrabold text-white">{s.val}</div>
                  <div className="text-[10px] text-cyan-100/65 tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Features List Card ── */}
          <div className="bg-white border border-cyan-100 rounded-2xl p-7 shadow-sm shadow-cyan-50">
            <h3 className="text-base font-bold text-gray-900 mb-5">Why people choose us</h3>
            <div className="flex flex-col divide-y divide-gray-100">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-4 py-3 group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800 mb-0.5">{f.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         

          {/* ── Promo Banner ── */}
         

        </div>

        {/* ════════════════════════════════════════
            RIGHT — REGISTRATION FORM
        ════════════════════════════════════════ */}
        <div className="lg:sticky lg:top-8">
          <div className="bg-white border border-cyan-100 rounded-3xl p-10 shadow-xl shadow-cyan-100">

            {/* form header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-cyan-600 uppercase tracking-widest">Create Account</span>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-200 to-transparent" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 leading-snug mb-2">Get Started Free</h2>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Fill in your details below. We'll reach out within 24 hours.</p>
            </div>

            {/* fields */}
            <div className="flex flex-col gap-5 mb-6">

              {/* name + email two-col */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  icon="👤"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  error={errors.name}
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  icon="✉️"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  error={errors.email}
                />
              </div>

              {/* phone */}
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                icon="📞"
                value={form.phone}
                onChange={handleChange}
                onFocus={() => {}}
                onBlur={() => {}}
                error={errors.phone}
              />

              {/* description */}
              <Field
                label="Tell us about yourself"
                name="description"
                placeholder="Briefly describe your project or how you plan to use our platform…"
                icon="💬"
                value={form.description}
                onChange={handleChange}
                onFocus={() => {}}
                onBlur={() => {}}
                error={errors.description}
                textarea
              />
            </div>

            {/* submit button */}
            <button
              onClick={handleSubmit}
              onMouseEnter={() => setHovBtn(true)}
              onMouseLeave={() => setHovBtn(false)}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-200 active:scale-95 border-none cursor-pointer"
            >
              {hovBtn ? "✨ Let's Go →" : "Create My Free Account"}
            </button>

            {/* divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-cyan-400 tracking-widest">or sign up with</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* social buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
                <span>🌐</span> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
                <span>🐙</span> GitHub
              </button>
            </div>

            {/* trust strip */}
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-gray-400">🔒 SSL Secured</span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">🛡 No Spam</span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">✅ Free Forever</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}