"use client";

import Letter from "@/components/Letter";
import { useInView } from "react-intersection-observer";
import SnowfallImport from "@/components/SnowfallImport";
import ColoredBg from "@/components/ColoredBg";
import RepeatingSnow from "@/components/RepeatingSnow";
import RepeatingTrees from "@/components/RepeatingTrees";
import FancyText from "@/components/FancyText";
import RepeatingBg from "@/components/RepeatingBg";
import SectionBlock from "@/components/SectionBlock";
import DrunkSanta from "@/images/drunk_santa.png";
import Reindeer from "@/images/reindeer.png";
import Sled from "@/images/sled.png"
import Daughter from "@/images/daughter_idea.png";
import SantaFloating from "@/images/sleigh.svg";
import Image from "next/image";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Nav from "@/components/Nav";
// import NotificationListener from '../components/NotificationListener';
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import TelergamButton from "@/images/Telegram_btn.svg";
import XButton from "@/images/X_btn.svg";
import { useEffect, useState } from "react";

const ScrollTrigger = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`scroll-trigger ${isVisible ? "visible" : ""}`}
      style={{ "--wiggle-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

const contractAddress = "Soon...";

export default function Home() {
  const [count, setCount] = useState<number | null>(null);
  const [progressVisible, setProgressVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const maxCount = 500;
  // const progressPercentage = count
  //   ? Math.min((count / maxCount) * 100, 100)
  //   : 0;
  const progressPercentage = 0;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://xawgeeapi-production.up.railway.app/api/holders"
          );
          const data = await response.json();
          if (data.holdersCount !== undefined) {
            setCount(data.holdersCount);
            setProgressVisible(true);
          } else {
            console.error("Failed to fetch holders count");
          }
        } catch (error) {
          console.error("Error fetching holders count:", error);
        }
      };

      fetchData();
    }
  }, [inView]);

  return (
    <div>

      {/* <NotificationListener /> */}
      <SnowfallImport />
      {/* Repeating background for snow */}
      <ColoredBg color="#229fcd" height="800px" width="40%" />
      <RepeatingSnow />
      <Nav />

      <Image src={SantaFloating} className="absolute floating right-2 top-12 md:top-32 md:right-14 w-2/3 md:w-auto opacity-60" alt="floating santa" />
      <div className="relative">
        <ScrollAnimation animateOnce animateIn="fadeIn">
          <Letter />
          <div className="absolute bottom-0 h-[530px] w-full -z-10 overflow-hidden">
            <RepeatingTrees />
          </div>
        </ScrollAnimation>
      </div>



      <div className="fixed right-5 bottom-5 z-40 backdrop-blur rounded-3xl overflow-hidden" style={{ background: "hsl(0deg 0% 0.94% / 23%)" }}>
        <div className="inline-flex border-2 rounded-3xl p-3 border-opacity-15 border-neutral-50 items-center gap-2 overflow-hidden">
          <p className="text-[#9cf8ff] font-bold">CA:</p>
          <span
            className="text-neutral-50 opacity-80 font-bold truncate"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {contractAddress
              ? `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`
              : 'N/A'}
          </span>

          <CopyToClipboard text={contractAddress} onCopy={() => setCopied(true)}>
            <button
              className="bg-white bg-opacity-10 p-2 px-4 rounded-2xl text-sm md:text-base font-bold text-neutral-50 hover:bg-opacity-100 transition-colors group hover:text-neutral-800"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
        </div>
      </div>




      <div className="relative">
        {/* <ColoredBg color="#229fcd" height="400px" width="80%" /> */}
        <div className="relative overflow-hidden">
          <div className="w-full -mt-20 pt-32">
            <RepeatingBg />


            <ScrollAnimation animateOnce animateIn="fadeIn">
              <div className="flex items-center justify-center px-4">
                <div style={{ background: "hsl(0deg 0% 0.94% / 23%)" }} className="inline-flex mt-4 mb-4 border-2 w-full rounded-3xl justify-center p-3 max-w-screen-xl  border-opacity-15 border-neutral-50 items-center gap-2 overflow-hidden">
                  <p className="text-[#9cf8ff] text-xl md:text-3xl font-bold">CONTRACT:</p>
                  <span
                    className="text-neutral-50 opacity-80 font-bold truncate text-xl md:text-3xl"
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {contractAddress
                      ? `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`
                      : 'N/A'}
                  </span>

                  <CopyToClipboard text={contractAddress} onCopy={() => setCopied(true)}>
                    <button
                      className="bg-white bg-opacity-10 p-2 px-4 rounded-2xl  md:text-base font-bold text-neutral-50 hover:bg-opacity-100 transition-colors group text-xl md:text-3xl hover:text-neutral-800"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </ScrollAnimation>
            {/* <ScrollAnimation animateOnce animateIn="fadeIn" delay={500}> */}
            <FancyText text="North Pole Shenanigans and Backstory" />
            {/* </ScrollAnimation> */}

            <div className="section-blocks">
              <ScrollAnimation animateOnce animateIn="fadeInUp">
                <SectionBlock
                  imageSrc={DrunkSanta}
                  imageWidth="928"
                  imageHeight="928"
                  text={`Ol’ <strong>Saint Nick</strong> has developed a pretty serious drinking addiction this year, so we need to pump this token so Santa&apos;s Daughter can afford to get him to rehab before Dec 25, 2024.`}
                  imageAlt="Drunk Santa"
                />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp">
                <SectionBlock
                  imageSrc={Reindeer}
                  imageWidth="1228"
                  imageHeight="1068"
                  flipped
                  text={`Rudolph and all the other reindeers are not happy because of Santa's behavior, and have asked Santa&apos;s Daughter for help.`}
                  imageAlt="Sad Reindeer"
                />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp">
                <SectionBlock
                  imageSrc={Daughter}
                  imageWidth="918"
                  imageHeight="1003"
                  text={`Santa&apos;s Daughter came in clutch, and thought of a brilliant idea, why don&apos;t we make a token on <span style="color: #52D593;">Pump</span><span style="color: white;">.fun?</span> <span style="color: #2FBDB1;">I mean isn&apos;t that what all the kids are doing these days?</span>`}
                  imageAlt="Santa&apos;s Daughter idea"
                />
              </ScrollAnimation>
            </div>

            <div
              className="max-w-full w-full md:max-w-screen-xl mx-auto my-14 px-4"
              ref={ref}
            >
              <ScrollTrigger delay={0}>
                <h4 className="text-3xl -mb-5 sm:text-3xl md:text-5xl md:-mb-4 xl:-mb-8 xl:text-6xl tracking-widest text-center text-neutral-50 opacity-15 font-bold w-full">
                  PUMP IT TO THE NORTH POLE!
                </h4>
              </ScrollTrigger>


              <ScrollAnimation animateOnce animateIn="fadeInUp">
                <div className="relative w-full bg-neutral-950 bg-opacity-60 backdrop-blur-lg h-10 rounded-2xl mt-4 text-shadow">
                  {/* Colored Progress Bar */}
                  <div
                    className={`absolute top-0 left-0 h-full border rounded-2xl progress-bar blue-gradient ${progressVisible ? "visible" : ""}`}
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  >

                    <div className="absolute top-1/2 translate-x-1/2 -translate-y-full right-0 w-[132px] h-[102px]"><Image src={Sled} alt="Sled" width={264} height={204} />
                    </div>

                    {/* Floating Div */}
                    {/* <div
                    className="absolute top-1/2 -translate-y-1/2 right-0 bg-blue-500 text-white px-2 py-1 rounded-full shadow-lg"
                    style={{
                      transform: `translate(50%, -50%)`,
                    }}
                  >
                    {progressPercentage}%
                  </div> */}
                  </div>

                  {/* Centered Text */}
                  <span
                    className={`absolute inset-0 flex items-center justify-center text-md md:text-2xl text-white z-10 font-bold tracking-widest ${progressVisible ? "visible" : ""}`}
                    style={{
                      opacity: progressVisible ? 1 : 0,
                      transition: "opacity 0.5s ease",
                    }}
                  >
                    {count !== null && progressVisible ? (
                      // <CountUp duration={2} end={count} />
                      <CountUp duration={2} end={0} />

                    ) : (
                      `${count || 0}`
                    )}
                    /{maxCount}{" "}
                    <span className="text-neutral-400 ml-2">
                      HOLDERS UNTIL THE NORTH POLE
                    </span>
                  </span>
                </div>

                <p className="text-neutral-400 opacity-35 text-right w-full mt-2">
                  Total Holders Cap...
                </p>
              </ScrollAnimation>


              <ScrollAnimation animateOnce animateIn="fadeInUp">
                <div className="mt-24 relative">
                  <h3 className="text-3xl md:text-5xl font-bold text text-neutral-50 mb-3 z-10 text-center relative">HOW TO <span className="text-[#9cf8ff]">BUY?</span></h3>
                  <div className="z-10 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="rounded-2xl border bg-neutral-50 bg-opacity-10 border-neutral-50 border-opacity-20 backdrop-blur-xl p-5">
                      <div className="text-[#9cf8ff] text-2xl font-bold mb-3">1. Install Wallet</div>
                      <p className="text-neutral-300 text-xl">Download a wallet that supports the Solana Blockchain, such as Phantom, or Solflare.</p>
                    </div>

                    <div className="rounded-2xl border bg-neutral-50 bg-opacity-10 border-neutral-50 border-opacity-20 backdrop-blur-xl p-5">
                      <div className="text-[#9cf8ff] text-2xl font-bold mb-3">2. Get some Sol</div>
                      <p className="text-neutral-300 text-xl">Buy some Solana (SOL) from a centralized exchange, and transfer it to your wallet</p>
                    </div>

                    <div className="rounded-2xl border bg-neutral-50 bg-opacity-10 border-neutral-50 border-opacity-20 backdrop-blur-xl p-5">
                      <div className="text-[#9cf8ff] text-2xl font-bold mb-3">3. Connect to Pump.fun</div>
                      <p className="text-neutral-300 text-xl">Connect to Pump.fun using your wallet</p>
                    </div>

                    <div className="rounded-2xl border bg-neutral-50 bg-opacity-10 border-neutral-50 border-opacity-20 backdrop-blur-xl p-5">
                      <div className="text-[#9cf8ff] text-2xl font-bold mb-3">4. Buy Santa&apos;s Daughter</div>
                      <p className="text-neutral-300 text-xl">Buy some Santa&apos;s Daughter!</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateOnce animateIn="fadeInUp">
                <div className="mt-24 relative">
                  <h3 className="text-3xl md:text-5xl font-bold text text-neutral-50 mb-3 z-10 text-center relative">JOIN OUR<span className="text-[#9cf8ff]"> COMMUNITIES</span></h3>


                  <div className="flex gap-5 flex-wrap justify-center items-center pt-5">
                    <a target="_blank" className="hover:brightness-[1.1] transition-all w-96" href="#"><Image src={TelergamButton} alt="tg-link" /></a>
                    <a href="https://x.com/santas_dtr_sol" target="_blank" className="hover:brightness-[1.1] transition-all w-96"><Image src={XButton} alt="tg-link" /></a>
                  </div>

                </div>
              </ScrollAnimation>

            </div>


          </div>
          <footer>
            <p className="text-center py-4 text-xl md:text-2xl">Copyright © 2024 Santa&apos;s Daughter SOL</p>
          </footer>
        </div>
      </div>
    </div >
  );
}
