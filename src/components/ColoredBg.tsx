import React from 'react';

interface ColoredBgProps {
    color: string;
    width: string;
    height: string;
}

const ColoredBg = ({ color, width, height }: ColoredBgProps) => {
    return (
        <div className="w-full h-auto overflow-hidden">
            <div
                className={`blur-3xl rounded-full opacity-10 absolute left-1/2 -translate-x-1/2 -top-48 -z-10`}
                style={{ width: `${width}`, height: `${height}`, background: `${color}` }}
            ></div>
        </div>
    );
};

export default ColoredBg;
