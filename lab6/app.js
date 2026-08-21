import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "./style.css"


var map = new L.map("map", {
    center: [18.796143, 98.979263],
    zoom: 14
})


var osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'xx'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});



var maker1 = new L.marker([18.796143, 98.979263]).bindPopup("คณะสังคมศาสตร์")
var maker2 = new L.marker([18.806611, 98.951806]).bindPopup("อ่างแก้ว")
var roadGeeom = [[18.802619, 98.951514],
[18.803552, 98.949173]]

var line = new L.polyline(roadGeeom, { color: " #95BDD7" }).bindPopup("ถนนภูมิศาสตร์")

var angGeom = [
    [18.808683, 98.949103],
    [18.808582, 98.950135],
    [18.808212, 98.950374],
    [18.806212, 98.951314],
    [18.805365, 98.950507],
    [18.805454, 98.947571],
    [18.807210, 98.947423],
    [18.808674, 98.949110]
]
var angkeaw = L.polygon(angGeom, { color: " #d4b9ee", fillColor: "#ffeb9c" }).bindPopup("อ่างแก้ว")

Esri_WorldImagery.addTo(map)

var amphoe = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_amphoe_4326",
    format: "image/png",
    transparent: true
})

var village = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_village_4326",
    format: "image/png",
    transparent: true
})

var landuse = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_landuse_4326",
    format: "image/png",
    transparent: true,
    opacity: 0.5
})

var trans = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_trans_4326",
    format: "image/png",
    transparent: true
})

var baseMaps = {
    "Esri_WorldImagery": Esri_WorldImagery.addTo(map),
    "osm": osm

}

var overlay = {
    "marker1": maker1.addTo(map),
    "ม๊ากเก้อร์": maker2.addTo(map),
    "ถนน": line.addTo(map),
    "angkeaw": angkeaw.addTo(map),
    "ขอบเขตถนน": trans.addTo(map),
    "ขอบเขตการใช้ที่ดิน": landuse.addTo(map),
    "ขอบเขตอำเภอ": amphoe.addTo(map),
    "ขอบเขตหมู่บ้าน": village.addTo(map)
}

L.control.layers(baseMaps, overlay).addTo(map);

map.on("click", (e) => {
    console.log(e.latlng)
    document.getElementById("lat").innerHTML = e.latlng.lat
    document.getElementById("lng").innerHTML = e.latlng.lng
})