import type { BookDataTypes } from "./Book.types";

export interface responseDataTypes {
  status: number | string;
  books?: BookDataTypes[];
}
