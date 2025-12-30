// src/router/routesConfig.js
export const routesConfig = [
  {
    path: "/it",
    children: [
      { index: true },
      { path: "gallery" },
      { path: "gallery/:slug" },
      { path: "form" },
      { path: "about" },
      { path: "privacy-policy" },
      { path: "cookie-policy" },
    ],
  },
  {
    path: "/eng",
    children: [
      { index: true },
      { path: "gallery" },
      { path: "gallery/:slug" },
      { path: "form" },
      { path: "about" },
      { path: "privacy-policy" },
      { path: "cookie-policy" },
    ],
  },
];
