(self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || []).push([["app_packs_src_decidim_map_icon_js-app_packs_src_decidim_vendor_leaflet-tilelayer-here_js"],{

/***/ "./app/packs/src/decidim/map/icon.js":
/*!*******************************************!*\
  !*** ./app/packs/src/decidim/map/icon.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_map_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/map/svg-icon */ "./app/packs/src/decidim/map/svg-icon.js");


leaflet__WEBPACK_IMPORTED_MODULE_0__.DivIcon.SVGIcon = src_decidim_map_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SVGIcon;
leaflet__WEBPACK_IMPORTED_MODULE_0__.DivIcon.SVGIcon.DecidimIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__.DivIcon.SVGIcon.extend({
  options: {
    fillColor: "#ef604d",
    fillOpacity: 1,
    opacity: 0
  },
  _createPathDescription: function _createPathDescription() {
    return "M14 1.17a11.685 11.685 0 0 0-11.685 11.685c0 11.25 10.23 20.61 10.665 21a1.5 1.5 0 0 0 2.025 0c0.435-.435 10.665-9.81 10.665-21A11.685 11.685 0 0 0 14 1.17Zm0 17.415A5.085 5.085 0 1 1 19.085 13.5 5.085 5.085 0 0 1 14 18.585Z";
  },
  _createCircle: function _createCircle() {
    return "";
  },
  // Improved version of the _createSVG, essentially the same as in later
  // versions of Leaflet. It adds the `px` values after the width and height
  // CSS making the focus borders work correctly across all browsers.
  _createSVG: function _createSVG() {
    var path = this._createPath();
    var circle = this._createCircle();
    var text = this._createText();
    var className = "".concat(this.options.className, "-svg");
    var style = "width:".concat(this.options.iconSize.x, "px; height:").concat(this.options.iconSize.y, "px;");
    var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" class=\"".concat(className, "\" style=\"").concat(style, "\">").concat(path).concat(circle).concat(text, "</svg>");
    return svg;
  }
});

/***/ }),

/***/ "./app/packs/src/decidim/map/svg-icon.js":
/*!***********************************************!*\
  !*** ./app/packs/src/decidim/map/svg-icon.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGIcon": function() { return /* binding */ SVGIcon; },
/* harmony export */   "SVGMarker": function() { return /* binding */ SVGMarker; }
/* harmony export */ });
/* eslint prefer-reflect: 0 */

// Leaflet-SVGIcon
// SVG icon for any marker class
//
// Copyright (c) 2016 University of New Hampshire - The MIT License
// Author: Ilya Atkin <ilya.atkin@unh.edu>
// Originally copied from https://github.com/iatkin/leaflet-svgicon
//

