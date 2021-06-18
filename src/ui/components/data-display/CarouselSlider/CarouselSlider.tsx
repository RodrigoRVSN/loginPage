import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 930px");

  return (
    <Flex
      bgGradient="linear(to-l, #008000 , #322659 )"
      p={20}
      direction="column"
      width="40%"
      justifyContent="center"
    >
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src="/img/carouselBakugou.png" />
        </div>
        <div>
          <img src="/img/carouselDeidara.png" />
        </div>
        <div>
          <img src="/img/carouselKimblee.png" />
        </div>
      </Carousel>
    </Flex>
  );
};

export default CarouselSlider;
