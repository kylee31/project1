import { create } from "zustand";

interface SearchWord{
  searchWord: string;
  setSearchWord: (txt: string) => void;
}

export const useSearchWord=create<SearchWord>(set=>({
    searchWord:"대한민국",
    setSearchWord:(txt:string)=>{
        set(()=>({searchWord:txt}));
    },
}))