export default function KeystorkeSection() {
  return (
    <div className="max-w-6xl mx-auto mt-[150px] px-6 flex flex-row mobile:flex-col tablet:flex-col mini-laptop:flex-col ">
      <div
        className="flex-none max-w-[600px] px-6 tablet:max-w-full mobile:max-w-full mini-laptop:max-w-full 
      tablet:mb-10 mobile:mb-10 mini-laptop:mb-10 my-4
      "
      >
        <h1 className="text-3xl text-white font-bold inter-var">
          Fully Customizable Floating Keystroke Widget.
        </h1>
        <p className="mobile:tablet:text-base text-lg mt-6 mobile:tablet:mt-4 text-[#8C8C8C] font-normal inter-var">
          Personalize keycap colors, Explore diffrent styles and themes. Enjoy
          Flexible widget placement: Any pixel of your screen , Your choice!
        </p>
        <div className="border-t border-t-gray-800 border-t-1 mt-4 ">
          <h1 className="text-xl md:text-xl mt-4  lg:text-xl text-white font-bold inter-var">
            Multiple Screen support
          </h1>
          <p className="mobile:tablet:text-base text-lg mobile:tablet:mt-4 mt-2 text-[#8C8C8C] font-normal inter-var">
            Easily select any connected screen to display keystrokes.
          </p>
        </div>
        <div className="border-t-[1px] border-t-gray-800  mt-6 ">
          <h1 className="text-xl md:text-xl mt-4  lg:text-xl text-white font-bold inter-var">
            10+ Styles and Unlimited color themes
          </h1>
          <p className="mobile:tablet:text-base text-lg mobile:tablet:mt-4 mt-2 text-[#8C8C8C] font-normal inter-var">
            Choose from 10+ styles and themes. Create your own custom theme.
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
          <source src={"/keystroke_intro.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
