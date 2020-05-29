import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import { Box, makeStyles } from "@material-ui/core";
import "mapbox-gl/dist/mapbox-gl.css";

// const TOKEN=config.REACT_APP_TOKEN

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  GeolocateControl: {
    position: "absolute",
    margin: theme.spacing(1),
  },
}));

const Map = () => {
  const classes = useStyles();
  const [viewport, setViewPort] = useState({
    height: 300,
    width: "100%",
    latitude: 38.5,
    longitude: -98.0,
    zoom: 1,
  });

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <Box>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_MAP_APP_API_KEY}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          className={classes.GeolocateControl}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </Box>
  );
};

export default Map;
