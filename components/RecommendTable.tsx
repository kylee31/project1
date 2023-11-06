import ReactTable from "@/common/ReactTable";
import {
  useIsGetRecommendData,
  useIsToggle,
  useRecommendData,
  useSearchWord,
} from "@/states/stores";
import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

export default function RecommendTable() {
  const columns = [
    { accessor: "spatialCoverage", Header: "관련위치", width: "20%" },
    { accessor: "title", Header: "제목", width: "30%" },
    { accessor: "reference", Header: "관련문의", width: "20%" },
    { accessor: "viewCnt", Header: "조회수", width: "5%" },
  ];

  const { searchWord } = useSearchWord();
  const { recommendData, setRecommendData } = useRecommendData();
  const { isGetRecommendData, setIsGetRecommendData } = useIsGetRecommendData();
  const { isToggle } = useIsToggle();

  useEffect(() => {
    const HOST = "http://api.kcisa.kr/openapi/API_CNV_060/request";
    const SERVICE_KEY = "8f0d30a9-ff1f-4453-980a-2df98ca7dc3a";

    const requestUrl = `${HOST}?serviceKey=${SERVICE_KEY}&keyword=${searchWord}`;

    const getData = async () => {
      await axios
        .get(requestUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) =>
          res.data.response.body.items !== null
            ? (setRecommendData(res.data.response.body.items.item),
              setIsGetRecommendData(true))
            : setIsGetRecommendData(false)
        )
        .catch((err) => console.log(err));
    };

    //toggle ture일때만 검색하도록
    isToggle && getData();
  }, [searchWord]);

  return (
    <>
      {searchWord === "대한민국" && (
        <div>
          추천 행사를 보고 싶다면,
          <span style={{ color: "red" }}> {"단어"}</span>로 검색해주세요! 🧐
          <span style={{ color: "gray" }}> (ex. 서울, 제주, 경기, 고양)</span>
        </div>
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
        <NoData>
          이 곳에는 아직 추천장소가 없어요😥
          <div
            style={{ color: "gray" }}
          >{`(Tip! 조금 더 넓은 지역명으로 검색해보세요)`}</div>
        </NoData>
      )}
    </>
  );
}

const NoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
