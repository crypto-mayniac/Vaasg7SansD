import React from 'react';
import Snow from "@/images/snow.png";

const RepeatingSnow = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Snow.src})`,
                backgroundRepeat: "repeat-x",
                width: "100%", // Adjust the width as needed
                backgroundSize: "auto 270px", // Adjust the size if needed
                height: "270px", // Adjust to your desired height
                position: "absolute",
                top: "0px",
                left: "0px"
            }}
        >
        </div>
    );
};

export default RepeatingSnow;