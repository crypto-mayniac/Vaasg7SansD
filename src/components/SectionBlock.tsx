import React from 'react';
import Image, { StaticImageData } from "next/image";

interface SectionBlockProps {
    imageSrc: StaticImageData;
    imageAlt: string;
    text: string;
    flipped?: boolean;
    imageWidth: string;
    imageHeight: string;
}

const divideInHalf = (num: number): number => {
    return num / 2;
};


const SectionBlock = ({ imageSrc, imageAlt, text, flipped, imageWidth, imageHeight }: SectionBlockProps) => {

    return (
        <div className={`flex flex-col lg:flex-row items-center justify-between px-4 ${flipped ? 'lg:flex-row-reverse' : ''}`}>
            <div className="xl:flex-grow xl:basis-0 flex justify-center">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={parseInt(imageWidth)} // Explicit width for Next.js Image
                    height={parseInt(imageHeight)} // Explicit height for Next.js Image
                    style={{
                        width: `${divideInHalf(parseInt(imageWidth))}px`, // Inline style for custom width
                        // height: `${divideInHalf(parseInt(imageHeight))}px`, // Inline style for custom height
                    }}
                    className="object-contain h-auto mb-3"
                />
            </div>

            <p
                className="text-[#9CF8FF] text-2xl 2xl:text-5xl md:text-4xl max-w-8xl w-full text-center flex-1"
                dangerouslySetInnerHTML={{ __html: text }} // Render HTML content
            ></p>
            <div className="xl:flex-grow xl:basis-0"></div>
        </div>
    );
};

export default SectionBlock;