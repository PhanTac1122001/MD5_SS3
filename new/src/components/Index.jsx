import React from "react";

export default function Index() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <img
          src="https://i.imgur.com/sroyZau.jpg"
          alt="Elon Musk"
          className="header-img"
        />
        <div className="title-container">
          <h1>Spend Elon Musk's Fortune!</h1>
          <p>
            If Elon cashed out all of his stocks & assets today he would have
            <br />
            approximately <strong>$245,000,000,000</strong> (US Dollars) in his
            bank account (Forbes 2024).
          </p>
          <p>
            ¿What would you <strong>spend it</strong> on?
          </p>
          <p>¡Have your receipt at the end!</p>
        </div>
      </header>

      {/* Total Section */}
      <div className="total">
        <p className="totalMoney" id="totalMoney">
          Remaining: $245,000,000,000
        </p>
        <p className="percentageLeft" id="percentageLeft">
          You haven't spent a single dollar! Start buying!
        </p>
      </div>

      {/* App Container */}
      <div className="app-container" id="allElements"></div>

      {/* Receipt Section */}
      <div className="receipt" id="receipt-container">
        <h1>Receipt</h1>
      </div>

      {/* Print Button */}
      <div className="btn-print">
        <button onClick={() => window.print()}>Print Receipt</button>
      </div>

      {/* Footer Section */}
      <div className="coffe-link">
        <small>
          Created by Nino
          <br />
          <a href="/privacy-policy">Privacy Policy</a>
        </small>
      </div>
    </div>
  );
}
