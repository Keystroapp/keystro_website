export default function ThockSection() {
  return (
    <div className="max-w-6xl mx-auto mt-[150px] px-6 flex flex-row mobile:flex-col tablet:flex-col mini-laptop:flex-col ">
      <div
        className="flex-none max-w-[600px] px-6 tablet:max-w-full mobile:max-w-full mini-laptop:max-w-full 
      tablet:mb-10 mobile:mb-10 mini-laptop:mb-10 my-4 mobile:px-0
      "
      >
        <h1 className="text-3xl text-white font-bold inter-var">
          Hear realistic keyboard sounds!
        </h1>
        <p className="mobile:tablet:text-base text-lg mt-6 mobile:tablet:mt-4 text-[#8C8C8C] font-normal inter-var">
          Don&apos;t have mechanical keyboards but miss those juicy sounds?
          Thock is the perfect feature we brought for you.
        </p>
        <div className="border-t border-t-gray-800 border-t-1 mt-4 ">
          <h1 className="text-xl md:text-xl mt-4  lg:text-xl text-white font-bold inter-var">
            10+ different keyboard sounds
          </h1>
          <p className="mobile:tablet:text-base text-lg mobile:tablet:mt-4 mt-2 text-[#8C8C8C] font-normal inter-var">
            Select from 10+ different mechanical keyboard sounds. Choose
            whichever sounds amuse you the most.
          </p>
        </div>
      </div>

      <div className="rounded-xl grow-2">
        <video
          controls={true}
          loop={false}
          autoPlay={false}
          preload="auto"
          playsInline={true}
          className="rounded-xl"
        >
          <source src={"/thock_intro2.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
