"use client";
import { WavyBackground } from "@/components/wavy-background";

import KeystorkeSection from "@/components/keystorke-section";
import { FloatingNav } from "@/components/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import WhyYouNeedThis from "../components/why-you-need-this";
export default function Home() {
  function isMacintosh() {
    return navigator.platform.indexOf("Mac") > -1;
  }
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <WavyBackground className="max-w-4xl mx-auto">
        <FloatingNav navItems={navItems} />
        <p className="mobile:text-2xl tablet:text-4xl text-7xl text-white font-bold inter-var text-center">
          Enhance Your Screen Recording Experience!
        </p>
        <p className="tablet:text-base mobile:text-base text-lg px-6 md:mt-10 mt-4 text-[#8C8C8C] font-normal inter-var text-center">
          Show which key you pressing to your audience, Highlight Your Cursor,
          and Hear Realistic Keyboard Sounds! Available for Windows and MacOS.
        </p>
        <div className="flex justify-center mt-10">
          {isMacintosh() ? (
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
              Download for Mac
            </button>
          ) : (
            <button className="ml-10 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
              Download for Windows
            </button>
          )}
        </div>
        <p className="text-sm md:text-sm px-6 mt-4 text-gray-400 font-normal inter-var text-center">
          {isMacintosh()
            ? "Supports Mac Intel & Apple Silicon. macOS 10.15+"
            : "Supports Windows 7+"}
        </p>
      </WavyBackground>
      <WhyYouNeedThis />
      <KeystorkeSection />
    </div>
  );
}
