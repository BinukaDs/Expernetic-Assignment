import type { responseDataTypes } from "@/types/Response.types";
import type { BookDataTypes } from "@/types/Book.types";

export const FetchBooks = async (
  BASE: string
): Promise<responseDataTypes | void> => {
  return await fetch(BASE + "/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    const books = await response.json();
    return { status: response.status, books: books };
  });
};

export const AddBook = async (
  BASE: string,
  Values: BookDataTypes
): Promise<responseDataTypes> => {
  return await fetch(BASE + "/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Values),
  }).then((response) => {
    //console.log(response);
    response.json();
    return { status: response.status, response };
  });
};

export const UpdateBook = async (
  BASE: string,
  Values: BookDataTypes
): Promise<responseDataTypes> => {
  return await fetch(BASE + `/books/${Values.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Values),
  }).then((response) => {
    response.json();
    return { status: response.status, response };
  });
};

export const DeleteBook = async (
  BASE: string,
  BookId: number
): Promise<responseDataTypes> => {
  return await fetch(BASE + `/books/${BookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return { status: response.status };
  });
};

export const DeleteMultipleBooks = async (
  BASE: string,
  Ids: BookDataTypes["id"][]
): Promise<responseDataTypes> => {
  return await fetch(BASE + "/books/multiple", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Ids),
  }).then((response) => {
    return { status: response.status };
  });
};
