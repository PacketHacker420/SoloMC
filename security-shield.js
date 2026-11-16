/**
 * Single-Domain Frontend Security Shield
 * Locks execution to one domain and blocks framing, XSS payloads, and rapid form spam.
 */
(function () {
  "use strict";

  // CONFIGURATION: Enter your single domain here
  const PROTECTED_DOMAIN = "solomc.net";
  const FORM_COOLDOWN_MS = 3000;
  const MAX_INPUT_LENGTH = 2000;

  const currentHost = window.location.hostname.toLowerCase();

  // 1. SINGLE-DOMAIN LOCK & HTTPS ENFORCEMENT
  if (currentHost !== PROTECTED_DOMAIN) {
    window.location.replace("https://" + PROTECTED_DOMAIN + window.location.pathname + window.location.search);
    return;
  }

  if (window.location.protocol === "http:") {
    window.location.replace("https://" + PROTECTED_DOMAIN + window.location.pathname + window.location.search);
    return;
  }

  // 2. ANTI-CLICKJACKING (Frame Busting)
  if (window.top !== window.self) {
    try {
      window.top.location = window.self.location;
    } catch (e) {
      document.documentElement.innerHTML = "";
    }
  }

  // 3. INPUT SANITIZER & XSS FILTER
  function sanitizeText(str) {
    if (typeof str !== "string") return "";
    return str
      .slice(0, MAX_INPUT_LENGTH)
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
      .replace(/javascript:/gi, "");
  }

  // 4. FORM RATE-LIMITER & PAYLOAD GUARD
  let lastSubmitTime = 0;

  document.addEventListener("submit", function (event) {
    const now = Date.now();
    if (now - lastSubmitTime < FORM_COOLDOWN_MS) {
      event.preventDefault();
      alert("Please wait a few seconds before submitting again.");
      return;
    }
    lastSubmitTime = now;

    const inputs = event.target.querySelectorAll("input[type='text'], input[type='email'], textarea");
    inputs.forEach(function (input) {
      input.value = sanitizeText(input.value);
    });
  }, true);

  window.SoloShield = {
    sanitize: sanitizeText
  };
})();