var SVGIcon = L.DivIcon.extend({
  options: {
    "circleText": "",
    "className": "svg-icon",
    // defaults to [iconSize.x/2, iconSize.x/2]
    "circleAnchor": null,
    // defaults to color
    "circleColor": null,
    // defaults to opacity
    "circleOpacity": null,
    "circleFillColor": "rgb(255,255,255)",
    // default to opacity
    "circleFillOpacity": null,
    "circleRatio": 0.5,
    // defaults to weight
    "circleWeight": null,
    "color": "rgb(0,102,255)",
    // defaults to color
    "fillColor": null,
    "fillOpacity": 0.4,
    "fontColor": "rgb(0, 0, 0)",
    "fontOpacity": "1",
    // defaults to iconSize.x/4
    "fontSize": null,
    "fontWeight": "normal",
    // defaults to [iconSize.x/2, iconSize.y] (point tip)
    "iconAnchor": null,
    "iconSize": L.point(32, 48),
    "opacity": 1,
    "popupAnchor": null,
    "shadowAngle": 45,
    "shadowBlur": 1,
    "shadowColor": "rgb(0,0,10)",
    "shadowEnable": false,
    "shadowLength": 0.75,
    "shadowOpacity": 0.5,
    "shadowTranslate": L.point(0, 0),
    "weight": 2
  },
  initialize: function initialize(_options) {
    var options = L.Util.setOptions(this, _options);

    // iconSize needs to be converted to a Point object if it is not passed as one
    options.iconSize = L.point(options.iconSize);

    // in addition to setting option dependant defaults, Point-based options are converted to Point objects
    if (options.circleAnchor) {
      options.circleAnchor = L.point(options.circleAnchor);
    } else {
      options.circleAnchor = L.point(Number(options.iconSize.x) / 2, Number(options.iconSize.x) / 2);
    }
    if (!options.circleColor) {
      options.circleColor = options.color;
    }
    if (!options.circleFillOpacity) {
      options.circleFillOpacity = options.opacity;
    }
    if (!options.circleOpacity) {
      options.circleOpacity = options.opacity;
    }
    if (!options.circleWeight) {
      options.circleWeight = options.weight;
    }
    if (!options.fillColor) {
      options.fillColor = options.color;
    }
    if (!options.fontSize) {
      options.fontSize = Number(options.iconSize.x / 4);
    }
    if (options.iconAnchor) {
      options.iconAnchor = L.point(options.iconAnchor);
    } else {
      options.iconAnchor = L.point(Number(options.iconSize.x) / 2, Number(options.iconSize.y));
    }
    if (options.popupAnchor) {
      options.popupAnchor = L.point(options.popupAnchor);
    } else {
      options.popupAnchor = L.point(0, -0.75 * options.iconSize.y);
    }
    options.html = this._createSVG();
  },
  _createCircle: function _createCircle() {
    var cx = Number(this.options.circleAnchor.x);
    var cy = Number(this.options.circleAnchor.y);
    var radius = this.options.iconSize.x / 2 * Number(this.options.circleRatio);
    var fill = this.options.circleFillColor;
    var fillOpacity = this.options.circleFillOpacity;
    var stroke = this.options.circleColor;
    var strokeOpacity = this.options.circleOpacity;
    var strokeWidth = this.options.circleWeight;
    var className = "".concat(this.options.className, "-circle");
    var circle = "<circle class=\"".concat(className, "\" cx=\"").concat(cx, "\" cy=\"").concat(cy, "\" r=\"").concat(radius, "\" fill=\"").concat(fill, "\" fill-opacity=\"").concat(fillOpacity, "\" stroke=\"").concat(stroke, "\" stroke-opacity=").concat(strokeOpacity, "\" stroke-width=\"").concat(strokeWidth, "\"/>");
    return circle;
  },
  _createPathDescription: function _createPathDescription() {
    var height = Number(this.options.iconSize.y);
    var width = Number(this.options.iconSize.x);
    var weight = Number(this.options.weight);
    var margin = weight / 2;
    var startPoint = "M ".concat(margin, " ").concat(width / 2, " ");
    var leftLine = "L ".concat(width / 2, " ").concat(height - weight, " ");
    var rightLine = "L ".concat(width - margin, " ").concat(width / 2, " ");
    var arc = "A ".concat(width / 4, " ").concat(width / 4, " 0 0 0 ").concat(margin, " ").concat(width / 2, " Z");
    var description = startPoint + leftLine + rightLine + arc;
    return description;
  },
  _createPath: function _createPath() {
    var pathDescription = this._createPathDescription();
    var strokeWidth = this.options.weight;
    var stroke = this.options.color;
    var strokeOpacity = this.options.opacity;
    var fill = this.options.fillColor;
    var fillOpacity = this.options.fillOpacity;
    var className = "".concat(this.options.className, "-path");
    var path = "<path class=\"".concat(className, "\" d=\"").concat(pathDescription, "\" stroke-width=\"").concat(strokeWidth, "\" stroke=\"").concat(stroke, "\" stroke-opacity=\"").concat(strokeOpacity, "\" fill=\"").concat(fill, "\" fill-opacity=\"").concat(fillOpacity, "\"/>");
    return path;
  },
  _createShadow: function _createShadow() {
    var pathDescription = this._createPathDescription();
    var strokeWidth = this.options.weight;
    var stroke = this.options.shadowColor;
    var fill = this.options.shadowColor;
    var className = "".concat(this.options.className, "-shadow");
    var origin = "".concat(this.options.iconSize.x / 2, "px ").concat(this.options.iconSize.y, "px");
    var rotation = this.options.shadowAngle;
    var height = this.options.shadowLength;
    var opacity = this.options.shadowOpacity;
    var blur = this.options.shadowBlur;
    var translate = "".concat(this.options.shadowTranslate.x, "px, ").concat(this.options.shadowTranslate.y, "px");
    var blurFilter = "<filter id='iconShadowBlur'><feGaussianBlur in='SourceGraphic' stdDeviation='".concat(blur, "'/></filter>");
    var shadow = "<path filter=\"url(#iconShadowBlur\") class=\"".concat(className, "\" d=\"").concat(pathDescription, "\" fill=\"").concat(fill, "\" stroke-width=\"").concat(strokeWidth, "\" stroke=\"").concat(stroke, "\" style=\"opacity: ").concat(opacity, "; transform-origin: ").concat(origin, "; transform: rotate(").concat(rotation, "deg) translate(").concat(translate, ") scale(1, ").concat(height, ")\" />");
    return blurFilter + shadow;
  },
  _createSVG: function _createSVG() {
    var path = this._createPath();
    var circle = this._createCircle();
    var text = this._createText();
    var shadow = "";
    if (this.options.shadowEnable) {
      shadow = this._createShadow();
    }
    var className = "".concat(this.options.className, "-svg");
    var width = this.options.iconSize.x;
    var height = this.options.iconSize.y;
    if (this.options.shadowEnable) {
      width += this.options.iconSize.y * this.options.shadowLength - this.options.iconSize.x / 2;
      width = Math.max(width, 32);
      height += this.options.iconSize.y * this.options.shadowLength;
    }
    var style = "width:".concat(width, "px; height:").concat(height);
    var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" class=\"".concat(className, "\" style=\"").concat(style, "\">").concat(shadow).concat(path).concat(circle).concat(text, "</svg>");
    return svg;
  },
  _createText: function _createText() {
    var fontSize = "".concat(this.options.fontSize, "px");
    var fontWeight = this.options.fontWeight;
    var lineHeight = Number(this.options.fontSize);
    var coordX = this.options.circleAnchor.x;
    // 35% was found experimentally
    var coordY = this.options.circleAnchor.y + lineHeight * 0.35;
    var circleText = this.options.circleText;
    var textColor = this.options.fontColor.replace("rgb(", "rgba(").replace(")", ",".concat(this.options.fontOpacity, ")"));
    var text = "<text text-anchor=\"middle\" x=\"".concat(coordX, "\" y=\"").concat(coordY, "\" style=\"font-size: ").concat(fontSize, "; font-weight: ").concat(fontWeight, "\" fill=\"").concat(textColor, "\">").concat(circleText, "</text>");
    return text;
  }
});
var SVGMarker = L.Marker.extend({
  options: {
    "iconFactory": L.divIcon.svgIcon,
    "iconOptions": {}
  },
  initialize: function initialize(latlng, _options) {
    var options = L.Util.setOptions(this, _options);
    options.icon = options.iconFactory(options.iconOptions);
    this._latlng = latlng;
  },
  onAdd: function onAdd(map) {
    L.Marker.prototype.onAdd.call(this, map);
  },
  setStyle: function setStyle(style) {
    if (this._icon) {
      //      let svg = this._icon.children[0]
      var iconBody = this._icon.children[0].children[0];
      var iconCircle = this._icon.children[0].children[1];
      if (style.color && !style.iconOptions) {
        var stroke = style.color.replace("rgb", "rgba").replace(")", ",".concat(this.options.icon.options.opacity, ")"));
        var fill = style.color.replace("rgb", "rgba").replace(")", ",".concat(this.options.icon.options.fillOpacity, ")"));
        iconBody.setAttribute("stroke", stroke);
        iconBody.setAttribute("fill", fill);
        iconCircle.setAttribute("stroke", stroke);
        this.options.icon.fillColor = fill;
        this.options.icon.color = stroke;
        this.options.icon.circleColor = stroke;
      }
      if (style.opacity) {
        this.setOpacity(style.opacity);
      }
      if (style.iconOptions) {
        if (style.color) {
          style.iconOptions.color = style.color;
        }
        var iconOptions = L.Util.setOptions(this.options.icon, style.iconOptions);
        this.setIcon(L.divIcon.svgIcon(iconOptions));
      }
    }
  }
});


