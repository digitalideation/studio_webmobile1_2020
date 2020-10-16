<template>
  <div class="about">
    <h1>My Mapbox</h1>
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/modules/contentful.js";
import getCoordinatesFromGpxFile from "@/modules/gpx-utilities.js";

export default {
  name: "Map",
  mounted: async function() {

    // Displaying the map
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWh1c20iLCJhIjoiY2tnY2MxdGQ1MHBrYzMxa3oyc3gxMzRiNyJ9.JPZ11U69h64ksO-S4xBZlw";
    const map = new mapboxgl.Map({
      container: this.$refs.container,
      style: "mapbox://styles/mhusm/ckgcbplva0qvl19mbxd78ma97", // stylesheet location
      center: [8.546385, 47.190093], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    // Displaying a GPX track
    map.on("load", async function() {
      let result = await contentfulClient.getEntries({
        content_type: "commute"
      });
      let coordinates = await getCoordinatesFromGpxFile(
        result.items[0].fields.gpx.fields.file.url // a link to you gpx file in Contentful
      );

      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: coordinates
          }
        }
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#888",
          "line-width": 8
        }
      });
    });
  }
};
</script>


<style scoped lang="scss">
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
.map {
  height: 50vh;
  width: 50vw;
}
</style>
