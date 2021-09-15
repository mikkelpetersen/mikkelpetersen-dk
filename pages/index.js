import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import { Divider } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { NextSeo as SEO } from "next-seo";
import path from "path";

const Index = ({ posts }) => {
  return (
    <>
      <SEO title="UX Designer and Front-End Developer" />
      <Layout>
        <Hero />
        <Divider my={{ base: 10, md: 20 }} />
        <Posts posts={posts} />
      </Layout>
    </>
  );
};

export default Index;

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
