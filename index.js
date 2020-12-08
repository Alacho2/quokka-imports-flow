// @flow
import type { Suit } from './Types'

import WindowContext, {
  type ContentWindow,
} from "./WindowContext.js";

function square(n: number): number {
  return n * n;
}

square(2);