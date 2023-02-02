import Lottie from "react-lottie";
import { HEROIMAGE } from "../../assets/animations";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: HEROIMAGE,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Hero = () => {
  return (
    <section className="h-[30rem] w-full">
      <div className="main-container h-full flex">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <div className="gap-7 flex flex-col">
            <p className="text-7xl font-bold tracking-wide">Stay curious.</p>
            <p className="tracking-wide">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <div>
              <button className="px-4 py-2 bg-theme text-white rounded-lg tracking-wide font-medium hover:scale-105 ease-in-out transition-all duration-200">
                START READING
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 flex items-center justify-end">
          <div>
            <Lottie options={defaultOptions} height={370} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
