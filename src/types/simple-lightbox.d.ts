declare global {
  class SimpleLightbox {
    constructor(selector: string | Element | NodeList | string, options?: any);
    destroy(): void;
    open?(index?: number): void;
    close?(): void;
  }
}

export {};

