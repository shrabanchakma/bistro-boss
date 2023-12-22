import { Parallax } from "react-parallax";
const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImageStyle={{ height: "800px", maxWidth: "1920px" }}
      bgImage={`${img}`}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60 h-[400px] w-[1200px] "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold uppercase ">{title}</h1>
            <p className="mb-5 text-lg">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
