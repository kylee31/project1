"use client";

import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Memo from "@/components/Memo";
import RecommendField from "@/components/RecommendField";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Map />
        <Calendar />
      </div>
      <div style={{ display: "flex" }}>
        <RecommendField />
        <Memo />
      </div>
    </div>
  );
}
