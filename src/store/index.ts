import { atom } from "jotai";

export const searchValueAtom = atom<string>("korea");
export const pageAtom = atom<number>(1);
export const perPage = atom<number>(30);
