import React from 'react';
import Image from "next/image";
import Sheet from "@/images/sheet.png";
import TopDeco from "@/images/top_letter.svg";
import TopDeco2 from "@/images/top_letter.svg";
import BigLogo from "@/images/coin_big.png";
import Stamp from "@/images/stamp.svg"
import BottomText from "@/images/north_pole.svg";

const Letter = () => {
    return (
        <div className="px-4">
            <div style={{ background: "#efd5b2", boxShadow: "10px 13px 43px #16172d" }} className="relative md:max-w-[705px] lg:max-w-[925px] mx-auto mt-64  md:mt-72 flex items-center flex-col md:-rotate-3 py-28 pt-32 pb-40 md:pb-28 px-6 md:px-12 ">
                <Image src={BigLogo} width="538" height="570" alt="big logo" unoptimized className="w-[269px] h-[285px] absolute left-1/2 -translate-x-1/2 -top-44 md:rotate-3" />
                <Image className="absolute w-12 md:w-24 -top-4 -left-2 md:-top-8 md:-left-8" src={TopDeco} alt="decoration" />
                <Image className="absolute w-12 md:w-24 -top-4 -right-2 md:-top-8 md:-right-8 scale-x-[-1]" src={TopDeco2} alt="decoration 2" />
                <p className=" max-w-full w-full text-center text-amber-950 text-2xl lg:text-5xl md:text-3xl">Dear Believers,<br></br>It's me, Santa’s Daughter! While Santa's busy with his alcoholism recovery, I've got something special up my sleeve—introducing Santa’s Daughter Coin! A little holiday cheer with a whole lot of pump and fun. Join me on this jolly ride to fill stockings and wallets alike! 🎄✨<br></br>Warm wishes,<br></br>- Santa’s Daughter</p>
                <Image className="w-72 mt-5" alt="stamp" src={BottomText} />
                <Image className="w-28 md:w-36 absolute bottom-8 md:bottom-12 right-5" alt="stamp" src={Stamp} />
                {/* <div style={{ background: "#efd5b2" }}></div> */}
                {/* <Image src={Sheet} className="w-[705.5px] h-[642.5px] -ml-5 object-contain" width="1411" height="1285" alt="sheet" /> */}
            </div >
        </div>
    );
};

export default Letter;