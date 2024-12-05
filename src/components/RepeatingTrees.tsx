import React from 'react';
import Trees from "@/images/repeating-trees.svg";

const RepeatingTrees = () => {
    return (
        <div
            className="move-bg"
            style={{
                backgroundImage: `url(${Trees.src})`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 530px", // Align images to the height of the div
                backgroundPosition: "0px bottom", // Align to bottom
                width: "200%", // Larger width to accommodate animation
                height: "530px",
                position: "absolute",
                top: "0px",
                left: "0px",
                opacity: "0.4",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
            }}
        >
        </div>
    );
};

export default RepeatingTrees;
