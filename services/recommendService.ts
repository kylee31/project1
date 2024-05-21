import axios from "axios";

export const getRecommendData = async ({
  searchWord,
}: {
  searchWord: string;
}) => {
  const HOST = "http://api.kcisa.kr/openapi/API_CNV_061/request";
  const appKey = process.env.NEXT_PUBLIC_RECOMMEND_KEY;

  const requestUrl = `${HOST}?serviceKey=${appKey}&keyword=${searchWord}`;

  //   const getData = async () => {
  //       await axios
  //         .get(requestUrl)
  //         .then((res) =>
  //           res.data.response.body.items !== null
  //             ? (setRecommendData(res.data.response.body.items.item),
  //               setIsGetRecommendData(true))
  //             : setIsGetRecommendData(false)
  //         )
  //         .catch((err) => console.log(err));
  //     };

  const datas = await fetch(requestUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    //cache: "no-store", default. 옵션 필요X?
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      if (data.response.body.items !== null) {
        return data.response.body.items.item;
      }
    })
    .catch((err) => console.log(err));
  return datas;
};
