import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Map({ className }) {
  const defaultProps = {
    center: {
      lat: -8.712238498601117,
      lng: 115.17101690756884,
    },
    zoom: 11,
  };
  return (
    <div className={className}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAmAwkv8-x2I--ne-NtA3C_4E_-xLCsFJs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
