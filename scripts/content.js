"use strict";

(() => {
  const DIM_COLOR = "#15202b";
  const DIM_HSL = "210 34% 13%";
  const DIM_GRAY0 = "#1f2833"; // hsl(213, 25%, 16%) - search box, elevated surfaces
  const DIM_GRAY100 = "#38444d"; // hsl(210, 21%, 28%) - borders, elevated UI

  const STYLE_ID = "x-bg-customizer-style";
  const DYN_STYLE_ID = "x-bg-customizer-dyn";
  const FLAG_ATTR = "data-xbgc-active";
  const PATCHED_ATTR = "data-xbgc-orig";

  const A = `html[${FLAG_ATTR}="1"]`;

  const DIM_GRAYS = {
    "--color-gray-0":    "213 25% 16%",
    "--color-gray-50":   "211 24% 20%",
    "--color-gray-100":  "210 21% 28%",
    "--color-gray-200":  "210 20% 33%",
    "--color-gray-300":  "208 16% 43%",
    "--color-gray-400":  "208 14% 49%",
    "--color-gray-500":  "207 14% 54%",
    "--color-gray-600":  "208 15% 58%",
    "--color-gray-700":  "210 13% 60%",
    "--color-gray-800":  "209 13% 66%",
    "--color-gray-900":  "206 13% 79%",
    "--color-gray-1000": "203 13% 88%",
    "--color-gray-1100": "180 14% 97%",
  };

  const grayVars = Object.entries(DIM_GRAYS)
    .map(([k, v]) => `  ${k}: ${v} !important;`).join("\n");

  const STYLE_TEXT = `
/* Layer 1: Override Dim theme CSS custom properties on html */
${A} {
  --background: ${DIM_HSL} !important;
  --color-background: ${DIM_HSL} !important;
  --color-brand: 180 14% 97% !important;
  --color-text: 180 14% 97% !important;
  --color-nested-border: 210 13% 60% !important;
  --color-drop-shadow: 136 153 166 !important;
  --popover: ${DIM_HSL} !important;
  --secondary: 210 21% 28% !important;
  --muted: 210 21% 28% !important;
  --border: 210 21% 28% !important;
  --input: 210 21% 28% !important;
${grayVars}
}

/* Layer 1b: Override Jetfuel component variables */
${A} .jetfuel-style-root {
  --color-background: ${DIM_HSL} !important;
  --color-text: 180 14% 97% !important;
  --color-drop-shadow: 136 153 166 !important;
${grayVars}
}

/* Layer 2: Known atomic black/dark background classes */
${A} .r-kemksi {
  background-color: ${DIM_COLOR} !important;
}
${A} .r-1m3jxhj {
  background-color: ${DIM_COLOR} !important;
}
${A} .r-g2wdr4 {
  background-color: ${DIM_COLOR} !important;
}
${A} .r-z32n2g,
${A} .r-1fzgo2 {
  background-color: ${DIM_GRAY0} !important;
}
${A} .r-oelmt8,
${A} .r-1fkb3t2,
${A} .r-1791xod {
  background-color: ${DIM_GRAY100} !important;
}
${A} .r-2nnzd4,
${A} .r-7tj3zj,
${A} .r-124pnr2,
${A} .r-1rmo9u0,
${A} .r-1pgqg0k {
  background-color: ${DIM_COLOR} !important;
}

/* Layer 2b: Semi-transparent dark overlays → dim equivalents */
${A} .r-5zmot {
  background-color: rgba(21, 32, 43, 0.65) !important;
}
${A} .r-1fdnko3 {
  background-color: rgba(21, 32, 43, 0.75) !important;
}
${A} .r-7qzcwe {
  background-color: rgba(21, 32, 43, 0.95) !important;
}
${A} .r-loe9s5 {
  background-color: rgba(21, 32, 43, 0.77) !important;
}
${A} .r-drfeu3 {
  background-color: rgba(21, 32, 43, 0.5) !important;
}
${A} .r-2tavb8 {
  background-color: rgba(21, 32, 43, 0.6) !important;
}
${A} .r-1e4ma89 {
  background-color: rgba(21, 32, 43, 0.55) !important;
}
${A} .r-14tof1o {
  background-color: rgba(21, 32, 43, 0.7) !important;
}
${A} .r-19130f6 {
  background-color: rgba(31, 40, 51, 0.75) !important;
}
${A} .r-jxjguw {
  background-color: rgba(21, 32, 43, 0.52) !important;
}

/* Layer 2c: Known dark border color classes → dim equivalents */
${A} .r-1kqtdi0 {
  border-color: ${DIM_GRAY100} !important;
}
${A} .r-1roi411 {
  border-color: ${DIM_GRAY100} !important;
}

/* Layer 3: Stable structural selectors */
${A} body,
${A} #react-root,
${A} main[role="main"],
${A} [data-testid="primaryColumn"],
${A} [data-testid="sidebarColumn"],
${A} [data-testid="DMDrawer"],
${A} [data-testid="app-bar-backdrop"],
${A} [data-testid="ScrollSnap-List"],
${A} [data-testid="toolBar"],
${A} [data-testid="primaryColumn"] header,
${A} [data-testid="primaryColumn"] [role="tablist"],
${A} [data-testid="primaryColumn"] [role="tab"],
${A} [data-testid="sidebarColumn"] section,
${A} [data-testid="sidebarColumn"] aside,
${A} [data-testid="sidebarColumn"] nav,
${A} [data-testid="cellInnerDiv"] > div,
${A} [role="dialog"],
${A} [aria-modal="true"] {
  background-color: ${DIM_COLOR} !important;
}

/* Layer 3b: Search & typeahead dropdowns */
${A} [role="listbox"],
${A} [role="listbox"] > div,
${A} [data-testid="typeaheadDropdownWrapped"],
${A} [data-testid="typeaheadResult"],
${A} [data-testid="typeaheadResult"] > div,
${A} [data-testid="clearButton"],
${A} [data-testid="SearchBox_Search_Input_Wrapper"] {
  background-color: ${DIM_COLOR} !important;
}

/* Layer 3c: Hover states (typeahead only; posts have no native hover bg) */
${A} [data-testid="typeaheadResult"]:hover,
${A} [data-testid="typeaheadResult"]:hover > div {
  background-color: ${DIM_GRAY0} !important;
}

/* Layer 4: Inline black backgrounds (dividers/separators only) */
${A} .r-1pi2tsx.r-13qz1uu[style*="background-color: rgb(0, 0, 0)"],
${A} .r-1pi2tsx.r-13qz1uu[style*="background-color: rgb(0,0,0)"] {
  background-color: ${DIM_COLOR} !important;
}

/* Layer 5: Scrollbar */
${A} body {
  scrollbar-color: rgb(92, 110, 126) ${DIM_COLOR} !important;
}
`;

  let enabled = true;
  let observer = null;
  let mutationTimer = null;
  let scheduled = false;
  let detectedClasses = new Set();
  let patching = false; // guard against observer re-entry

  init();

  function init() {
    injectStyle();

    chrome.storage.sync.get({ enabled: true }, (data) => {
      enabled = data.enabled;
      observeDom();
      scheduleApply();
    });

    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === "sync" && changes.enabled) {
        enabled = changes.enabled.newValue;
        scheduleApply();
      }
    });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => scheduleApply(), { once: true });
    }
  }

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = STYLE_TEXT;
    (document.head || document.documentElement).appendChild(style);
  }

  // Map a dark-mode opaque background to its dim equivalent
  function dimBgFor(bg) {
    const m = bg.match(/^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return null;
    const r = +m[1], g = +m[2], b = +m[3];
    if (r + g + b < 15) return DIM_COLOR;         // near-black
    if (r < 25 && g < 30 && b < 35) return DIM_COLOR; // very dark (e.g. 15,20,25)
    if (r < 35 && g < 40 && b < 45) return DIM_GRAY0; // dark gray (e.g. 32,35,39)
    if (r < 50 && g < 55 && b < 60) return DIM_GRAY100; // medium dark (e.g. 39,44,48)
    return null;
  }

  // Map a dark-mode semi-transparent background to dim equivalent
  function dimSemiBgFor(bg) {
    const m = bg.match(/^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)/);
    if (!m) return null;
    const r = +m[1], g = +m[2], b = +m[3], a = +m[4];
    if (a < 0.25) return null; // too subtle to matter
    if (r < 50 && g < 55 && b < 60) {
      return `rgba(21, 32, 43, ${a})`;
    }
    return null;
  }

  // Map dark-mode border colors to dim equivalents
  function dimBorderFor(bc) {
    const m = bc.match(/^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return null;
    const r = +m[1], g = +m[2], b = +m[3];
    if (r >= 30 && r <= 60 && g >= 30 && g <= 60 && b >= 30 && b <= 65) {
      if (r + g + b < 120) return "hsl(211, 24%, 20%)";
      return DIM_GRAY100;
    }
    return null;
  }

  function detectAtomicClasses() {
    const additions = [];
    try {
      for (const sheet of document.styleSheets) {
        let rules;
        try { rules = sheet.cssRules; } catch (e) { continue; }
        for (const rule of rules) {
          if (!rule.style || !rule.selectorText) continue;

          const sel = rule.selectorText;
          const isAtomic = /^\.r-[a-z0-9]+$/i.test(sel);
          const isAtomicHover = /^\.r-[a-z0-9]+:hover$/i.test(sel);
          if (!isAtomic && !isAtomicHover) continue;

          const cls = sel.replace(/:hover$/, "").slice(1);
          const suffix = isAtomicHover ? ":hover" : "";
          const key = cls + suffix;
          if (detectedClasses.has(key)) continue;

          // Background color
          const bg = rule.style.backgroundColor;
          if (bg) {
            const dimBg = dimBgFor(bg);
            if (dimBg) {
              additions.push(`${A} .${cls}${suffix} { background-color: ${dimBg} !important; }`);
              detectedClasses.add(key);
              continue;
            }
            const dimSemi = dimSemiBgFor(bg);
            if (dimSemi) {
              additions.push(`${A} .${cls}${suffix} { background-color: ${dimSemi} !important; }`);
              detectedClasses.add(key);
              continue;
            }
          }

          // Border colors (non-hover only)
          if (isAtomic) {
            const bc = rule.style.borderColor || rule.style.borderBottomColor;
            if (bc) {
              const dimBc = dimBorderFor(bc);
              if (dimBc) {
                const prop = rule.style.borderColor ? "border-color" : "border-bottom-color";
                additions.push(`${A} .${cls} { ${prop}: ${dimBc} !important; }`);
                detectedClasses.add(key);
              }
            }
          }
        }
      }
    } catch (e) { /* ignore */ }

    if (additions.length > 0) {
      let dynEl = document.getElementById(DYN_STYLE_ID);
      if (!dynEl) {
        dynEl = document.createElement("style");
        dynEl.id = DYN_STYLE_ID;
        (document.head || document.documentElement).appendChild(dynEl);
      }
      dynEl.textContent = "/* Auto-detected atomic overrides */\n" + additions.join("\n");
    }
  }

  function observeDom() {
    if (!document.documentElement || observer) return;
    observer = new MutationObserver(() => {
      if (patching || mutationTimer) return;
      mutationTimer = setTimeout(() => {
        mutationTimer = null;
        scheduleApply();
      }, 100);
    });
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"]
    });
  }

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyState();
    });
  }

  function applyState() {
    if (patching) return;
    patching = true;
    try {
      injectStyle();
      const root = document.documentElement;
      if (!root) return;

      const shouldApply = enabled && isBlackDarkMode(root);

      if (shouldApply) {
        root.setAttribute(FLAG_ATTR, "1");
        detectAtomicClasses();
        patchInlineStyles();
      } else {
        root.removeAttribute(FLAG_ATTR);
        revertInlinePatches();
      }
    } finally {
      patching = false;
    }
  }

  function isBlackDarkMode(root) {
    // Primary: check X's data-theme attribute (no layout cost)
    const theme = root.getAttribute("data-theme");
    if (theme === "dark") return true;
    if (theme === "dim" || theme === "light") return false;

    // Fallback: check body computed background
    try {
      const body = document.body;
      if (!body) return false;
      const bg = getComputedStyle(body).backgroundColor;
      if (!bg || bg === "transparent") return false;
      // If our override is active, the bg will be DIM_COLOR not black
      if (bg === "rgb(21, 32, 43)") return true; // our DIM color = was dark
      const m = bg.match(/^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
      return m && Number(m[1]) < 5 && Number(m[2]) < 5 && Number(m[3]) < 5;
    } catch (e) {
      return false;
    }
  }

  function isBlackBg(bg) {
    return bg === "rgb(0, 0, 0)" || bg.startsWith("rgba(0, 0, 0") || bg.startsWith("rgba(0,0,0");
  }

  function isDarkBg(bg) {
    const m = bg.match(/^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/);
    return m && +m[1] < 50 && +m[2] < 55 && +m[3] < 60 && +m[1] + +m[2] + +m[3] < 150;
  }

  function patchInlineStyles() {
    // Patch ALL inline black/dark backgrounds (skip avatars)
    const els = document.querySelectorAll('[style*="background-color"]');
    for (const el of els) {
      if (el.hasAttribute(PATCHED_ATTR)) continue;
      if (el.closest('[data-testid*="UserAvatar"]')) continue;
      const bg = el.style.backgroundColor;
      if (!bg) continue;

      if (isBlackBg(bg)) {
        savePatch(el, bg);
        el.style.setProperty("background-color", DIM_COLOR, "important");
      } else if (isDarkBg(bg)) {
        savePatch(el, bg);
        el.style.setProperty("background-color", DIM_GRAY0, "important");
      }
    }

    // Body inline style
    const body = document.body;
    if (body && !body.hasAttribute(PATCHED_ATTR)) {
      const bg = body.style.backgroundColor;
      if (bg && isBlackBg(bg)) {
        savePatch(body, bg);
        body.style.setProperty("background-color", DIM_COLOR, "important");
      }
    }

    // Search box: walk up from input to find pill container
    const searchInput = document.querySelector('[data-testid="SearchBox_Search_Input"]');
    if (searchInput) {
      let el = searchInput.parentElement;
      while (el && el.tagName !== "FORM") {
        if (!el.hasAttribute(PATCHED_ATTR)) {
          try {
            const bg = getComputedStyle(el).backgroundColor;
            if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)" &&
                (isBlackBg(bg) || isDarkBg(bg))) {
              savePatch(el, el.style.backgroundColor || "");
              el.style.setProperty("background-color", DIM_GRAY0, "important");
            }
          } catch (e) { /* ignore */ }
        }
        el = el.parentElement;
      }
    }
  }

  function savePatch(el, origBg) {
    if (!el.hasAttribute(PATCHED_ATTR)) {
      el.setAttribute(PATCHED_ATTR, origBg);
    }
  }

  function revertInlinePatches() {
    const patched = document.querySelectorAll(`[${PATCHED_ATTR}]`);
    for (const el of patched) {
      const orig = el.getAttribute(PATCHED_ATTR);
      el.removeAttribute(PATCHED_ATTR);
      if (orig) {
        el.style.setProperty("background-color", orig);
      } else {
        el.style.removeProperty("background-color");
      }
    }
  }
})();
