import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import { Box, Divider, Heading, SlideFade, Text } from "@chakra-ui/react";
import { NextSeo as SEO } from "next-seo";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const About = ({ posts }) => {
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
          <Divider my={{ base: 10, md: 20 }} />
          <Posts posts={posts} />
        </Box>
      </Layout>
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  const posts = fs
    .readdirSync(path.join(process.cwd(), "posts"))
    .filter((path) => /\.mdx?$/.test(path))
    .map((filePath) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "posts"), filePath)
      );
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    });

  return { props: { posts } };
};