/***/ }),

/***/ "./app/packs/src/decidim/vendor/leaflet-tilelayer-here.js":
/*!****************************************************************!*\
  !*** ./app/packs/src/decidim/vendor/leaflet-tilelayer-here.js ***!
  \****************************************************************/
/***/ (function() {

/* eslint-disable */

// 🍂class TileLayer.HERE
// Tile layer for HERE maps tiles.
L.TileLayer.HERE = L.TileLayer.extend({
  options: {
    subdomains: '1234',
    minZoom: 2,
    maxZoom: 18,
    // 🍂option scheme: String = 'normal.day'
    // The "map scheme", as documented in the HERE API.
    scheme: 'normal.day',
    // 🍂option resource: String = 'maptile'
    // The "map resource", as documented in the HERE API.
    resource: 'maptile',
    // 🍂option mapId: String = 'newest'
    // Version of the map tiles to be used, or a hash of an unique map
    mapId: 'newest',
    // 🍂option format: String = 'png8'
    // Image format to be used (`png8`, `png`, or `jpg`)
    format: 'png8',
    // 🍂option appId: String = ''
    // Required option. The `app_id` provided as part of the HERE credentials
    appId: '',
    // 🍂option appCode: String = ''
    // Required option. The `app_code` provided as part of the HERE credentials
    appCode: '',
    // 🍂option useCIT: boolean = false
    // Whether to use the CIT when loading the here-maptiles
    useCIT: false,
    // 🍂option useHTTPS: boolean = true
    // Whether to use HTTPS when loading the here-maptiles
    useHTTPS: true,
    // 🍂option language: String = ''
    // The language of the descriptions on the maps that are loaded
    language: '',
    // 🍂option language: String = ''
    // The second language of the descriptions on the maps that are loaded
    language2: ''
  },
  initialize: function initialize(options) {
    options = L.setOptions(this, options);

    // Decide if this scheme uses the aerial servers or the basemap servers
    var schemeStart = options.scheme.split('.')[0];
    options.tileResolution = 256;

    // {Base URL}{Path}/{resource (tile type)}/{map id}/{scheme}/{zoom}/{column}/{row}/{size}/{format}
    // ?apiKey={YOUR_API_KEY}
    // &{param}={value}

    var params = ['apiKey=' + encodeURIComponent(options.apiKey)];
    // Fallback to old app_id,app_code if no apiKey passed
    if (!options.apiKey) {
      params = ['app_id=' + encodeURIComponent(options.appId), 'app_code=' + encodeURIComponent(options.appCode)];
    }
    if (options.language) {
      params.push('lg=' + encodeURIComponent(options.language));
    }
    if (options.language2) {
      params.push('lg2=' + encodeURIComponent(options.language2));
    }
    var urlQuery = '?' + params.join('&');
    var path = '/maptile/2.1/{resource}/{mapId}/{scheme}/{z}/{x}/{y}/{tileResolution}/{format}' + urlQuery;
    var attributionPath = '/maptile/2.1/copyright/{mapId}?apiKey={apiKey}';
    var baseUrl = 'maps.ls.hereapi.com';

    // Old style with apiId/apiCode for compatibility
    if (!options.apiKey) {
      // make sure the CIT-url can be used
      baseUrl = 'maps' + (options.useCIT ? '.cit' : '') + '.api.here.com';
      attributionPath = '/maptile/2.1/copyright/{mapId}?app_id={appId}&app_code={appCode}';
    }
    var tileServer = 'base.' + baseUrl;
    if (schemeStart == 'satellite' || schemeStart == 'terrain' || schemeStart == 'hybrid') {
      tileServer = 'aerial.' + baseUrl;
    }
    if (options.scheme.indexOf('.traffic.') !== -1) {
      tileServer = 'traffic' + baseUrl;
    }
    var protocol = 'http' + (options.useHTTPS ? 's' : '');
    var tileUrl = protocol + '://{s}.' + tileServer + path;
    this._attributionUrl = L.Util.template(protocol + '://1.' + tileServer + attributionPath, this.options);
    L.TileLayer.prototype.initialize.call(this, tileUrl, options);
    this._attributionText = '';
  },
  onAdd: function onAdd(map) {
    L.TileLayer.prototype.onAdd.call(this, map);
    if (!this._attributionBBoxes) {
      this._fetchAttributionBBoxes();
    }
  },
  onRemove: function onRemove(map) {
    //
    // Remove the attribution text, and clear the cached text so it will be recalculated
    // if/when we are shown again.
    //
    this._map.attributionControl.removeAttribution(this._attributionText);
    this._attributionText = '';
    this._map.off('moveend zoomend resetview', this._findCopyrightBBox, this);

    //
    // Call the prototype last, once we've tidied up our own changes
    //
    L.TileLayer.prototype.onRemove.call(this, map);
  },
  _fetchAttributionBBoxes: function _onMapMove() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = L.bind(function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        this._parseAttributionBBoxes(JSON.parse(xmlhttp.responseText));
      }
    }, this);
    xmlhttp.open("GET", this._attributionUrl, true);
    xmlhttp.send();
  },
  _parseAttributionBBoxes: function _parseAttributionBBoxes(json) {
    if (!this._map) {
      return;
    }
    var providers = json[this.options.scheme.split('.')[0]] || json.normal;
    for (var i = 0; i < providers.length; i++) {
      if (providers[i].boxes) {
        for (var j = 0; j < providers[i].boxes.length; j++) {
          var box = providers[i].boxes[j];
          providers[i].boxes[j] = L.latLngBounds([[box[0], box[1]], [box[2], box[3]]]);
        }
      }
    }
    this._map.on('moveend zoomend resetview', this._findCopyrightBBox, this);
    this._attributionProviders = providers;
    this._findCopyrightBBox();
  },
  _findCopyrightBBox: function _findCopyrightBBox() {
    if (!this._map) {
      return;
    }
    var providers = this._attributionProviders;
    var visibleProviders = [];
    var zoom = this._map.getZoom();
    var visibleBounds = this._map.getBounds();
    for (var i = 0; i < providers.length; i++) {
      if (providers[i].minLevel <= zoom && providers[i].maxLevel >= zoom) {
        if (!providers[i].boxes) {
          // No boxes = attribution always visible
          visibleProviders.push(providers[i]);
        } else {
          for (var j = 0; j < providers[i].boxes.length; j++) {
            var box = providers[i].boxes[j];
            if (visibleBounds.intersects(box)) {
              visibleProviders.push(providers[i]);
              break;
            }
          }
        }
      }
    }
    var attributions = ['<a href="https://legal.here.com/en-gb/terms" target="_blank" rel="noopener noreferrer">HERE maps</a>'];
    for (var i = 0; i < visibleProviders.length; i++) {
      var provider = visibleProviders[i];
      attributions.push('<abbr title="' + provider.alt + '">' + provider.label + '</abbr>');
    }
    var attributionText = '© ' + attributions.join(', ') + '. ';
    if (attributionText !== this._attributionText) {
      this._map.attributionControl.removeAttribution(this._attributionText);
      this._map.attributionControl.addAttribution(this._attributionText = attributionText);
    }
  }
});
L.tileLayer.here = function (opts) {
  return new L.TileLayer.HERE(opts);
};

/***/ })

}]);
//# sourceMappingURL=app_packs_src_decidim_map_icon_js-app_packs_src_decidim_vendor_leaflet-tilelayer-here_js.js.map