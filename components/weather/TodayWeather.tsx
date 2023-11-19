import { useEffect, useState } from "react";
import axios from "axios";
import { useTodayDateStore } from "@/states/stores";

export default function TodayWeather() {
  //오늘 날짜
  const today = new Date();
  const year = today.getFullYear().toString(); // 년도
  const month = (today.getMonth() + 1).toString(); // 월
  const date =
    today.getDate().toString().length === 1
      ? "0" + today.getDate().toString()
      : today.getDate().toString(); // 날짜

  const { todayDate, setTodayDate } = useTodayDateStore();
  const [getDatas, setGetDatas] = useState<any[]>([]);
  const [isgetDataSuccess, setIsGetDataSuccess] = useState(false);

  useEffect(() => {
    setTodayDate(year + month + date);
  }, []);

  useEffect(() => {
    const Host = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
    const serviceKey = `7QGwoclcBhgicDmuDRLy%2BfwRlhTwWWwtvUiL9Hc5q2tJaha2B71%2BSQryRh%2FdpRgu2LvaB71%2F48We10czqqbGuA%3D%3D`;
    const requestUrl = `${Host}?serviceKey=${serviceKey}&numOfRows=500&pageNo=1&base_date=${todayDate}&base_time=0200&nx=55&ny=127&dataType=JSON`;

    const getData = async () => {
      await axios
        .get(requestUrl)
        .then((res) =>
          res.data.response.header.resultCode === "00"
            ? (setGetDatas(res.data.response.body.items.item),
              setIsGetDataSuccess(true))
            : setIsGetDataSuccess(false)
        )
        .catch((err) => console.log(err));
    };
    getData();
  }, [todayDate]);

  return (
    <div>
      {`✈ TODAY :) ${year}년 ${month}월 ${date}일`}
      {isgetDataSuccess && (
        <>
          <div>
            최고 온도:{" "}
            {getDatas.filter((items) => items.category === "TMX")[0].fcstValue}
            °C
          </div>
          <div>
            최저 온도:{" "}
            {getDatas.filter((items) => items.category === "TMN")[0].fcstValue}
            °C
          </div>
        </>
      )}
    </div>
  );
}
