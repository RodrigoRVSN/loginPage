import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex
      alignItems="center"
      alignSelf="flex-end"
      position="absolute"
      width="100vw"
    >
      <IconButton
        aria-label="Change theme"
        m={20}
        icon={isDark ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default DarkModeToggle;
