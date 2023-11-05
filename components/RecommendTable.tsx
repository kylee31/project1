import ReactTable from "@/common/ReactTable";
import { useSearchWord } from "@/states/stores";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecommendTable() {
  const columns = [
    { accessor: "spatialCoverage", Header: "관련위치", width: "20%" },
    { accessor: "title", Header: "제목", width: "30%" },
    { accessor: "reference", Header: "관련문의", width: "20%" },
    { accessor: "viewCnt", Header: "조회수", width: "5%" },
  ];
  const examData = [
    {
      spatialCoverage: "",
      title: "",
      reference: "",
      viewCnt: "",
    },
  ];

  /*
spatialCoverage: "강원 인제군 서화면 서흥리"
title: "대한민국 람사르 습지 1호, 인제 대암산 용늪"
reference: "인제군청 문화관광 033)460-2081~4"
viewCnt: "1894"
?url: "https://www.mcst.go.kr/kor/s_culture/tour/tourView.jsp?pSeq=&pDetailSeq=608"
*/

  /* axios로 api 불러오기 쿼리 파라미터~
    http://api.kcisa.kr/openapi/API_CNV_060/request?serviceKey=8f0d30a9-ff1f-4453-980a-2df98ca7dc3a&numOfRows=10
    */
  const { searchWord } = useSearchWord();
  const [data, setData] = useState(examData);
  const [isGetDataSuccess, setIsGetDataSuccess] = useState(true);

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
            ? (setData(res.data.response.body.items.item),
              setIsGetDataSuccess(true))
            : (setData(examData), setIsGetDataSuccess(false))
        )
        .catch((err) => console.log(err));
    };

    getData();
  }, [searchWord]);

  return (
    <>
      {searchWord === "대한민국" && <>가고 싶은 장소를 검색해주세요! 🧐</>}
      {searchWord !== "대한민국" && isGetDataSuccess && (
        <ReactTable
          columns={columns}
          data={data.map((items) => ({
            spatialCoverage:
              items.spatialCoverage !== null ? items.spatialCoverage : ".",
            title: items.title !== null ? items.title : ".",
            reference: items.reference !== null ? items.reference : ".",
            viewCnt: items.viewCnt !== null ? items.viewCnt : ".",
          }))}
        />
      )}
      {isGetDataSuccess === false && <>이 곳에는 아직 추천장소가 없어요😥</>}
    </>
  );
}
