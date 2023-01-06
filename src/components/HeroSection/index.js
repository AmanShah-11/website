import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroAutoType,
  VideoBg,
} from "./HeroElements";
import Typical from "react-typical";

const HeroSection = ({ isOpen }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const HeroorNone = () => {
    return (
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hey, I'm Aman!</HeroH1>
          <HeroAutoType
            loop={Infinity}
            wrapper="p"
            steps={[
              "Aspiring Developer",
              3000,
              "Expert Googler",
              3000,
              "University Student",
              3000,
              "Detroit Lions Fan :)",
              3000,
            ]}
          ></HeroAutoType>
          {/* <HeroP>Thanks for checking out my website! :)</HeroP> */}
          <HeroBtnWrapper>
            <Button
              to="about"
              // onMouseEnter={() => onHover()}
              // onMouseLeave={() => onHover()}
              primary="true"
              dark="true"
            >
              About Me! {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
  };

  if (!isOpen) {
    return HeroorNone();
    // return (
    //   <>
    //     {" "}
    //     <h1>bye</h1>
    //   </>
    // );
  } else {
    return <>{/* <h1>Hi</h1> */}</>;
  }
};

export default HeroSection;
