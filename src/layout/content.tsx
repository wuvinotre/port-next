import { ChevronRightIcon } from "@chakra-ui/icons";
import { Divider, Heading, Highlight, Stack, Text } from "@chakra-ui/react";

export const Content = () => {
  return (
    <Stack padding={"2"}>
      <Heading as="h4" size="md" paddingTop={"2.5"} paddingBottom={"2.5"}>
        Sobre mim
      </Heading>
      <Text fontSize="lg" align={"center"} lineHeight={"1.5"}>
        <Highlight
          query={["Desenvolvedor Mobile", "React-Native", "Swift"]}
          styles={{ px: "2", py: "0.5", rounded: "full", bg: "blue.200" }}
        >
          Olá, meu nome é Ewerton Vinicius, sou Desenvolvedor Mobile. Estou
          cursando o 6º semestre em Ciência da Computação, atualmente moro em
          Curitiba-PR, no Brasil. Tenho 2 anos de experiência com React-Native e
          estou no processo de aprendizado sobre desenvolvimento iOS com Swift.
        </Highlight>
      </Text>
      <Heading as="h4" size="md" paddingTop={"2.5"} paddingBottom={"2.5"}>
        Projetos
      </Heading>
      <Text fontSize="lg" as={"b"} justifyContent={"center"} paddingLeft={"5"}>
        <ChevronRightIcon />
        React Freight - App para cotação de frete.
      </Text>
      <Text fontSize="lg" align={"start"} lineHeight={"1.5"} paddingLeft={"5"}>
        Após selecionar no mapa o local de origem e destino, o aplicativo
        calcula o valor do frete e exibe o resultado na tela, com os valores de
        forma detalhada.
        <br />
        <br />
        Tecnologias usadas: React-Native, React-Navigation, Redux-Toolkit,
        Formik, Yup, Firebase/Firestore/Auth, Maps, Maps Directions,
        Google-Places-Autocomplete.
      </Text>
      <Divider />
      <Heading as="h4" size="md" paddingTop={"2.5"} paddingBottom={"2.5"}>
        Experiências Profissionais
      </Heading>
      <Text fontSize="lg" align={"start"} lineHeight={"1.5"} paddingLeft={"5"}>
        <Text as={"b"} justifyContent={"center"}>
          <ChevronRightIcon />
          Desenvolvedor Mobile - React-Native
        </Text>
        <br />
        <Text as={"sub"} paddingLeft={"5"}>
          Hipe Innovation Center - (08/2022 - Atualmente)
        </Text>
        <br />
        <br />
        Desenvolvimentos de aplicações para o mercado varejista.
        <br />
        Tecnologias usadas: React-Native, React-Navigation, Redux-Toolkit,
        Redux-Sagas, RealmDB, Formik, Yup, Git.
      </Text>
      <Text
        fontSize="lg"
        align={"start"}
        lineHeight={"1.5"}
        paddingLeft={"5"}
        paddingTop={"2.5"}
        paddingBottom={"2.5"}
      >
        <Text as={"b"} justifyContent={"center"}>
          <ChevronRightIcon />
          Desenvolvedor FullStack - Laravel
        </Text>
        <br />
        <Text as={"sub"} paddingLeft={"5"}>
          King System - (02/2022 - 08/2020)
        </Text>
        <br />
        <br />
        Desenvolvimento de CRM, documentação de projeto, levantamento de
        requisitos.
        <br />
        Tecnologias usadas: Laravel, Blade, Bootstrap, Tailwind, ReactJs, SQL,
        Git, Docker.
      </Text>
    </Stack>
  );
};
