import { RecommendType } from "@/types/recommendType";
import { create } from "zustand";


//검색어(추천행사, 날씨, 지도 로딩)
interface SearchWord{
  searchWord: string;
  setSearchWord: (txt: string) => void;
}

export const useSearchWord=create<SearchWord>(set=>({
    searchWord:"대한민국",
    setSearchWord:(txt)=>{
        set(()=>({searchWord:txt}));
    },
}))

//탭 메뉴 선택(추천행사, 날씨 정보 로딩)
interface TapMenu{
  tapMenu:number;
  setTapMenu:(num:number)=>void;
}

export const useTapMenu=create<TapMenu>(set=>({
  tapMenu:0,
  setTapMenu:(num)=>{
    set(()=>({tapMenu:num}))
  }
}))

//오늘 날짜(날씨, 캘린더 로딩)
interface TodayDate{
  todayDate:string;
  setTodayDate:(txt:string)=>void;
}

export const useTodayDate=create<TodayDate>(set=>({
  todayDate:"19980310",
  setTodayDate:(txt)=>{set(()=>({todayDate:txt}))}
}))

//toggle 메뉴(지도, 탭 메뉴)
interface IsToggle{
  isToggle:boolean;
  setIsToggle:(tog:boolean)=>void;
}

export const useIsToggle=create<IsToggle>(set=>({
  isToggle:true,
  setIsToggle:(tog)=>{set(()=>({isToggle:tog}))}
}))

//추천장소 데이터
interface RecommendData{
  recommendData:RecommendType;
  setRecommendData:(obj:RecommendType)=>void;
}

export const useRecommendData=create<RecommendData>(set=>({
  recommendData:
  [{
    spatialCoverage: "",
    title: "",
    reference: "",
    viewCnt: "",
  }],
  setRecommendData:(obj)=>{set(()=>({recommendData:obj}))}
}))

//추천장소 데이터 유무
interface IsGetRecommendData{
  isGetRecommendData:boolean;
  setIsGetRecommendData:(tog:boolean)=>void;
}

export const useIsGetRecommendData=create<IsGetRecommendData>(set=>({
  isGetRecommendData:true,
  setIsGetRecommendData:(tog)=>{set(()=>({isGetRecommendData:tog}))}
}))