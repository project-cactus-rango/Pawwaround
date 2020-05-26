import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// const TOKEN=config.REACT_APP_TOKEN

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "20%",
    height: 300,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '15px', fontWeight: 'bolder' }}> Click the Geolocate icon to find your location or click <a href="/search">here</a> to search for a dog park near you!</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoibWVsaXNzYWFhbGFtIiwiYSI6ImNrYWljdHE0MzA1enMyc21rdWFwY2Vlb3kifQ.gH4fjs8vHVN5w6wCld-x8g'}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map