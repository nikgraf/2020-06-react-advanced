import React from "react";
import useMap from "./useMap";

function Map(props) {
  const [value, setValue] = React.useState(true);
  const mapRef = useMap();

  return (
    <>
      {value ? (
        <div
          ref={mapRef}
          style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
        />
      ) : (
        <p
          ref={mapRef}
          style={{ width: 400, height: 200, backgroundColor: "#ddd" }}
        />
      )}
      <button
        onClick={() => {
          setValue((currentValue) => !currentValue);
        }}
      >
        toggle
      </button>
    </>
  );
}

export default Map;
