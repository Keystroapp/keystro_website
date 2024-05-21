export default function CursorSection() {
  return (
    <div className="max-w-6xl mx-auto mt-[150px] px-6 flex flex-row-reverse mobile:flex-col tablet:flex-col mini-laptop:flex-col ">
      <div
        className="flex-none max-w-[600px] px-8 tablet:max-w-full mobile:max-w-full mini-laptop:max-w-full 
      tablet:mb-10 mobile:mb-10 mini-laptop:mb-10 my-4 mobile:px-0
      "
      >
        <h1 className="text-3xl text-white font-bold inter-var">
          Highlight the cursor.
        </h1>
        <p className="mobile:tablet:text-base text-lg mt-6 mobile:tablet:mt-4 text-[#8C8C8C] font-normal inter-var">
          Our cursor highlighter is highly customizable. Pick your shape, size,
          and colors. You&apos;ll effortlessly create a breathtaking design that
          will amaze your audience.
        </p>
        <div className="border-t border-t-gray-800 border-t-1 mt-4 ">
          <h1 className="text-xl md:text-xl mt-4  lg:text-xl text-white font-bold inter-var">
            The sole focus is on the presentation
          </h1>
          <p className="mobile:tablet:text-base text-lg mobile:tablet:mt-4 mt-2 text-[#8C8C8C] font-normal inter-var">
            Cursor Highlight lets you concentrate solely on your presentation
            content.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-white grow-2">
        <video
          controls={true}
          loop={true}
          autoPlay={true}
          preload="auto"
          playsInline={true}
          className="rounded-xl"
        >
          <source src={"/cursor_intro.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
