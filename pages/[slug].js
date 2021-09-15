import Highlight from "@/components/Highlight";
import Layout from "@/components/Layout";
import {
  Box,
  Heading,
  HStack,
  SlideFade,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo as SEO } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const Paragraph = ({ children }) => {
  return (
    <Text
      textColor="gray.600"
      fontSize={{ base: "md", md: "xl" }}
      lineHeight="taller"
      my={{ base: 4, md: 8 }}
    >
      {children}
    </Text>
  );
};

const components = {
  p: Paragraph,
  Highlight,
  Image,
  Link,
};

const Post = ({ post, data }) => {
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <Layout>
        <Box as="main">
          <SlideFade in={true} offsetY={50}>
            <Heading
              as="h1"
              textColor="blue.900"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              {data.title}
            </Heading>
            <HStack spacing={4} my={4}>
              {data.tags.map((tag) => (
                <Tag size="lg" key={tag} variant="outline" colorScheme="blue">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </HStack>
            <Text textColor="gray.400" fontSize="sm" lineHeight="taller">
              {data.date}
            </Text>
          </SlideFade>
          <SlideFade in={true} offsetY={50} delay={0.2}>
            <article className="">
              <MDXRemote {...post} components={components} />
            </article>
          </SlideFade>
        </Box>
      </Layout>
    </>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(
    path.join(process.cwd(), "posts"),
    `${params.slug}.mdx`
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      post: mdxSource,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "posts"))
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
