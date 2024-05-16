"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { dmgUrl, windowsDeepLink, windowsLink } from "./url";

export const FloatingNav = ({
  navItems,
  className,
  isMac,
  isWindows,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  isMac: boolean;
  isWindows: boolean;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 "
            )}
          >
            {/* <span className="block laptop:hidden">{navItem.icon}</span> */}
            <span className=" text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link href={isMac ? dmgUrl : isWindows ? windowsDeepLink : windowsLink}>
          <button className=" bg-[#0D5EF4] text-sm font-medium relative border-neutral-200 border-white/[0.2]  text-white px-4 py-2 rounded-full">
            <span>Download</span>
            {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
