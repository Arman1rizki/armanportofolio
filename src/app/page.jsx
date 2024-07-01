import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/ui/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Front end Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent from-accent-hover">Arman Rizki</span>
            </h1>
            <p className="max-w-[500px] text-white/80">
              I exel if creafting elegant digital experiences and i am
              proficient in front-end technologies.
            </p>
            {/* btn and social */}
            <div className="flex xl:flex-row flex-col items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-1 mb xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats/> */}
    </section>
  );
};

export default Home;
