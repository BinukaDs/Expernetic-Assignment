import { responseDataTypes } from "@/types/Plant";
import type { Book } from "@/types/Book.types";

export const FetchBooks = async (
  BASE: string,
  UserId: string
): Promise<Book> => {
  return await fetch(BASE + "/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ UserId: UserId }),
  })
    .then((response) => {
      return response.json();
    })
    .then((payload) => {
      return payload.plants;
    })
    .catch((error) => {
      return console.error("Error fetching plants:", error);
    });
};

export const FetchBookDetails = (
  BASE: string,
  plantId: string,
  UserId: string
): Promise<Book> => {
  return fetch(BASE + "/plants/plant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plantId: plantId, userId: UserId }),
  })
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((payload) => {
      // console.log(payload);
      return payload.plant;
    })
    .catch((error) => {
      return console.error("Error fetching plant details:", error);
    });
};

export const AddBook = async (
  BASE: string,
  Values: {
    id: string,
    title: string,
    YearPublished: number,

  }
): Promise<responseDataTypes> => {
  return await fetch(BASE + "/plants/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Values),
  })
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
};

export const UpdatePlant = async (
  BASE: string,
  Values: {
    nickname: string;
    location: string;
    speciesId: string;
    environment: string;
  }
): Promise<responseDataTypes> => {
  return await fetch(BASE + "/plants/plant/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
};

export const DeletePlant = async (
  BASE: string,
  UserId: string,
  plantId: string,
  imageName: string
): Promise<responseDataTypes> => {
  return await fetch(BASE + "/plants/plant/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: UserId,
      plantId: plantId,
      imageName: imageName,
    }),
  })
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error("Error deleting plant:", error);
      return error;
    });
};

export const getFavourites = async (
  BASE: string,
  userId: string
): Promise<Book> => {
  return await fetch(BASE + "/plants/favourite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  })
    .then((response) => {
      return response.json();
    })
    .then((payload) => {
      return payload.plants;
    })
    .catch((error) => {
      console.error("Error fetching favourites:", error);
      return error;
    });
};

export const setFavourite = async (
  BASE: string,
  plantId: string,
  isFavourite: boolean
): Promise<responseDataTypes> => {
  return await fetch(BASE + "/plants/favourite/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plantId: plantId, isFavourite: isFavourite }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error setting favourite:", error);
      return error;
    });
};