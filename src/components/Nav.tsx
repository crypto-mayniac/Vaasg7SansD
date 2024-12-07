"use client";
import React, { useEffect, useState } from "react";
import Button from "@/images/Btn_uncut.svg";
import Image from "next/image";
import Logo from "@/components/Logo";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Logo always visible */}
            <div className="fixed top-0 gap-14 left-0 px-4 py-3 z-50 max-w-screen-2xl left-1/2 -translate-x-1/2 w-full flex justify-between items-center">
                <Logo />

                <div className="flex gap-1 md:gap-4 items-center">
                    <div className="hidden md:flex md:gap-3 gap-1">
                        <a href="#" target="_blank"><svg className="fill-[#ffffff] hover:opacity-90 transition-opacity w-4 md:w-8 drop-shadow-sm" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg></a>
                        <a href="https://x.com/santas_dtr_sol" target="_blank"><svg className="fill-[#ffc04e] hover:opacity-90 transition-opacity w-4 md:w-8 drop-shadow-sm" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg></a>
                    </div>

                    <a className="flex items-center" href="#"><button className="relative hover:brightness-[1.1] transition-all">
                        {/* <p className="absolute top-[45px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[28px] text-[#FFE3B8] text-fancy">Buy $SDTR</p> */}
                        <Image src={Button} alt="button-bg" />
                    </button></a>
                </div>
            </div>

            {/* Nav bar that fades in/out */}
            <nav
                className={`fixed w-full top-0 left-0 z-40 transition-opacity navbar duration-500 ${isScrolled ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    backdropFilter: isScrolled ? "blur(10px)" : "none",
                    background: isScrolled
                        ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)"
                        : "transparent",
                    transition: "opacity 0.5s ease, backdrop-filter 0.5s ease",
                    pointerEvents: isScrolled ? "auto" : "none",
                }}
            >
                <div className="px-4 py-3 flex items-center justify-between">
                    {/* Empty div to occupy space where the logo is */}
                    <div className="w-[your-logo-width]"></div>
                    {/* Other Nav Items */}
                    <div className="flex items-center space-x-4">
                        {/* Add your other nav items here */}
                        <div className="opacity-0 w-0"><Logo /></div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
