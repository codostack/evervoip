import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --teal:       #0891b2;
  --teal-mid:   #0ea5c6;
  --teal-light: #c7f0f7;
  --teal-pale:  #e6f9fc;
  --teal-faint: #f2fbfd;
}

  .faq-root * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'DM Sans', sans-serif; }

  /* ── SECTION ── */
  .faq-section {
    width: 100%;
    background: #fff;
    padding: 88px 24px;
  }
  .faq-container { max-width: 1350px; margin: 0 auto; }

  /* ── HEADER ── */
  .faq-header { text-align: center; margin-bottom: 48px; }
  .faq-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 14px;
  }
  .faq-eyebrow::before, .faq-eyebrow::after {
    content: '';
    width: 28px; height: 1.5px;
    background: var(--teal-light);
    border-radius: 2px;
  }
  .faq-title {
    font-size: clamp(32px, 4.5vw, 36px);
    color: #0a1a1a;
    line-height: 1.18;
  }
  .faq-title span { color: var(--teal); }

  /* ── SEARCH BAR ── */
  .faq-search-wrap {
    background: var(--teal);
    border-radius: 18px;
    padding: 22px 24px;
    margin-bottom: 48px;
    display: flex;
    gap: 12px;
    align-items: center;
    box-shadow: 0 12px 40px rgba(8,145,178,0.22);
    flex-wrap: wrap;
  }
  .faq-search-icon { color: rgba(255,255,255,0.5); flex-shrink: 0; }
  .faq-search-input {
    flex: 1;
    min-width: 160px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 11px 16px;
    font-size: 14.5px;
    color: #111827;
    outline: none;
    transition: border 0.2s, box-shadow 0.2s;
  }
  .faq-search-input::placeholder { color: #9ca3af; }
  .faq-search-input:focus {
    border-color: #0891b2;
    box-shadow: 0 0 0 3px rgba(8,145,178,0.15);
  }
  .faq-search-select {
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 10px;
    padding: 11px 16px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    outline: none;
    cursor: pointer;
    min-width: 220px;
    width: 220px;
    transition: border 0.2s;
  }
  .faq-search-select option { color: #0a1a1a; background: #fff; }
  .faq-search-select:focus { border-color: rgba(255,255,255,0.45); }

  /* ── GRID ── */
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 28px;
    align-items: start;
  }
  @media (max-width: 860px) { .faq-grid { grid-template-columns: 1fr; } }

  /* ── LEFT PANEL ── */
  .faq-left {
    background: var(--teal);
    border-radius: 20px;
    padding: 36px 32px;
    position: sticky;
    top: 90px;
    overflow: hidden;
  }
  .faq-left-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: 20px;
  }
  .faq-left-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
  }
  .faq-left-circle-1 { width:220px;height:220px;top:-60px;right:-60px; }
  .faq-left-circle-2 { width:130px;height:130px;bottom:-30px;left:-30px; }
  .faq-left-circle-3 { width:70px;height:70px;top:50%;right:24px; }

  .faq-left-inner { position: relative; z-index: 2; }
  .faq-left-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    margin-bottom: 20px;
  }
  .faq-left-title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    line-height: 1.3;
    margin-bottom: 8px;
  }
  .faq-left-sub {
    font-size: 13.5px;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
    margin-bottom: 28px;
  }

  /* Category pills */
  .faq-cats { display: flex; flex-direction: column; gap: 8px; margin-bottom: 32px; }
  .faq-cat-pill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.07);
    transition: background 0.2s, border 0.2s, transform 0.15s;
    color: rgba(255,255,255,0.75);
    font-size: 14px;
    font-weight: 500;
  }
  .faq-cat-pill:hover { background: rgba(255,255,255,0.13); transform: translateX(3px); }
  .faq-cat-pill.active {
    background: #fff;
    border-color: #fff;
    color: var(--teal);
    font-weight: 600;
    transform: translateX(4px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
  .faq-cat-count {
    font-size: 11px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 20px;
    background: rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.8);
  }
  .faq-cat-pill.active .faq-cat-count {
    background: var(--teal-pale);
    color: var(--teal);
  }

  /* Stats row */
  .faq-stats {
    display: flex;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.12);
    padding-top: 24px;
    margin-top: 4px;
  }
  .faq-stat {
    flex: 1;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.12);
  }
  .faq-stat:last-child { border-right: none; }
  .faq-stat-num { font-size: 22px; font-weight: 700; color: #fff;  }
  .faq-stat-label { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }

  /* ── RIGHT — ACCORDION ── */
  .faq-list { display: flex; flex-direction: column; gap: 10px; }

  .faq-item {
    border: 1.5px solid #eef5f5;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .faq-item:hover { border-color: var(--teal-light); box-shadow: 0 4px 20px rgba(0,76,76,0.07); }
  .faq-item.open  { border-color: var(--teal); box-shadow: 0 6px 28px rgba(0,76,76,0.11); }

  .faq-item-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  .faq-item-num {
    flex-shrink: 0;
    width: 30px; height: 30px;
    border-radius: 8px;
    background: var(--teal-faint);
    color: var(--teal);
    font-size: 11.5px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, color 0.2s;
  }
  .faq-item.open .faq-item-num { background: var(--teal); color: #fff; }

  .faq-item-q {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    color: #1a2e2e;
    line-height: 1.4;
  }
  .faq-item-tag {
    font-size: 10.5px;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 20px;
    background: var(--teal-pale);
    color: var(--teal);
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  .faq-item-icon {
    flex-shrink: 0;
    width: 28px; height: 28px;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    font-weight: 300;
    transition: background 0.2s, color 0.2s, transform 0.25s;
    background: #f0f4f4;
    color: #667;
  }
  .faq-item.open .faq-item-icon { background: var(--teal); color: #fff; transform: rotate(45deg); }

  .faq-item-body {
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
  }
  .faq-item-answer {
    padding: 0 20px 20px 64px;
    font-size: 14.5px;
    color: #556;
    line-height: 1.7;
    border-top: 1px solid #f0f6f6;
    padding-top: 14px;
  }

  .faq-empty {
    text-align: center;
    padding: 56px 24px;
    color: #889;
    font-size: 15px;
  }
  .faq-empty-icon { font-size: 36px; margin-bottom: 12px; opacity: 0.4; }

  /* ── MOBILE CATEGORY TOGGLE BUTTON (hidden on desktop) ── */
  .faq-mobile-cat-toggle {
    display: none;
  }

  /* ── MOBILE STYLES (≤ 640px) ── */
  @media (max-width: 640px) {

    .faq-section {
      padding: 48px 16px;
    }

    /* Header */
    .faq-header {
      margin-bottom: 28px;
    }
    .faq-title {
      font-size: 26px;
    }

    /* Search bar: stack vertically */
    .faq-search-wrap {
      flex-direction: column;
      align-items: stretch;
      padding: 16px;
      gap: 10px;
      border-radius: 14px;
      margin-bottom: 24px;
    }
    .faq-search-icon {
      display: none;
    }
    .faq-search-input {
      min-width: unset;
      width: 100%;
      font-size: 14px;
    }
    .faq-search-select {
      min-width: unset;
      width: 100%;
      font-size: 14px;
      color: #fff;
    }

    /* Grid: single column, left panel goes below on mobile */
    .faq-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    /* Left panel: not sticky, compact */
    .faq-left {
      position: static;
      padding: 20px 18px;
      border-radius: 16px;
    }
    .faq-left-label { margin-bottom: 10px; }
    .faq-left-title { font-size: 18px; margin-bottom: 4px; }
    .faq-left-sub   { font-size: 12.5px; margin-bottom: 16px; }

    /* Category pills: 2-column grid on mobile for compactness */
    .faq-cats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 20px;
    }
    .faq-cat-pill {
      padding: 9px 12px;
      font-size: 13px;
      border-radius: 8px;
    }
    /* Disable translateX on mobile (no room) */
    .faq-cat-pill:hover { transform: none; }
    .faq-cat-pill.active { transform: none; }

    /* Collapse/expand left panel via toggle button */
    .faq-mobile-cat-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-bottom: 14px;
    }
    .faq-mobile-cat-toggle-label {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }
    .faq-mobile-cat-toggle-icon {
      font-size: 12px;
      color: rgba(255,255,255,0.6);
      transition: transform 0.25s ease;
    }
    .faq-mobile-cat-toggle-icon.open {
      transform: rotate(180deg);
    }

    /* Hide title/sub on mobile when panel is collapsed */
    .faq-left-collapsible {
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    }

    /* Stats row: compact on mobile */
    .faq-stats {
      padding-top: 16px;
    }
    .faq-stat-num { font-size: 18px; }
    .faq-stat-label { font-size: 10px; }

    /* FAQ items: tighter on mobile */
    .faq-item-btn {
      padding: 14px 14px;
      gap: 10px;
    }
    .faq-item-q {
      font-size: 14px;
    }
    /* Hide tag badge on very small screens to avoid overflow */
    .faq-item-tag {
      display: none;
    }
    .faq-item-answer {
      padding: 12px 14px 16px 14px;
      font-size: 13.5px;
    }
    .faq-item-num {
      width: 26px;
      height: 26px;
      font-size: 11px;
    }
    .faq-item-icon {
      width: 26px;
      height: 26px;
      font-size: 16px;
    }
  }

  /* ── TABLET STYLES (641px – 860px) ── */
  @media (min-width: 641px) and (max-width: 860px) {

    .faq-section {
      padding: 64px 20px;
    }

    /* Grid already single-column from (max-width: 860px) rule above */
    .faq-left {
      position: static;
      padding: 28px 24px;
    }

    .faq-cats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .faq-cat-pill:hover { transform: none; }
    .faq-cat-pill.active { transform: none; }

    .faq-search-select {
      min-width: 180px;
      width: 180px;
    }
  }
`;

const faqs = [
  {
    id: 1, category: "General",
    question: "What is VoIP?",
    answer: "VoIP allows you to make voice and video calls over the internet instead of traditional phone lines, delivering crystal-clear audio at a fraction of the cost.",
  },
  {
    id: 2, category: "Technical",
    question: "How does VoIP work?",
    answer: "Your voice is converted into digital packets and transmitted securely over the internet using advanced codecs, ensuring minimal latency and maximum clarity.",
  },
  {
    id: 3, category: "Security",
    question: "Is my data safe?",
    answer: "We use TLS and SRTP end-to-end encryption, backed by ISO-certified secure cloud infrastructure and continuous threat monitoring.",
  },
  {
    id: 4, category: "Account",
    question: "Can I port my existing number?",
    answer: "Yes — you can transfer your existing business number with zero downtime. Our team manages the entire porting process.",
  },
  {
    id: 5, category: "Features",
    question: "What features are included?",
    answer: "HD calling, IVR systems, real-time analytics, recordings, CRM integrations, automation workflows, and collaboration tools are included.",
  },
  {
    id: 6, category: "Billing",
    question: "Can I cancel anytime?",
    answer: "Yes. There are no long-term contracts. You can upgrade, downgrade, or cancel anytime from your dashboard.",
  },
  {
    id: 7, category: "Technical",
    question: "What internet speed is required for VoIP?",
    answer: "A stable broadband connection with at least 100 kbps per call is recommended for optimal voice quality.",
  },
  {
    id: 8, category: "General",
    question: "Can I use VoIP on mobile devices?",
    answer: "Yes, our platform works on smartphones, tablets, laptops, and desktop devices through apps and web browsers.",
  },
  {
    id: 9, category: "Features",
    question: "Do you offer call recording?",
    answer: "Yes, automatic and on-demand call recording is available with secure cloud storage and playback access.",
  },
  {
    id: 10, category: "Security",
    question: "Do you protect against fraud and spam calls?",
    answer: "We implement intelligent fraud detection, IP filtering, and traffic monitoring to prevent unauthorized access.",
  },
  {
    id: 11, category: "General",
    question: "What makes VoIP better than traditional phone systems?",
    answer: "VoIP offers lower costs, advanced features, global accessibility, and scalability compared to traditional phone systems, all without requiring complex hardware installations.",
  },
  {
    id: 12, category: "General",
    question: "Who can use VoIP services?",
    answer: "VoIP is suitable for businesses of all sizes, remote teams, call centers, startups, and individuals who need flexible and reliable communication solutions.",
  },
  {
    id: 13, category: "General",
    question: "Do I need special equipment to use VoIP?",
    answer: "No special equipment is required. You can use VoIP on computers, smartphones, tablets, or IP phones with a stable internet connection.",
  },
  {
    id: 14, category: "General",
    question: "Can I make international calls using VoIP?",
    answer: "Yes, VoIP allows you to make international calls at significantly reduced rates compared to traditional telecom providers.",
  },
  {
    id: 15, category: "General",
    question: "Is VoIP suitable for remote teams?",
    answer: "Absolutely. VoIP enables remote teams to communicate seamlessly through voice, video, messaging, and collaboration tools from anywhere in the world.",
  },
  {
    id: 16, category: "General",
    question: "How quickly can I get started with VoIP?",
    answer: "Most users can set up and start using VoIP within minutes after account activation, without complex installation or technical expertise.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-item-btn" onClick={() => setOpen(!open)}>
        <span className="faq-item-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-item-q">{faq.question}</span>
        <span className="faq-item-tag">{faq.category}</span>
        <span className="faq-item-icon">+</span>
      </button>
      <div className="faq-item-body" style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}>
        <p className="faq-item-answer">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function VoipFAQ() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("General");
  const [panelOpen, setPanelOpen] = useState(true);

  const categories = [
    "General",
    ...[...new Set(faqs.map((f) => f.category))].filter((cat) => cat !== "General"),
  ];

  const countFor = (cat) => faqs.filter((f) => f.category === cat).length;

  const filtered = faqs.filter((faq) => {
    const q = search.toLowerCase();
    const matchSearch =
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);
    const matchCat = faq.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="faq-root">
      <style data-no-translate>{styles}</style>
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
              {categories.map((cat, i) => <option key={i}>{cat}</option>)}
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

                {/* Mobile collapse toggle — hidden on desktop via CSS */}
                <button
                  className="faq-mobile-cat-toggle"
                  onClick={() => setPanelOpen(!panelOpen)}
                  aria-expanded={panelOpen}
                >
                  <span className="faq-mobile-cat-toggle-label">Browse by category</span>
                  <span className={`faq-mobile-cat-toggle-icon${panelOpen ? " open" : ""}`}>▼</span>
                </button>

                {/* Collapsible body on mobile, always visible on desktop */}
                <div
                  className="faq-left-collapsible"
                  style={{
                    maxHeight: panelOpen ? "600px" : "0px",
                    opacity: panelOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-left-label" style={{ display: "none" }}>
                    {/* label moved into toggle button on mobile */}
                  </div>
                  <div className="faq-left-title">Find What You're Looking For</div>
                  <div className="faq-left-sub">
                    Filter questions by topic to get to the right answer faster.
                  </div>

                  <div className="faq-cats">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        className={`faq-cat-pill${category === cat ? " active" : ""}`}
                        onClick={() => setCategory(cat)}
                      >
                        <span>{cat}</span>
                        <span className="faq-cat-count">{countFor(cat)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="faq-stats">
                    <div className="faq-stat">
                      <div className="faq-stat-num">16</div>
                      <div className="faq-stat-label">Questions</div>
                    </div>
                    <div className="faq-stat">
                      <div className="faq-stat-num">6</div>
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
            <div className="faq-list">
              {filtered.length > 0 ? (
                filtered.map((faq, i) => <FAQItem key={faq.id} faq={faq} index={i} />)
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