import Layout from "@/components/Layout";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const components = {};

const Post = ({ source, frontMatter }) => {
  return (
    <Layout>
      <h1 className="">{frontMatter.title}</h1>
      <main className="">
        <MDXRemote {...source} components={components} />
      </main>
    </Layout>
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
      source: mdxSource,
      frontMatter: data,
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
