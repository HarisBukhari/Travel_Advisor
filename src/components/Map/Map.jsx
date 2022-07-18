import React from "react"
import GoogleMapReact from 'google-map-react';
// import { useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = () => {
  const classes = useStyles();
//   const matches = useMediaQuery('(min-width:600px)');

  const coordinates = {lat:0,lng:0}
    return (
        <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAXqL04ILbAhmm3YK6UkvJcSu3ywB5XO7w' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        // onChange={(e) => {
        //   set coordinates({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child) => setChildClicked(child)}
      ></GoogleMapReact>
      </div>
    )
}

export default Map