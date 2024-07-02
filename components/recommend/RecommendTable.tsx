"use client";

import ReactTable from "@/components/common/ReactTable";
import {
  useIsGetRecommendDataStore,
  useIsToggleStore,
  useNowHours,
  useRecommendDataStore,
  useSearchWordStore,
} from "@/services/states/stores";
import { useEffect } from "react";
import styled from "styled-components";
import Alert from "../Alert";
import { getRecommendData } from "@/services/recommendService";
import { columns } from "@/services/data/recommendData";
import { useIsClick } from "@/services/states/loginStores";

const COLUMNS = columns;

export default function RecommendTable() {
  const { searchWord } = useSearchWordStore();
  const { recommendData, setRecommendData } = useRecommendDataStore();
  const { isGetRecommendData, setIsGetRecommendData } =
    useIsGetRecommendDataStore();
  const { isToggle } = useIsToggleStore();
  const { isClick } = useIsClick();
  const { nowHours } = useNowHours();

  useEffect(() => {
    const getData = async () => {
      const data = await getRecommendData({ searchWord });
      data !== null
        ? (setRecommendData(data), setIsGetRecommendData(true))
        : setIsGetRecommendData(false);
    };
    isToggle && getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord, isClick, isToggle]);

  return (
    <>
      {nowHours >= 0 && nowHours <= 8 ? (
        <Alert />
      ) : (
        <>
          {searchWord === "대한민국" && (
            <FirstBox>
              <div>
                추천 장소를 보고 싶다면,
                <span style={{ color: "red" }}> {"지역명(단어)"}</span>으로
                검색해주세요! 🧐
              </div>
              <div style={{ color: "gray" }}> (ex. 서울, 제주, 경기, 고양)</div>
            </FirstBox>
          )}
          {searchWord !== "대한민국" && isGetRecommendData && (
            <ReactTable
              columns={COLUMNS}
              data={recommendData.map((items) => ({
                spatialCoverage:
                  items.spatialCoverage !== null ? items.spatialCoverage : ".",
                title: items.title !== null ? items.title : ".",
                reference: items.reference !== null ? items.reference : ".",
                viewCnt: items.viewCnt !== null ? items.viewCnt : ".",
              }))}
            />
          )}
          {isGetRecommendData === false && (
            <NoDataBox>
              이 곳에는 아직 추천장소가 없어요😥
              <div
                style={{ color: "gray" }}
              >{`(Tip! 조금 더 넓은 지역명으로 검색해보세요)`}</div>
            </NoDataBox>
          )}
        </>
      )}
    </>
  );
}

const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
