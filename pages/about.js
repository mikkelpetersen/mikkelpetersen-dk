import Layout from "@/components/Layout";
import { Box, Heading, SlideFade, Text } from "@chakra-ui/react";
import { NextSeo as SEO } from "next-seo";

const About = () => {
  return (
    <>
      <SEO title="About Me" />
      <Layout>
        <Box as="section">
          <SlideFade as="section" in={true} offsetY={50}>
            <Box>
              <Heading
                as="h1"
                textColor="blue.900"
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                My Name is Mikkel.
              </Heading>
              <Text
                textColor="gray.600"
                fontSize={{ base: "md", md: "xl" }}
                lineHeight="taller"
                my={8}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis corrupti aliquid veniam dicta quo consequuntur ad illo
                accusantium, odit magni! Officiis debitis aut eos sunt cumque
                harum sapiente sint maxime!
              </Text>
            </Box>
          </SlideFade>
        </Box>
      </Layout>
    </>
  );
};

export default About;
