"use client";
import { WavyBackground } from "@/components/wavy-background";

import KeystorekeSection from "@/components/keystorke-section";
import { FloatingNav } from "@/components/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
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
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Enhance Your Screen Recording Experience!
        </p>
        <p className="text-base md:text-lg px-6 md:mt-10 mt-4 text-[#8C8C8C] font-normal inter-var text-center">
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
      <div className="max-w-4xl mx-auto mt-10">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          How it works?
        </p>
        <p className="text-base md:text-lg px-6 md:mt-10 mt-4 text-white font-normal inter-var text-center">
          Keystrokes are recorded and saved to your computer. The app then
          converts the recording into a video and plays it back to you. The
          recording is saved to your computer and can be viewed later.
        </p>
        <p className="text-base md:text-lg px-6 md:mt-10 mt-4 text-white font-normal inter-var text-center">
          The app also allows you to highlight the keys you pressed and hear the
          corresponding sound. This feature is especially useful for recording
          your screen while you are typing.
        </p>
        <p className="text-base md:text-lg px-6 md:mt-10 mt-4 text-white font-normal inter-var text-center">
          The app is available for Windows and MacOS. It is free to download and
          use.
        </p>
      </div>
      <KeystorekeSection />
    </div>
  );
}
