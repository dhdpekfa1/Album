import { ImageCardType } from "@/types/home";

export const getBookmarks = (): ImageCardType[] =>
  JSON.parse(localStorage.getItem("bookmarks") || "[]");

export const setBookmarks = (bookmarks: ImageCardType[]) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
