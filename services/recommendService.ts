import axios from "axios";

export const getRecommendData = async ({
  searchWord,
}: {
  searchWord: string;
}) => {
  const HOST = "http://api.kcisa.kr/openapi/API_CNV_061/request";
  const appKey = process.env.NEXT_PUBLIC_RECOMMEND_KEY;

  const requestUrl = `${HOST}?serviceKey=${appKey}&keyword=${searchWord}`;

  /*
  //fetch를 
  const getData = async () => {
    try {
      const response = await axios.get(requestUrl);
      if (response.status !== 200) { //fetch 실패
        throw new Error(`HTTP error! status: ${response.status}`);
      }    
      if (!response.data.response.body.items) { //falsy(null,undefined,false..)일 경우
        throw new Error('No items found in the response');
      }
      setRecommendData(response.data.response.body.items.item);
      setIsGetRecommendData(true);
    } catch (err) {
      console.error("Error fetching data:", err.message);
      setIsGetRecommendData(false);
    }
  };
  */

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      //cache: "force-cache", default값임을 알아두기, 현재 데이터 페칭 과정에서는 클라이언트 측에서 매번 검색어가 바뀌며
      //요청이 달라지기 때문에 효과적이지x React Query 사용으로 캐싱하기?
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.response.body.items !== null) {
      return data.response.body.items.item;
    }

    return null; //items가 null인 경우
  } catch (e) {
    console.log(e);
  }
};
