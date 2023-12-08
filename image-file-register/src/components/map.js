import { useEffect, useState } from "react";
import SearchAddress from "./postCode";

const Map = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("서울시 성동구 성수동");
  const { kakao } = window;

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    // 지도 생성 .
    const map = new kakao.maps.Map(container, options);
    setMap(map);
    // 주소-좌표 변환 객체를 생성.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        setMarker(marker);
        // 인포윈도우로 장소에 대한 설명
        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;color:blue;text-align:center;padding:6px 0;">성수</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동
        map.setCenter(coords);
      }
    });
  }, []);

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(newAddress, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.panTo(coords);
        marker.setPosition(coords);
      }
    });
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <SearchAddress setAddress={handleAddressChange} setIsOpen={setIsOpen} />
      )}
      {address}
      <button onClick={() => setIsOpen(!isOpen)}>변경</button>
      <div
        id="map"
        style={{
          margin: "0 auto",
          width: "1020px",
          height: "400px",
        }}
      ></div>
    </div>
  );
};

export default Map;
