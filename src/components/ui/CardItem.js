import React from "react";

export default function CardItem({ item }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            id="avatar"
            src="https://randomuser.me/api/portraits/med/women/6.jpg"
            alt="hi"
          />
          <div id="fullname">{item.FirstName} {item.LastName}</div>
          <div id="username">{item.UserName}</div>
          <div className="description">
            <div>
              Email: <span id="email">{item.Email}</span>
            </div>
            <div>
              Phone Number: <span id="phone">{item.PhoneNumber}</span>
            </div>
            <div>
              Gender: <span id="city">{item.Gender}</span>
            </div>
            <div>
              URL: <span id="url">{item.DomainName}</span>
            </div>
          </div>
        </div>
        <div className="card-back">
          <ul>
            <li>{item.CreditCardType}</li>
          </ul>
          <h1>{item.CreditCardNumber}</h1>
        </div>
      </div>
    </div>
  );
}
