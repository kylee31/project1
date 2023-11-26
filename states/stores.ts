import { RecommendType } from "@/types/recommendType";
import { create } from "zustand";


//검색어(추천행사, 날씨, 지도 로딩)
interface SearchWord{
  searchWord: string;
  setSearchWord: (txt: string) => void;
}

export const useSearchWordStore=create<SearchWord>(set=>({
    searchWord:"대한민국",
    setSearchWord:(txt)=>{
        set(()=>({searchWord:txt}));
    }
}))

//탭 메뉴 선택(추천행사, 날씨 정보 로딩)
interface TapMenu{
  tapMenu:number;
  setTapMenu:(num:number)=>void;
}

export const useTapMenuStore=create<TapMenu>(set=>({
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

export const useTodayDateStore=create<TodayDate>(set=>({
  todayDate:"19980310",
  setTodayDate:(txt)=>{set(()=>({todayDate:txt}))}
}))

//toggle 메뉴(지도, 탭 메뉴)
interface IsToggle{
  isToggle:boolean;
  setIsToggle:(tog:boolean)=>void;
}

export const useIsToggleStore=create<IsToggle>(set=>({
  isToggle:true,
  setIsToggle:(tog)=>{set(()=>({isToggle:tog}))}
}))

//추천장소 데이터
interface RecommendData{
  recommendData:RecommendType;
  setRecommendData:(obj:RecommendType)=>void;
}

export const useRecommendDataStore=create<RecommendData>(set=>({
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

export const useIsGetRecommendDataStore=create<IsGetRecommendData>(set=>({
  isGetRecommendData:true,
  setIsGetRecommendData:(tog)=>{set(()=>({isGetRecommendData:tog}))}
}))

//로그인 여부
interface IsLogIn{
  isLogIn:boolean;
  setIsLogIn:(tog:boolean)=>void;
}

export const useIsLogInStore=create<IsLogIn>(set=>({
  isLogIn:false,
  setIsLogIn:(tog)=>(set(()=>({isLogIn:tog})))
}))

//로그인 모달창 닫기
interface IsLogInModal{
  isLogInModal:boolean,
  setIsLogInModal:(tog:boolean)=>void
}

export const useIsLogInModalStore=create<IsLogInModal>(set=>({
  isLogInModal:false,
  setIsLogInModal:(tog)=>(set(()=>({isLogInModal:tog})))
}))

interface IsClick{
  isClick:boolean,
  setIsClick:(tog:boolean)=>void
}

export const useIsClick=create<IsClick>(set=>({
  isClick:false,
  setIsClick:(tog)=>(set(()=>({isClick:tog})))
}))