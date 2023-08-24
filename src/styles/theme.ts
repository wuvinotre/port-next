import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Raleway', sans-serif",
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
});

export default theme;
