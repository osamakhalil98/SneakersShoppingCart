import React from "react";

export default function Info() {
  return (
    <div className="flex flex-col align-start">
      <span>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex">
        <h2>$125.00</h2>
        <span>50%</span>
      </div>
      <span>$250.00</span>
    </div>
  );
}
