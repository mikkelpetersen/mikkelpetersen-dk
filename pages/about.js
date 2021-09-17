import Layout from "@/components/Layout";
import Stack from "@/components/Stack";
import { Box, Divider, Heading, SlideFade, Text } from "@chakra-ui/react";
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
                I am an User Experience Designer and Front-End Developer based
                in Denmark. I recently graduated from the IT University of
                Copenhagen, where I studied a Master of Science in Information
                Technology (Cand.it in Digital Design and Interactive
                Technologies). Lately, I have been working as an Assistant
                Lecturer at the IT University of Copenhagen.
              </Text>
              <Text
                textColor="gray.600"
                fontSize={{ base: "md", md: "xl" }}
                lineHeight="taller"
                my={8}
              >
                I would describe myself as a Design-Oriented Front-End Developer
                — meaning that I enjoy both designing and developing digital
                products and services. I especially like doing UX Research, UX
                Design, Service Design and Front-End Development. Moreover, I am
                fond of accessibility and strongly believe in the WCAG
                principles.
              </Text>
              <Text
                textColor="gray.600"
                fontSize={{ base: "md", md: "xl" }}
                lineHeight="taller"
                my={8}
              >
                If you would like to know more, then feel free to contact me.
              </Text>
            </Box>
          </SlideFade>
          <Divider my={{ base: 10, md: 20 }} />
          <Stack />
        </Box>
      </Layout>
    </>
  );
};

export default About;
