import React from 'react';

interface FancyTextProps {
    text: string
}

const FancyText = ({ text }: FancyTextProps) => {
    return (
        <div className="relative px-4">
            <h2 className="text-3xl md:text-6xl xl:text-7xl w-full text-center text-gradient text-fancy leading-10 md:leading-snug xl:leading-normal">{text}</h2>
            <h2 className="text-3xl  px-4 md:text-6xl  xl:text-7xl w-full text-center text-gradient text-fancy text-fancy-stroke absolute left-0 leading-10 md:leading-snug xl:leading-normal">{text}</h2>
        </div>
    );
};

export default FancyText;