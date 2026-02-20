"use strict";

const toggle = document.getElementById("toggle");

browser.storage.sync.get({ enabled: true }).then((data) => {
  toggle.checked = data.enabled;
});

toggle.addEventListener("change", () => {
  browser.storage.sync.set({ enabled: toggle.checked });
});
