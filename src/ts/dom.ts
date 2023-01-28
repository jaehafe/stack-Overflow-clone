export const $ = <T extends HTMLElement = HTMLDivElement>(selector: string) =>
  document.querySelector(selector) as T;
