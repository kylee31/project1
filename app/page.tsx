import LoadingScreen from "@/components/load/LoadingScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TO TRAVEL IS TO LIVE!",
  description:
    "지역을 검색하여 추천 장소를 알아보고, 캘린더 기록 및 메모 작성이 한 페이지 내에서 가능한 여행(국내) 계획 세우기 서비스",
  keywords: ["Next.js", "국내 여행", "토이 프로젝트", "로딩 중"],
  //추가 학습 후 새로 작성 필요
  // viewport: "initial-scale=1.0, width=device-width",
  // openGraph: {
  //   images: "/imgs/travel.png",
  //   type: "article",
  //   locale: "ko_KR",
  // },
};

export default function Main() {
  return <LoadingScreen />;
}
