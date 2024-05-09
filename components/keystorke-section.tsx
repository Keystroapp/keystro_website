import Video from "next-video";

export default function KeystorekeSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              src={"/keystroke_intro.mp4"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
