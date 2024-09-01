import React from "react";
import KiranChawda1 from "../assets/KiranChawda1.jpg";
import KiranChawda2 from "../assets/KiranChawda2.jpg";
import KiranChawda3 from "../assets/KiranChawda3.jpg";
import Painting1 from "../assets/Painting1.jpg";
import Painting2 from "../assets/Painting2.jpg";

const LandingPage = () => {
  return (
    <div className="w-full bg-zinc-950 pt-2 p-2">
      <div className="row1">
        <div className="flex gap-2">
          <div className="text-right text-xs self-end font-montserrat text-zinc-200 whitespace-nowrap">
            <p>Abstract Artist</p>
            <p>Stained Glass Craftsman</p>
          </div>
          <div className="">
            <img
              src={KiranChawda1}
              alt="KiranChawda1"
              className="rounded-sm w-[50vw]"
            />
          </div>
          </div>
          <div className="text-zinc-200 font-bebas-neue leading-none pt-1">
          <h1 className="text-7xl text-center">KIRAN CHAWDA</h1>
          </div>
      </div>
      <div className="flex-col">
        <div className="row2 flex gap-2">
          <div>
            <img src={KiranChawda2} alt="KiranChawda" className="rounded-sm w-[60vw]"/>
          </div>
          <div className="flex flex-col h-[100%]">
            <img src={Painting1} alt="Painting" className="rounded-sm h-[26vw] w-full"/>
            <div className="exhibition-box font-bebas-neue text-zinc-200 text-3xl flex-grow rounded-md pt-2">
              <p className="leading-none">17</p>
              <p className="leading-none">Exhibitions</p>
            </div>
          </div>
        </div>
        <div className="row2 flex gap-2 pt-1">
          <div className="flex flex-col h-[100%]">
          <div className="exhibition-box font-bebas-neue text-zinc-200 text-3xl flex-grow rounded-md">
              <p className="leading-none">3</p>
              <p className="leading-none">Awwwards</p>
            </div>
            <img src={Painting2} alt="Painting" className="rounded-sm h-[26vw] w-full"/>
          </div>
          <div>
            <img src={KiranChawda3} alt="KiranChawda" className="rounded-sm w-[60vw]"/>
          </div>
        </div>
        </div>
    </div>
  );
};

export default LandingPage;
