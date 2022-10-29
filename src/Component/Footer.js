import React from "react";
import "../Footer.css";

const Footer = () => {
  return (
    <div className="containerf">
      
      <hr />

      <div className="logo">
        <img className="img" src="./img/logo.jpg"></img>
      </div>

      <div className="infoShop">
        <h2> راهنمای خرید </h2>
        <span>راهنمای سایز</span>
        <br />
        <br />
        <span>راهنمای خرید</span>
        <br />
        <br />
        <span>روش ارسال</span>
      </div>

      <div className="about">
        <h2> درباره </h2>
        <span>درباره ما</span>
        <br />
        <br />
        <span>ارتباط با ما</span>
      </div>

      <div className="Services">
        <h2> خدمات مشتری مشتریان</h2>
        <span>سوالات متداول</span>
        <br />
        <br />
        <span>بازگشت کالا</span>
      </div>

      <div className="fallow">
        <h4> ما را در شبکه اجتماعی دنبال کنید </h4>
        <div className="instagram">
          <a href="https://instagram.com/Amir._.aliento">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0z"
                ></path>
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M22.6 9c-.2 0-.5.2-.5.4a.5.5 0 10.5-.4M19.4 12.6a4.8 4.8 0 11-6.8 6.8 4.8 4.8 0 016.8-6.8"
                ></path>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="telegram">
          <a href="https://telegram.me/BiChatBot?start=sc-977403-RFKDLla">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M15.7 22.5L13 25.2a.9.9 0 01-1.5-.4l-1.8-6"></path>
                  <path d="M18.8 14.6l-5.2 4.7c-.5.5-.5 1.3 0 1.7l7.2 5.3c.7.5 1.8.2 2-.7L26.2 9a1 1 0 00-1.4-1.2l-20.7 8a.7.7 0 000 1.3l5.5 1.7"></path>
                </g>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

  );
};
export default Footer;