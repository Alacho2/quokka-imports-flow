// @flow
import {
  type Context,
  createContext,
} from "react";

export class ContentWindow extends HTMLElement {
  windowId: number;
  start: () => void;
  document: typeof document;
  Element: typeof Element;
  getSelection: typeof getSelection;
  HTMLElement: typeof HTMLElement;
  HTMLInputElement: typeof HTMLInputElement;
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
}

const WindowContext: Context<ContentWindow> = createContext(window);

export default WindowContext;
