import React from "react";
import Background from "@/images/repeating-bg.svg";

const RepeatingSnow = () => {
    return (
        <div className="fade-top w-screen h-full absolute top-0">
            <div className="diagonal-background"
                style={{
                    backgroundImage: `url(${Background.src})`,
                    backgroundRepeat: "repeat", // Repeat both horizontally and vertically
                    backgroundSize: "auto auto", // Keep natural size or adjust as needed
                    width: "200%", // Matches parent container width
                    height: "200%", // Matches parent container height
                    position: "absolute",
                    pointerEvents: "none",
                    zIndex: '-3',
                    top: '0',
                    left: '0',
                    // animation: "moveBackground 70s linear infinite"
                }}
            ></div>
        </div>
    );
};

export default RepeatingSnow;
