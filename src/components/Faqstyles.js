// faqStyles.js — all CSS for the VoIP FAQ component

const faqStyles = `
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
  .faq-title {
    font-size: clamp(32px, 4.5vw, 36px);
    color: #0a1a1a;
    line-height: 1.18;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }
  .faq-title span { color: var(--teal); }

  /* ── LANG SELECTOR ── */
  .faq-lang-wrap {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .faq-lang-btn {
    padding: 6px 14px;
    border-radius: 20px;
    border: 1.5px solid var(--teal-light);
    background: #fff;
    color: #556;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .faq-lang-btn:hover { border-color: var(--teal); color: var(--teal); }
  .faq-lang-btn.active {
    background: var(--teal);
    border-color: var(--teal);
    color: #fff;
    font-weight: 600;
  }

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
  .faq-left-circle-1 { width:220px; height:220px; top:-60px; right:-60px; }
  .faq-left-circle-2 { width:130px; height:130px; bottom:-30px; left:-30px; }
  .faq-left-circle-3 { width:70px;  height:70px;  top:50%;    right:24px; }

  .faq-left-inner { position: relative; z-index: 2; }
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
  .faq-stat-num   { font-size: 22px; font-weight: 700; color: #fff; }
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
  .faq-item.open  { border-color: var(--teal);       box-shadow: 0 6px 28px rgba(0,76,76,0.11); }

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
    padding: 14px 20px 20px 64px;
    font-size: 14.5px;
    color: #556;
    line-height: 1.7;
    border-top: 1px solid #f0f6f6;
  }

  .faq-empty {
    text-align: center;
    padding: 56px 24px;
    color: #889;
    font-size: 15px;
  }
  .faq-empty-icon { font-size: 36px; margin-bottom: 12px; opacity: 0.4; }

  /* ── MOBILE CATEGORY TOGGLE BUTTON (hidden on desktop) ── */
  .faq-mobile-cat-toggle { display: none; }

  /* ── MOBILE STYLES (≤ 640px) ── */
  @media (max-width: 640px) {
    .faq-section    { padding: 48px 16px; }
    .faq-header     { margin-bottom: 28px; }
    .faq-title      { font-size: 26px; }
    .faq-lang-wrap  { gap: 6px; margin-bottom: 20px; }
    .faq-lang-btn   { padding: 5px 10px; font-size: 12px; }
    .faq-search-wrap {
      flex-direction: column;
      align-items: stretch;
      padding: 16px;
      gap: 10px;
      border-radius: 14px;
      margin-bottom: 24px;
    }
    .faq-search-icon  { display: none; }
    .faq-search-input { min-width: unset; width: 100%; font-size: 14px; }
    .faq-search-select { min-width: unset; width: 100%; font-size: 14px; color: #fff; }
    .faq-grid         { grid-template-columns: 1fr; gap: 16px; }
    .faq-left         { position: static; padding: 20px 18px; border-radius: 16px; }
    .faq-left-title   { font-size: 18px; margin-bottom: 4px; }
    .faq-left-sub     { font-size: 12.5px; margin-bottom: 16px; }
    .faq-cats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 20px;
    }
    .faq-cat-pill        { padding: 9px 12px; font-size: 13px; border-radius: 8px; }
    .faq-cat-pill:hover  { transform: none; }
    .faq-cat-pill.active { transform: none; }
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
    .faq-mobile-cat-toggle-icon.open { transform: rotate(180deg); }
    .faq-left-collapsible {
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    }
    .faq-stats      { padding-top: 16px; }
    .faq-stat-num   { font-size: 18px; }
    .faq-stat-label { font-size: 10px; }
    .faq-item-btn   { padding: 14px 14px; gap: 10px; }
    .faq-item-q     { font-size: 14px; }
    .faq-item-tag   { display: none; }
    .faq-item-answer { padding: 12px 14px 16px 14px; font-size: 13.5px; }
    .faq-item-num    { width: 26px; height: 26px; font-size: 11px; }
    .faq-item-icon   { width: 26px; height: 26px; font-size: 16px; }
  }

  /* ── TABLET STYLES (641px – 860px) ── */
  @media (min-width: 641px) and (max-width: 860px) {
    .faq-section { padding: 64px 20px; }
    .faq-left    { position: static; padding: 28px 24px; }
    .faq-cats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    .faq-cat-pill:hover  { transform: none; }
    .faq-cat-pill.active { transform: none; }
    .faq-search-select   { min-width: 180px; width: 180px; }
  }
`;

export default faqStyles;