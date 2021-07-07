import React from "react";

export default function NasaCard({ imgUrl }) {
  return (
    <div style={{ maxWidth: "200px" }}>
      <img src={imgUrl} />
    </div>
  );
}
