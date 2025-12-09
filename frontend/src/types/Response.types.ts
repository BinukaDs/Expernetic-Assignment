import type { BookDataTypes } from "./Book.types";

export interface responseDataTypes {
  message: string;
  status: number | string;
  books?: BookDataTypes[];
}
