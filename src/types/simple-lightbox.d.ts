// Type declaration for SimpleLightbox (global from CDN)
declare class SimpleLightbox {
  constructor(selector: string | Element | NodeList | string, options?: any);
  destroy(): void;
  open?(index?: number): void;
  close?(): void;
}
declare var SimpleLightbox: typeof SimpleLightbox;
export {};
