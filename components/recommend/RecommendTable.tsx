"use client";

import ReactTable from "@/common/ReactTable";
import {
  useIsClick,
  useIsGetRecommendDataStore,
  useIsToggleStore,
  useNowHours,
  useRecommendDataStore,
  useSearchWordStore,
} from "@/states/stores";
import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import Alert from "../Alert";

export default function RecommendTable() {
  const columns = [
    { accessor: "spatialCoverage", Header: "관련위치", width: "20%" },
    { accessor: "title", Header: "제목", width: "30%" },
    { accessor: "reference", Header: "관련문의", width: "20%" },
    { accessor: "viewCnt", Header: "조회수", width: "5%" },
  ];

  const { searchWord } = useSearchWordStore();
  const { recommendData, setRecommendData } = useRecommendDataStore();
  const { isGetRecommendData, setIsGetRecommendData } =
    useIsGetRecommendDataStore();
  const { isToggle } = useIsToggleStore();
  const { isClick } = useIsClick();
  const { nowHours } = useNowHours();

  useEffect(() => {
    const HOST = "http://api.kcisa.kr/openapi/API_CNV_060/request";
    const appKey = process.env.NEXT_PUBLIC_RECOMMEND_KEY;

    const requestUrl = `${HOST}?serviceKey=${appKey}&keyword=${searchWord}`;

    // const getData = async () => {
    //   await axios
    //     .get(requestUrl)
    //     .then((res) =>
    //       res.data.response.body.items !== null
    //         ? (setRecommendData(res.data.response.body.items.item),
    //           setIsGetRecommendData(true))
    //         : setIsGetRecommendData(false)
    //     )
    //     .catch((err) => console.log(err));
    // };

    const getData = async () => {
      await fetch(requestUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        // cache: "no-store", 첫페이지가 SSG이므로 옵션 필요X?
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) =>
          data.response.body.items !== null
            ? (setRecommendData(data.response.body.items.item),
              setIsGetRecommendData(true))
            : setIsGetRecommendData(false)
        )
        .catch((err) => console.log(err));
    };

    //toggle ture일때만 검색하도록
    isToggle && getData();
  }, [searchWord, isClick]);

  return (
    <>
      {nowHours >= 0 && nowHours <= 7 ? (
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
              columns={columns}
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
