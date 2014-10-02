MAPRAMBLE.markers = [];

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

};

$(document).on('pageshow', function () {
	'use strict';
    MAPRAMBLE.setHeight();
    MAPRAMBLE.map = MAPRAMBLE.createMap({zoom: 16, lat: 40.828713, lng: 140.734682});
    MAPRAMBLE.addPlaceMarkers();
    MAPRAMBLE.setEventHandler();
});


