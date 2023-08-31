import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Stack padding={"2"} paddingTop={"5"}>
      <Card>
        <CardHeader>
          <Heading size="md">Contato</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                paddingBottom={"1.5"}
              >
                Github
              </Heading>
              <Link
                href="https://github.com/wuvinotre"
                isExternal
                fontSize="sm"
              >
                https://github.com/wuvinotre <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                paddingBottom={"1.5"}
              >
                Linkedin
              </Heading>
              <Link
                href="https://www.linkedin.com/in/vuinishiusu/"
                isExternal
                fontSize="sm"
              >
                https://www.linkedin.com/in/vuinishiusu
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                paddingBottom={"1.5"}
              >
                Twitter
              </Heading>
              <Link
                href="https://twitter.com/_Vuinishiusu"
                isExternal
                fontSize="sm"
              >
                https://twitter.com/_Vuinishiusu
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
