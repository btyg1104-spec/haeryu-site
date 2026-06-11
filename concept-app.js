/* ============================================================
   컨셉 비교분석 — 렌더링 & 인터랙션
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderOverviewTable();
  renderThemeTabs();

  initScrolledNav();
  initProgressBar();
  initReveal();
  initToTop();
  initLightbox();
});

/* ---------------- 헤더 ---------------- */
function renderHero() {
  const h = CONCEPT_DATA.hero;
  document.getElementById("hero-eyebrow").textContent = h.eyebrow;
  document.getElementById("hero-title").textContent = h.title;
  document.getElementById("hero-subtitle").textContent = h.subtitle;
  document.getElementById("hero-desc").textContent = h.desc;
  document.getElementById("overview-intro").textContent = CONCEPT_DATA.overviewIntro;
}

/* ---------------- 종합 비교 표 ---------------- */
function renderOverviewTable() {
  const axes = CONCEPT_DATA.axes;
  const themes = CONCEPT_DATA.themes;

  // 축별 최댓값 계산 (강조 표시용)
  const maxByAxis = axes.map((_, i) => Math.max(...themes.map(t => t.stats[i])));

  const wrap = document.getElementById("overview-table");
  wrap.innerHTML = `
    <div class="overview-table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>테마</th>
            ${axes.map(a => `<th>${a}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${themes.map(t => `
            <tr>
              <td class="cell-strong">
                <div class="theme-name-cell"><span>${t.icon}</span><span>${t.title}</span></div>
              </td>
              ${t.stats.map((v, i) => `
                <td class="${v === maxByAxis[i] ? "cell-good" : ""}">${v}</td>
              `).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

/* ---------------- 테마 탭 ---------------- */
let currentTheme = CONCEPT_DATA.themes[0].id;

function renderThemeTabs() {
  const tabs = document.getElementById("theme-tabs");
  tabs.innerHTML = `
    <div class="tab-row">
      ${CONCEPT_DATA.themes.map((t, i) => `
        <button class="chapter-tab" data-theme="${t.id}">
          <span class="tab-icon">${t.icon}</span>
          <span class="tab-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="tab-name">${t.title}</span>
        </button>
      `).join("")}
    </div>
  `;

  tabs.querySelectorAll(".chapter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentTheme = btn.dataset.theme;
      renderThemePanel();
    });
  });

  renderThemePanel();
}

/* ---------------- 테마 패널 ---------------- */
function renderThemePanel() {
  const panel = document.getElementById("theme-panel");
  const t = CONCEPT_DATA.themes.find(x => x.id === currentTheme);
  const idx = CONCEPT_DATA.themes.indexOf(t);
  const a = t.analysis;

  document.querySelectorAll(".chapter-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === currentTheme);
  });

  panel.innerHTML = `
    <div class="theme-card fade-pop">
      <div class="theme-head">
        <div class="theme-icon">${t.icon}</div>
        <div>
          <div class="theme-eyebrow">CONCEPT ${String(idx + 1).padStart(2, "0")}</div>
          <h3>${t.title} <span class="theme-subtitle">— ${t.subtitle}</span></h3>
          <p class="theme-position">${t.position}</p>
        </div>
      </div>

      <div class="theme-stage">
        <img class="theme-image" src="${t.image}" alt="${t.title} 비교 차트">
        <div class="stat-grid">
          ${CONCEPT_DATA.axes.map((label, i) => `
            <div class="stat-pill">
              <div class="stat-num">${t.stats[i]}</div>
              <div class="stat-label">${label}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="insight-grid">
        <div class="insight-card">
          <span class="insight-tag good">핵심 강점</span>
          <p>${t.topStrength}</p>
        </div>
        <div class="insight-card">
          <span class="insight-tag bad">보완 포인트</span>
          <p>${t.mainChallenge}</p>
        </div>
      </div>

      <div class="ref-tag-row">참고 이론 — ${t.refTag}</div>

      <button class="compose-btn" type="button">
        <span class="compose-icon">🪄</span>
        <span>이 테마로 구성</span>
        <span class="compose-arrow">▾</span>
      </button>

      <div class="analysis-panel">
        <div class="analysis-inner">
          <div class="analysis-label">Claude 분석 — 이 테마로 구성한다면</div>
          <p class="synopsis">${a.synopsis}</p>
          <div class="game-grid">
            ${a.games.map(g => `
              <div class="game-card">
                <div class="game-id">${g.id}</div>
                <h4>${g.name}</h4>
                <div class="game-format">${g.format}</div>
                <p class="game-desc">${g.desc}</p>
              </div>
            `).join("")}
          </div>
          <div class="callout">
            <div class="callout-label">총평</div>
            <p>${a.verdict}</p>
          </div>
          <div class="ref-card">
            <div class="ref-card-label">관련 사례</div>
            <h5>${a.realWorld.name}</h5>
            <p>${a.realWorld.desc}</p>
            <a href="${a.realWorld.url}" target="_blank" rel="noopener noreferrer">레퍼런스 링크 ↗</a>
            <div class="gallery-grid">
              ${a.gallery.map(g => `
                <div class="gallery-item" data-src="${g.file}" data-caption="${g.caption.replace(/"/g, "&quot;")}">
                  <img src="${g.file}" alt="${g.caption}" loading="lazy">
                  <div class="gallery-cap">${g.caption}</div>
                </div>
              `).join("")}
            </div>
            <p class="gallery-note">이미지 출처: Wikimedia Commons (CC BY / CC BY-SA / Public Domain) — 분위기 참고용 자료입니다.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  panel.querySelectorAll(".game-card").forEach((el, i) => {
    el.style.animationDelay = (i * 0.06) + "s";
    el.classList.add("fade-pop");
  });

  const btn = panel.querySelector(".compose-btn");
  const analysisPanel = panel.querySelector(".analysis-panel");
  btn.addEventListener("click", () => {
    const open = btn.classList.toggle("open");
    analysisPanel.style.maxHeight = open ? analysisPanel.scrollHeight + "px" : "0px";
    if (open) {
      // 패널이 펼쳐진 후 갤러리 등 콘텐츠 높이를 반영해 다시 측정
      setTimeout(() => {
        if (btn.classList.contains("open")) {
          analysisPanel.style.maxHeight = analysisPanel.scrollHeight + "px";
        }
      }, 260);
    }
  });

  panel.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => openLightbox(item.dataset.src, item.dataset.caption));
  });
}

/* ---------------- 갤러리 라이트박스 ---------------- */
function openLightbox(src, caption) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").alt = caption;
  document.getElementById("lightbox-caption").textContent = caption;
  lb.classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}
function initLightbox() {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ---------------- 스크롤 진행바 ---------------- */
function initProgressBar() {
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  });
}

/* ---------------- 네비게이션 (스크롤 시 배경) ---------------- */
function initScrolledNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ---------------- 스크롤 reveal ---------------- */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => obs.observe(t));
}

/* ---------------- 맨 위로 ---------------- */
function initToTop() {
  const btn = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 800);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
