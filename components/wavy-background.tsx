"use client";
import { cn } from "@/utils/cn";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  // const init = () => {
  //   canvas = canvasRef.current;
  //   ctx = canvas.getContext("2d");
  //   w = ctx.canvas.width = window.innerWidth;
  //   h = ctx.canvas.height = window.innerHeight;
  //   ctx.filter = `blur(${blur}px)`;
  //   nt = 0;
  //   window.onresize = function () {
  //     w = ctx.canvas.width = window.innerWidth;
  //     h = ctx.canvas.height = window.innerHeight;
  //     ctx.filter = `blur(${blur}px)`;
  //   };
  //   render();
  // };

  const waveColors = colors ?? [
    "#0D5EF4",
    "#818cf8",
    // "#c084fc",
    // "#e879f9",
    // "#22d3ee",
  ];
  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <div className="absolute inset-0 z-0 bg-[url('/images/bg.png')] bg-no-repeat bg-center "></div>

      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
