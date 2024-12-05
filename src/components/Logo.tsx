import React from 'react';
import Image from 'next/image';
import LogoImage from "@/images/logo.svg";
import LogoCoin from "@/images/coin_logo.png";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 md:gap-3 content-center"><Image src={LogoCoin} className="w-[40.5px] h-[40.5px] md:w-[81px] md:h-[81px]" width="162" height="162" alt="Coin Logo" unoptimized /> <Image className="relative top-[4px] w-28 md:w-40" src={LogoImage} alt="logo" /></div>
    );
};

export default Logo;