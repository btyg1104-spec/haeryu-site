/* ============================================================
   해류 탐험대 — 렌더링 & 인터랙션
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderProblems();
  renderTheories();
  renderStructure();
  renderStory();
  renderIslands();
  renderChecklist();
  renderFlow();
  renderComparison();
  renderPriority();
  renderReferences();

  initProgressBar();
  initNav();
  initReveal();
  initToTop();
});

/* ---------------- 문제의식 ---------------- */
function renderProblems() {
  const wrap = document.getElementById("problem-cards");
  wrap.innerHTML = DATA.problems.map(p => `
    <div class="card problem-card">
      <div class="card-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="card-ref">${p.ref}</div>
    </div>
  `).join("");

  const callout = document.getElementById("problem-callout");
  callout.innerHTML = `
    <div class="callout">
      <div class="callout-label">${DATA.problemCallout.label}</div>
      <p>${DATA.problemCallout.text}</p>
    </div>
  `;
}

/* ---------------- 이론적 기반 ---------------- */
function renderTheories() {
  const wrap = document.getElementById("theory-cards");
  wrap.innerHTML = DATA.theories.map(t => `
    <div class="card theory-card">
      <div class="theory-head">
        <div class="card-icon">${t.icon}</div>
        <div>
          <div class="theory-name">${t.name}</div>
          <div class="theory-year">${t.year}</div>
        </div>
      </div>
      <p class="theory-principle">"${t.principle}"</p>
      <div class="theory-row">
        <span class="theory-tag bad">한계</span>
        <p>${t.limitation}</p>
      </div>
      <div class="theory-row">
        <span class="theory-tag good">방향</span>
        <p>${t.direction}</p>
      </div>
    </div>
  `).join("");
}

/* ---------------- 전체 구조 ---------------- */
function renderStructure() {
  const wrap = document.getElementById("structure-diagram");
  const s = DATA.structure;
  wrap.innerHTML = `
    <div class="structure-grid">
      <div class="structure-box big-num">
        <div class="num">${s.big[0]}</div>
        <div class="label">${s.labels[0]}</div>
        <div class="sub">5개 챕터 × 4개 게임</div>
      </div>
      <div class="structure-op">+</div>
      <div class="structure-box big-num alt">
        <div class="num">${s.big[1]}</div>
        <div class="label">${s.labels[1]}</div>
        <div class="sub">전환 구간에 분산 배치</div>
      </div>
      <div class="structure-op">=</div>
      <div class="structure-box big-num final">
        <div class="num">${s.big[2]}</div>
        <div class="label">${s.labels[2]}</div>
        <div class="sub">체류시간 × 몰입강도 ↑</div>
      </div>
    </div>
    <p class="structure-note">${s.note}</p>
  `;
}

/* ---------------- 메인 스토리 ---------------- */
let currentChapter = 1;

function renderStory() {
  document.getElementById("story-intro").textContent = DATA.storyIntro;

  const why = document.getElementById("story-why");
  why.innerHTML = `
    <div class="why-box">
      <h3>${DATA.storyWhy.title}</h3>
      <div class="why-grid">
        ${DATA.storyWhy.points.map(p => `
          <div class="why-item">
            <div class="why-title">${p.title}</div>
            <div class="why-desc">${p.desc}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const synopsis = document.getElementById("story-synopsis");
  synopsis.innerHTML = `
    <div class="synopsis-box">
      <span class="synopsis-mark">"</span>
      <p>${DATA.storySynopsis}</p>
    </div>
  `;

  const tabs = document.getElementById("chapter-tabs");
  tabs.innerHTML = `
    <div class="tab-row">
      ${DATA.chapters.map(c => `
        <button class="chapter-tab" data-chapter="${c.id}" data-theme="${c.theme}">
          <span class="tab-icon">${c.icon}</span>
          <span class="tab-num">CH ${c.id}</span>
          <span class="tab-name">${c.title}</span>
        </button>
      `).join("")}
    </div>
  `;

  tabs.querySelectorAll(".chapter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentChapter = parseInt(btn.dataset.chapter, 10);
      renderChapterPanel();
    });
  });

  renderChapterPanel();
}

