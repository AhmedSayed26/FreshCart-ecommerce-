import React from "react";
import amazonLogo from "../../assets/images/amazon-pay.png";
import americalLogo from "../../assets/images/American-Express-Color.png";
import paybalLogo from "../../assets/images/paypal.png";
import masterLogo from "../../assets/images/mastercard.webp";
import appleLogo from "../../assets/images/get-apple-store.png";
import googleLogo from "../../assets/images/get-google-play.png";

export default function Footer() {
  return (
    <footer className=" w-full bg-slate-200 py-8">
      <div className="container space-y-4">
        <div>
          <h3 className="text-2xl">Get the fresh cart app</h3>
          <p className="text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            iure.
          </p>
        </div>
        <div className="flex items-center gap-3 ">
          <input className="input" type="text" placeholder="email..." />
          <button className="btn">Share app link</button>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h3>payment prtenrs</h3>
            <img
              className="w-[25px] md:w-[60px]"
              src={amazonLogo}
              alt="amazonLogo"
            />
            <img
              className="w-[25px] md:w-[60px]"
              src={americalLogo}
              alt="americalLogo"
            />
            <img
              className="w-[25px] md:w-[60px]"
              src={paybalLogo}
              alt="paybalLogo"
            />
            <img
              className="w-[25px] md:w-[60px]"
              src={masterLogo}
              alt="masterLogo"
            />
          </div>
          <div className="flex items-center gap-2">
            <h3>Get deliveries with FreshCart</h3>
            <img
              className="w-[25px] md:w-[60px]"
              src={appleLogo}
              alt="appleLogo"
            />
            <img
              className="w-[25px] md:w-[60px]"
              src={googleLogo}
              alt="googleLogo"
            />
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex items-center gap-2">
            <h3>Payment Partners</h3>
            <img
              className="w-[35px] md:w-[60px]"
              src={amazonLogo}
              alt="amazonLogo"
            />
            <img
              className="w-[35px] md:w-[60px]"
              src={americalLogo}
              alt="americalLogo"
            />
            <img
              className="w-[35px] md:w-[60px]"
              src={paybalLogo}
              alt="paybalLogo"
            />
            <img
              className="w-[35px] md:w-[60px]"
              src={masterLogo}
              alt="masterLogo"
            />
          </div>

          <div className="flex items-center gap-2">
            <h3>Get deliveries with FreshCart</h3>
            <img
              className="w-[35px] md:w-[60px]"
              src={appleLogo}
              alt="appleLogo"
            />
            <img
              className="w-[35px] md:w-[60px]"
              src={googleLogo}
              alt="googleLogo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
