"use client";

import { Divider, Stack } from "@chakra-ui/react";
import { Content } from "@/layout/content";
import { Header } from "@/layout/header";
import { ButtonTheme } from "@/components/button/buttonTheme";
import { Footer } from "@/layout/footer";

const Page = () => {
  return (
    <Stack maxH={"full"} maxW={"full"}>
      <ButtonTheme />
      <Stack paddingLeft={"10%"} paddingRight={"10%"}>
        <Header />
        <Divider />
        <Content />
        <Divider />
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Page;
