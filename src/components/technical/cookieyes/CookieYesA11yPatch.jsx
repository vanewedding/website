import { useEffect } from "react";

const COOKIEYES_SELECTORS = [
  ".cky-btn",
  ".cky-btn-revisit",
  ".cky-banner-element",
  ".cky-revisit-bottom-left",
  ".cky-revisit-bottom-right",
  "[data-cky-tag]",
];

function isNativeInteractive(element) {
  return ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(
    element.tagName
  );
}

function getCookieLabel(element, isEnglish) {
  const text = element.textContent?.trim();

  if (text) return text;

  return isEnglish ? "Open cookie preferences" : "Apri preferenze cookie";
}

function patchElement(element, isEnglish) {
  if (!(element instanceof HTMLElement)) return;

  const label = getCookieLabel(element, isEnglish);
  const isNative = isNativeInteractive(element);

  if (!element.hasAttribute("aria-label")) {
    element.setAttribute("aria-label", label);
  }

  if (element.getAttribute("tabindex") === "-1") {
    element.removeAttribute("tabindex");
  }

  if (!isNative) {
    element.setAttribute("role", "button");

    if (!element.hasAttribute("tabindex")) {
      element.setAttribute("tabindex", "0");
    }
  }

  if (isNative || element.dataset.vaneA11yPatched === "true") return;

  element.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    element.click();
  });

  element.dataset.vaneA11yPatched = "true";
}

function patchCookieYesControls() {
  const isEnglish = document.documentElement.lang?.startsWith("en");

  document
    .querySelectorAll(COOKIEYES_SELECTORS.join(","))
    .forEach((element) => patchElement(element, isEnglish));
}

export default function CookieYesA11yPatch() {
  useEffect(() => {
    patchCookieYesControls();

    const observer = new MutationObserver(() => {
      patchCookieYesControls();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "tabindex", "aria-label"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
