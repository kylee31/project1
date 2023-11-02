import { create } from "zustand";

interface SearchWord{
  searchWord: string;
  setSearchWord: (txt: string) => void;
}

export const useSearchWord=create<SearchWord>(set=>({
    searchWord:"",
    setSearchWord:(txt:string)=>{
        set(()=>({searchWord:txt}));
    },
}))