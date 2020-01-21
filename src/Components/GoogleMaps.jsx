import React, { useState, useEffect } from "react";

export default function GoogleMapsHook(props) {
  const [source, setSource] = useState("");
  const street = props.address.street;
  const city = props.address.city;
  const modifiedAddress = street.split(" ").join("+") + "," + city;

  const apiKey = "AIzaSyC1Ypw-6oKrZmPWzjuCRt4FLTtGddQ6Baw";

  useEffect(() => {
    setSource(`https://www.google.com/maps/embed/v1/place?key=${apiKey}
    &q=${modifiedAddress}`);
  }, [modifiedAddress]);

  return (
    <div>
      <iframe
        style={{ width: "450px", height: "250px", border: "0" }}
        frameBorder="0"
        title="googleMaps"
        src={source}
        allowFullScreen
      ></iframe>
    </div>
  );
}
