import { useState, useEffect, useContext } from "react";
import faqStyles from "./Faqstyles";
import { faqDummyData } from "./DummyTranslator/faq";
import { LanguageContext } from "../Context/LanguageContext";

// ── Category key → English display label (for the select + pills) ──────────
const CATEGORY_LABELS = {
  general:   "General",
  technical: "Technical",
  security:  "Security",
  account:   "Account",
  features:  "Features",
  billing:   "Billing",
};

// ── Read language from localStorage ─────────────────────────────────────────
const SUPPORTED_LANGS = ["en", "fr", "ar", "es", "ja", "de", "ko", "it", "zh-CN"];

function getStoredLang() {
  try {
    const stored = localStorage.getItem("selectedLanguage");
    return stored && SUPPORTED_LANGS.includes(stored) ? stored : "en";
  } catch {
    return "en";
  }
}

// ── FAQItem ──────────────────────────────────────────────────────────────────
function FAQItem({ faq, index, lang }) {
  const [open, setOpen] = useState(false);

  const question = faq.question[lang] || faq.question["en"];
  const answer   = faq.answer[lang]   || faq.answer["en"];
  const catLabel = CATEGORY_LABELS[faq.categoryKey] || faq.categoryKey;

  // collapse when language switches
  useEffect(() => { setOpen(false); }, [lang]);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-item-btn" onClick={() => setOpen(!open)}>
        <span className="faq-item-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-item-q">{question}</span>
        <span className="faq-item-tag">{catLabel}</span>
        <span className="faq-item-icon">+</span>
      </button>
      <div
        className="faq-item-body"
        style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="faq-item-answer">{answer}</p>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function VoipFAQ() {
  const [lang, setLang] = useState(getStoredLang);
    const { language } = useContext(LanguageContext);
  console.log(lang);
  
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("general");
  const [panelOpen, setPanelOpen] = useState(true);

  // Keep localStorage in sync whenever lang changes externally (other tabs)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "selectedLanguage" && e.newValue) {
        if (SUPPORTED_LANGS.includes(e.newValue)) setLang(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Build ordered category key list: general first, then the rest
  const allCatKeys = [
    "general",
    ...[...new Set(faqDummyData.map((f) => f.categoryKey))].filter(
      (k) => k !== "general"
    ),
  ];

  const countFor = (key) =>
    faqDummyData.filter((f) => f.categoryKey === key).length;

const filtered = faqDummyData.filter((faq) => {
  const q = search.toLowerCase();

  const questionText =
    faq.question[language]?.toLowerCase() || "";

  const answerText =
    faq.answer[language]?.toLowerCase() || "";

  return (
    (questionText.includes(q) || answerText.includes(q)) &&
    (category === "all" || faq.categoryKey === category)
  );
});

  return (
    <div className="faq-root">
      <style data-no-translate>{faqStyles}</style>
      <section className="faq-section">
        <div className="faq-container">

          {/* HEADER */}
          <div className="faq-header">
            <h2 className="faq-title">
              Frequently Asked <span>Questions</span>
            </h2>
          </div>

          {/* SEARCH BAR */}
          <div className="faq-search-wrap">
            <svg
              className="faq-search-icon"
              width="18" height="18"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              className="faq-search-input"
              type="text"
              placeholder="Search questions, topics, keywords…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="faq-search-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {allCatKeys.map((key) => (
                <option key={key} value={key}>
                  {CATEGORY_LABELS[key] || key}
                </option>
              ))}
            </select>
          </div>

          {/* GRID */}
          <div className="faq-grid">

            {/* LEFT PANEL */}
            <div className="faq-left">
              <div className="faq-left-bg">
                <div className="faq-left-circle faq-left-circle-1" />
                <div className="faq-left-circle faq-left-circle-2" />
                <div className="faq-left-circle faq-left-circle-3" />
              </div>
              <div className="faq-left-inner">

                {/* Mobile collapse toggle */}
                <button
                  className="faq-mobile-cat-toggle"
                  onClick={() => setPanelOpen(!panelOpen)}
                  aria-expanded={panelOpen}
                >
                  <span className="faq-mobile-cat-toggle-label">Browse by category</span>
                  <span className={`faq-mobile-cat-toggle-icon${panelOpen ? " open" : ""}`}>▼</span>
                </button>

                {/* Collapsible body */}
                <div
                  className="faq-left-collapsible"
                  style={{
                    maxHeight: panelOpen ? "600px" : "0px",
                    opacity: panelOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-left-label" style={{ display: "none" }} />
                  <div className="faq-left-title">Find What You're Looking For</div>
                  <div className="faq-left-sub">
                    Filter questions by topic to get to the right answer faster.
                  </div>

                  <div className="faq-cats">
                    {allCatKeys.map((key) => (
                      <div
                        key={key}
                        className={`faq-cat-pill${category === key ? " active" : ""}`}
                        onClick={() => setCategory(key)}
                      >
                        <span>{CATEGORY_LABELS[key] || key}</span>
                        <span className="faq-cat-count">{countFor(key)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="faq-stats">
                    <div className="faq-stat">
                      <div className="faq-stat-num">{faqDummyData.length}</div>
                      <div className="faq-stat-label">Questions</div>
                    </div>
                    <div className="faq-stat">
                      <div className="faq-stat-num">{allCatKeys.length}</div>
                      <div className="faq-stat-label">Categories</div>
                    </div>
                    <div className="faq-stat">
                      <div className="faq-stat-num">24h</div>
                      <div className="faq-stat-label">Support</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT — FAQ LIST */}
            <div data-no-translate className="faq-list">
              {filtered.length > 0 ? (
                filtered.map((faq, i) => (
                  <FAQItem key={`${faq.id}-${lang}`} faq={faq} index={i} lang={language} />
                ))
              ) : (
                <div className="faq-empty">
                  <div className="faq-empty-icon">🔍</div>
                  <div>No questions match your search.</div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}