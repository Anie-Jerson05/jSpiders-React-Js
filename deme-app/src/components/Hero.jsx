import hero from "../assets/apple.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <span className="hero-img">
          <img src={hero} alt="" />
        </span>
        <div className="hero-con">
          <h2>Suprise and shine.</h2>
          <h4>
            Watch a special Apple Event online on 9 September at 10:30 PM IST.
          </h4>
          <button>Add to calendar</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
