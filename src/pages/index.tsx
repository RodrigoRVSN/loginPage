import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import DarkModeToggle from "ui/components/data-display/DarkModeToggle/DarkModeToggle";
import FormLogin from "ui/components/data-display/FormLogin/FormLogin";
import CarouselSlider from "ui/components/data-display/CarouselSlider/CarouselSlider";

export default function Home() {
  
  const [isSmallScreen] = useMediaQuery("(max-width: 930px");

  return (
    <div>
      <DarkModeToggle />
      <Flex height="100vh" direction={isSmallScreen ? "column" : "row"}>
        <FormLogin />

        {!isSmallScreen && <CarouselSlider />}
      </Flex>
    </div>
  );
}
