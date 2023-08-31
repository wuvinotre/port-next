"use client";

import { Center, Divider, Heading, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

export const Header = (): ReactElement => {
  return (
    <VStack padding={"2"}>
      <Center>
        <Heading as="h2" size="xl">
          Port-App - (Desenvolvendo)
        </Heading>
      </Center>
    </VStack>
  );
};