function renderChapterPanel() {
  const panel = document.getElementById("chapter-panel");
  const c = DATA.chapters.find(ch => ch.id === currentChapter);

  document.querySelectorAll(".chapter-tab").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.chapter, 10) === currentChapter);
  });

  const story = document.getElementById("story");
  story.className = "section story-section theme-" + c.theme;

  panel.innerHTML = `
    <div class="chapter-card">
      <div class="chapter-head">
        <div class="chapter-icon">${c.icon}</div>
        <div>
          <div class="chapter-eyebrow">CHAPTER ${c.id}</div>
          <h3>${c.title} <span class="chapter-subtitle">— ${c.subtitle}</span></h3>
          <p class="chapter-mood">${c.mood}</p>
        </div>
      </div>
      <div class="game-grid">
        ${c.games.map(g => `
          <div class="game-card">
            <div class="game-id">${g.id}</div>
            <h4>${g.name}</h4>
            <div class="game-format">${g.format}</div>
            <p class="game-desc">${g.desc}</p>
            <div class="game-ref">${g.ref}</div>
          </div>
        `).join("")}
      </div>
      ${c.env ? `
        <div class="env-note">
          <div class="env-label">🌐 환경 스토리텔링</div>
          <p>${c.env}</p>
        </div>
      ` : ""}
    </div>
  `;

  panel.querySelectorAll(".game-card").forEach((el, i) => {
    el.style.animationDelay = (i * 0.06) + "s";
    el.classList.add("fade-pop");
  });
}

/* ---------------- 개별 게임 아일랜드 ---------------- */
function renderIslands() {
  const wrap = document.getElementById("island-cards");
  wrap.innerHTML = DATA.islands.map(i => `
    <div class="card island-card">
      <div class="card-icon">${i.icon}</div>
      <div class="island-id">${i.id}</div>
      <h4>${i.name}</h4>
      <div class="game-format">${i.format}</div>
      <p class="game-desc">${i.desc}</p>
      <div class="island-tag">${i.involvement}</div>
    </div>
  `).join("");
}

