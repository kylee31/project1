import styled from "styled-components";

import { useEffect } from "react";
import { useIsToggleStore, useSearchWordStore } from "@/states/stores";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const { searchWord } = useSearchWordStore();
  const { isToggle } = useIsToggleStore();

  useEffect(() => {
    const mapScript = document.createElement("script");
    const appKey = process.env.NEXT_PUBLIC_MAP_KEY;

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(127.269311, 37.413294), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        var ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(`${searchWord}`, placesSearchCB);

        function placesSearchCB(data: any, status: any, pagination: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            var bounds = new window.kakao.maps.LatLngBounds();
            for (var i = 0; i < data.length; i++) {
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }
            // 검색된 장소 위치를 기준으로 지도 범위 재설정
            map.setBounds(bounds);
          }
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [searchWord, isToggle]);
  return (
    <Container $isToggle={isToggle}>
      <MapContainer id="map"></MapContainer>
    </Container>
  );
}

const Container = styled.div<{ $isToggle: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isToggle ? "calc(70vh - 4rem)" : "100%")};
`;
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;
