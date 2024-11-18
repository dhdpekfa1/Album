import { atom } from "jotai";
import axios from "axios";

export const searchValueAtom = atom<string>("korea");
export const pageAtom = atom<number>(1);

// API 호출 함수
export const getDataApi = async (searchValue: string, page: number) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.unsplash.com/search/photos";

  try {
    const res = await axios.get(
      `${BASE_URL}/?query=${searchValue}&page=${page}&per_page=30&client_id=${apiKey}`
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};
