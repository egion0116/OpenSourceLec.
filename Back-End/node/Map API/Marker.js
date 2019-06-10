const mysql = require('mysql');

// 위도 값을 반환
function GetLongi(param){
    var con = mysql.createConnection({
        host : 'localhost',
        user : 'myproject',
        password : '06dktmskf)^'
    })

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    });

    con.query('SELECT WGS84Longi FROM ' + param, (err, result, field) => {
        if (err) throw err;

        var arr_longi = [];
        
        for (var i = 0; i < result.length; i++)
            arr_longi.push(result[i].WGS84Longi);

        console.log(arr_longi);
    })

    con.end();
}

// 경도값을 반환
function GetLati(param){
    var con = mysql.createConnection({
        host : 'localhost',
        user : 'myproject',
        password : '06dktmskf)^'
    })

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    });

    con.query('SELECT WGS84Lati FROM ' + param, (err, result, field) => {
        if (err) throw err;
    
        var arr_lati = [];
    
        for (var i = 0; i < result.length; i++)
            arr_lati.push(result[i].WGS84Lati);
    
        console.log(arr_lati);
    });

    con.end();
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
daum.maps.event.addListener(map, 'click', function(mouseEvent) {        
    // 클릭한 위치에 마커를 표시합니다 
    addMarker(mouseEvent.latLng);             
});

// 지도에 표시된 마커 객체를 가지고 있을 배열입니다
var markers = [];

// 마커 하나를 지도위에 표시합니다 
addMarker(new daum.maps.LatLng(33.450701, 126.570667));

// 마커를 생성하고 지도위에 표시하는 함수입니다
function addMarker(position) {
    
    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        position: position
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
    setMarkers(map)    
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
    setMarkers(null);    
}