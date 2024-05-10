"use client";
import CursorSection from "@/components/cursor-section";
import KeystorkeSection from "@/components/keystorke-section";
import { FloatingNav } from "@/components/navbar";
import Pricing from "@/components/pricing";
import SocialIcons from "@/components/social";
import ThockSection from "@/components/thock-section";
import { WavyBackground } from "@/components/wavy-background";
import { IconHome, IconMessage, IconMoneybag } from "@tabler/icons-react";
import Link from "next/link";
import WhyYouNeedThis from "../components/why-you-need-this";

export default function Home() {
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: (
        <IconMoneybag className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Why?",
      link: "#why",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <WavyBackground className="max-w-4xl mx-auto">
        <FloatingNav navItems={navItems} />
        <h1 className="mobile:text-2xl tablet:text-4xl text-7xl text-white font-bold inter-var text-center">
          Enhance Your Screen Recording Experience!
        </h1>
        <p className="tablet:text-base mobile:text-base text-lg px-6 md:mt-10 mt-4 text-[#8C8C8C] font-normal inter-var text-center">
          Show which key you pressing to your audience, Highlight Your Cursor,
          and Hear Realistic Keyboard Sounds! Available for Windows and MacOS.
        </p>
        <div className="flex justify-center mt-10 align-center  tablet:flex-col mobile:flex-col ">
          {isMac ? (
            <div className="px-6 flex justify-center mt-10 align-center  tablet:flex-col mobile:flex-col ">
              <Link href="https://github.com/keystroke/keystroke-app/releases/download/source code.zip">
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
                  Download for Mac
                </button>
              </Link>

              <div className="mx-2 my-2"></div>
              <button className="  px-8 py-2  rounded-full text-white border-2 border-[#0D5EF4] font-light transition duration-200 ease-linear">
                Download for Windows
              </button>
            </div>
          ) : (
            <div className="px-6 flex justify-center mt-10 align-center  tablet:flex-col mobile:flex-col ">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
                Download for Windows
              </button>
              <div className="mx-2 my-2"></div>
              <button className="  px-8 py-2  rounded-full text-white border-2 border-[#0D5EF4] font-light transition duration-200 ease-linear">
                Download for Mac
              </button>
            </div>
          )}
        </div>
        <p className="text-sm md:text-sm px-6 mt-4 text-gray-400 font-normal inter-var text-center">
          {isMac
            ? "Supports Mac Intel & Apple Silicon. macOS 10.15+"
            : "Supports Windows 7+"}
        </p>
      </WavyBackground>
      <KeystorkeSection />
      <CursorSection />
      <ThockSection />
      <WhyYouNeedThis />
      <Pricing />
      <div className="max-w-4xl mx-auto h-[80vh] flex items-center justify-center">
        <div>
          <FloatingNav navItems={navItems} />
          <h1 className="mobile:text-2xl tablet:text-4xl text-7xl text-white font-bold inter-var text-center">
            Download and Try now!
          </h1>
          <p className="tablet:text-base mobile:text-base text-lg px-6 md:mt-10 mt-4 text-[#8C8C8C] font-normal inter-var text-center">
            Available for Windows and MacOS.
          </p>
          <div className="flex justify-center mt-4 align-center  tablet:flex-col mobile:flex-col ">
            {isMac ? (
              <div className="px-6 flex justify-center mt-10 align-center  tablet:flex-col mobile:flex-col ">
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
                  Download for Mac
                </button>
                <div className="mx-2 my-2"></div>
                <button className="  px-8 py-2  rounded-full text-white border-2 border-[#0D5EF4] font-light transition duration-200 ease-linear">
                  Download for Windows
                </button>
              </div>
            ) : (
              <div className="px-6 flex justify-center mt-10 align-center  tablet:flex-col mobile:flex-col ">
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
                  Download for Windows
                </button>
                <div className="mx-2 my-2"></div>
                <button className="  px-8 py-2  rounded-full text-white border-2 border-[#0D5EF4] font-light transition duration-200 ease-linear">
                  Download for Mac
                </button>
              </div>
            )}
          </div>
          <p className="text-sm md:text-sm px-6 mt-4 text-gray-400 font-normal inter-var text-center">
            {isMac
              ? "Supports Mac Intel & Apple Silicon. macOS 10.15+"
              : "Supports Windows 7+"}
          </p>
        </div>
      </div>
      <SocialIcons />
      <div className="text-center text-gray-400 text-sm my-4">
        <p>© 2024 Keystro</p>
      </div>
    </div>
  );
}