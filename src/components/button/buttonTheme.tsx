import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Circle, HStack, Spacer, useBoolean } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useMemo } from "react";

const MotionMoonIcon = motion(MoonIcon);
const MotionSunIcon = motion(SunIcon);

export const ButtonTheme = () => {
  const [isDark, setIsDark] = useBoolean(false);

  return (
    <HStack>
      <Spacer />
      <Button
        onClick={setIsDark.toggle}
        variant="ghost"
        marginRight={"5"}
        marginTop={"5"}
        _hover={{ bg: "none" }}
      >
        {isDark ? (
          <Circle size="40px" bg="gray.500" color="white">
            <MotionMoonIcon
              boxSize={25}
              animate={{ rotate: -360 }}
              transition={{ duration: 1 }}
            />
          </Circle>
        ) : (
          <Circle size="40px" bg="gray.500" color="white">
            <MotionSunIcon
              boxSize={25}
              animate={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />
          </Circle>
        )}
      </Button>
    </HStack>
  );
};
