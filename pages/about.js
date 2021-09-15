import Layout from "@/components/Layout";
import { Box, Stack, Heading, SlideFade, Text } from "@chakra-ui/react";
import { NextSeo as SEO } from "next-seo";

const Index = () => {
  return (
    <>
      <SEO title="About Me" />
      <Layout>
        <Box as="section">
          <SlideFade as="section" in={true} offsetY={50}>
            <Stack
              alignItems="center"
              direction={{ base: "column", md: "row" }}
              spacing={4}
            >
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  hic consectetur illum iusto sapiente nesciunt dolorem est
                  error accusantium placeat nostrum, voluptate ducimus
                  perferendis facilis similique mollitia natus quia laborum.
                </Text>
              </Box>
            </Stack>
          </SlideFade>
        </Box>
      </Layout>
    </>
  );
};

export default Index;
