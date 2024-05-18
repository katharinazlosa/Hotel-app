import React, { useEffect, useRef } from "react";

const RoomBooking = ({ url }) => {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    calendlyRef.current.appendChild(script);
  }, []);

  return (
    <div ref={calendlyRef}>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "630px" }}
      />
    </div>
  );
};

export default RoomBooking;
