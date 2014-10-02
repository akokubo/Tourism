

var MAPRAMBLE = {};


MAPRAMBLE.addPlaceMarkers = function () {
    'use strict';

    var that = this;

    that.places.map(function (place) {
        that.addMarker(place);
    });
};

MAPRAMBLE.addMarker = function (place) {
    'use strict';
    var marker, options;

    options = {
        position: new google.maps.LatLng(place.lat, place.lng),
        map: this.map,
        icon: "http://maps.google.com/mapfiles/marker.png"
    };

    marker = new google.maps.Marker(options);
    // マーカーを配列に入れる
    this.markers.push(marker);
};



MAPRAMBLE.markers = [];

MAPRAMBLE.places = [];

MAPRAMBLE.places.push({lat:40.82706,lng:140.735793,id:1});//アウガ
MAPRAMBLE.places.push({lat:40.8269467,lng:140.7372391,id:2});//パサージュ広場
MAPRAMBLE.places.push({lat:40.829591,lng:140.741032,id:3});//アスパム
MAPRAMBLE.places.push({lat:40.8245008,lng:140.7364937,id:4});//ワラッセ
MAPRAMBLE.places.push({lat:40.8245008,lng:140.7364937,id:5});//a-factory
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});
//MAPRAMBLE.places.push({lat:40.1,lng:140.5,id:1});



MAPRAMBLE.createMap = function (initial) {
    'use strict';
    var options;

    options = {
        zoom: initial.zoom,
        center: new google.maps.LatLng(initial.lat, initial.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // マップの生成
    return new google.maps.Map(document.getElementById("map"), options);
};


MAPRAMBLE.setHeight = function () {
    'use strict';
    var windowInnerHeight = $(window).innerHeight(),
        headerHeight = $("#header").height(),
        uiContentPadding
            = parseInt($(".ui-content").css('padding-top'), 10)
            + parseInt($(".ui-content").css('padding-bottom'), 10);

    $("#map").css("height", windowInnerHeight - headerHeight - uiContentPadding);
};


MAPRAMBLE.setEventHandler = function () {
    'use strict';

    $(window).on('resize', function () {
        MAPRAMBLE.setHeight();
    });

    if (this.mode === 'edit') {
        google.maps.event.addListener(this.map, 'click', function (event) {
            $.mobile.changePage('/places/new?lat=' + event.latLng.lat() + '&lng=' + event.latLng.lng());
        });        
    }
};

/*
MAPRAMBLE.fitBounds = function () {
    'use strict';
    this.map.fitBounds(this.bounds);
};
*/

MAPRAMBLE.poryline = function () {
    var route = [
        new google.maps.LatLng(40.828713,140.734682),
        new google.maps.LatLng(40.828470, 140.735610),
        new google.maps.LatLng(40.828177, 140.735456),
        new google.maps.LatLng(40.827718, 140.736536),
        new google.maps.LatLng(40.827552, 140.736434),
        new google.maps.LatLng(40.827170, 140.737325),
        new google.maps.LatLng(40.8273607,140.7371667),
        new google.maps.LatLng(40.827121, 140.737446),
        new google.maps.LatLng(40.826815, 140.738243),
        new google.maps.LatLng(40.828134, 140.738749),
        new google.maps.LatLng(40.829587, 140.739500),
        new google.maps.LatLng(40.828832,140.7388889),//アスパム
        //new google.maps.LatLng(),
        //new google.maps.LatLng(),
    ];
    var polyOptions = {
    path: route,
    strokeColor: "#0000ff",
    strokeOpacity: 0.5,
    strokeWeight: 5
  }
  var poly = new google.maps.Polyline(polyOptions);
  return poly;
};


$(document).on('pageshow', function () {
	'use strict';
    MAPRAMBLE.setHeight();
    MAPRAMBLE.map = MAPRAMBLE.createMap({zoom: 16, lat: 40.828713, lng: 140.734682});
    MAPRAMBLE.addPlaceMarkers();
    //MAPRAMBLE.fitBounds();
    MAPRAMBLE.setEventHandler();
    MAPRAMBLE.poryline().setMap(MAPRAMBLE.map);
});