/* ---------------- 체크리스트 ---------------- */
function renderChecklist() {
  const nitsche = document.getElementById("nitsche-table");
  nitsche.innerHTML = `
    <h3 class="subhead">Nitsche의 5개 층위 체크</h3>
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>층위</th><th>질문</th><th>나쁜 예</th><th>좋은 예</th></tr>
        </thead>
        <tbody>
          ${DATA.nitsche.map(r => `
            <tr>
              <td class="cell-strong">${r.layer}</td>
              <td>${r.question}</td>
              <td class="cell-bad">${r.bad}</td>
              <td class="cell-good">${r.good}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  const calleja = document.getElementById("calleja-bars");
  calleja.innerHTML = `
    <h3 class="subhead">Calleja의 6개 involvement 균형 (전체 30개 중 목표 비율)</h3>
    <div class="bars-wrap">
      ${DATA.calleja.map(c => `
        <div class="bar-row">
          <div class="bar-label">
            <span class="bar-name">${c.name}</span>
            <span class="bar-kr">${c.kr}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" data-pct="${c.pct}" style="width:0%"></div>
            <span class="bar-ratio">${c.ratio}</span>
          </div>
          <div class="bar-examples">${c.examples}</div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ---------------- 동선 설계 ---------------- */
function renderFlow() {
  document.getElementById("flow-intro").textContent = DATA.flowIntro;

  const diagram = document.getElementById("flow-diagram");
  diagram.innerHTML = `
    <div class="flow-scroll">
      <div class="flow-row">
        ${DATA.flowSteps.map((s, idx) => `
          ${idx > 0 ? `<div class="flow-arrow">→</div>` : ""}
          <div class="flow-node flow-${s.type}${s.theme ? " theme-" + s.theme : ""}">
            <div class="flow-icon">${s.icon}</div>
            <div class="flow-label">${s.label.replace("\n", "<br>")}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const principles = document.getElementById("flow-principles");
  principles.innerHTML = DATA.flowPrinciples.map(p => `
    <div class="card principle-card">
      <div class="card-icon">${p.icon}</div>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join("");
}

/* ---------------- 차별화 비교 ---------------- */
function renderComparison() {
  const wrap = document.getElementById("comparison-table");
  wrap.innerHTML = `
    <div class="compare-head">
      <div class="compare-col-label"></div>
      <div class="compare-col-label before">기존 시설</div>
      <div class="compare-col-label after">1000평 테마파크 — 해류 탐험대</div>
    </div>
    ${DATA.comparison.map(r => `
      <div class="compare-row">
        <div class="compare-item">${r.item}</div>
        <div class="compare-before">${r.before}</div>
        <div class="compare-arrow">→</div>
        <div class="compare-after">${r.after}</div>
      </div>
    `).join("")}
  `;
}

/* ---------------- 실행 우선순위 ---------------- */
function renderPriority() {
  document.getElementById("priority-intro").textContent = DATA.priorityIntro;

  const wrap = document.getElementById("priority-timeline");
  wrap.innerHTML = DATA.priorities.map((p, idx) => `
    <div class="priority-item">
      <div class="priority-num">${idx + 1}</div>
      <div class="priority-body">
        <h4>${p.title} <span class="priority-ref">${p.ref}</span></h4>
        <p>${p.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ---------------- 참고문헌 ---------------- */
function renderReferences() {
  document.getElementById("ref-intro").textContent = DATA.refIntro;

  const wrap = document.getElementById("ref-groups");
  wrap.innerHTML = DATA.refGroups.map((g, gi) => `
    <div class="ref-group reveal">
      <h3 class="subhead">${g.title} <span class="ref-count">${g.count}</span></h3>
      <div class="accordion">
        ${g.papers.map((p, pi) => `
          <div class="accordion-item">
            <button class="accordion-trigger" data-group="${gi}" data-paper="${pi}">
              <span class="accordion-title">${p.title} <span class="accordion-year">${p.year}</span></span>
              <span class="accordion-plus">+</span>
            </button>
            <div class="accordion-body">
              <p class="accordion-line">"${p.line}"</p>
              <p class="accordion-example">${p.example}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  document.getElementById("ref-link").innerHTML = `<p class="ref-footnote">${DATA.refLink}</p>`;

  wrap.querySelectorAll(".accordion-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      item.classList.toggle("open");
    });
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

/* ---------------- 네비게이션 ---------------- */
function initNav() {
  const nav = document.getElementById("nav");
  const groups = document.querySelectorAll(".nav-group");
  const links = document.querySelectorAll(".nav-dropdown a");
  const sections = [...links].map(l => document.querySelector(l.getAttribute("href")));

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);

    let current = sections[0];
    sections.forEach(sec => {
      if (sec && window.scrollY >= sec.offsetTop - 140) current = sec;
    });

    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current.id);
    });
    groups.forEach(g => {
      g.classList.toggle("active", !!g.querySelector(".nav-dropdown a.active"));
    });
  });

  // 모바일/터치: 클릭으로 드롭다운 열고 닫기
  groups.forEach(g => {
    const top = g.querySelector(".nav-top");
    top.addEventListener("click", () => {
      const wasOpen = g.classList.contains("open");
      groups.forEach(other => other.classList.remove("open"));
      if (!wasOpen) g.classList.add("open");
    });
  });

  links.forEach(l => {
    l.addEventListener("click", () => {
      groups.forEach(g => g.classList.remove("open"));
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-group")) {
      groups.forEach(g => g.classList.remove("open"));
    }
  });
}

/* ---------------- 스크롤 reveal ---------------- */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const bars = document.querySelectorAll(".bar-fill");

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");

        if (entry.target.id === "calleja-bars") {
          bars.forEach(b => {
            b.style.width = b.dataset.pct + "%";
          });
        }
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
