import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  });
  return (
    <ReactMapGL
      initialViewState={viewport}
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/atorr233/clo4i7ert00fc01p6adt5306j"
    ></ReactMapGL>
  );
}

export default Map;
