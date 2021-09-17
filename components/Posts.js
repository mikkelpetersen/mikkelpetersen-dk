import PostCard from "@/components/PostCard";
import { Box, Grid, Heading, SlideFade, Text } from "@chakra-ui/react";

const Posts = ({ posts }) => {
  return (
    <Box as="section">
      <SlideFade in={true} offsetY={50} delay={0.2}>
        <Heading as="h2" textColor="blue.900" fontSize="3xl">
          My Work
        </Heading>
        <Text
          textColor="gray.600"
          fontSize={{ base: "md", md: "xl" }}
          lineHeight="taller"
          my={{ base: 4, md: 8 }}
        >
          Over the years, I have had the honour of working with several
          companies. Below are some of the amazing projects that I have been a
          part of.
        </Text>
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
          gap={4}
        >
          {posts.map(
            (post) =>
              post.data.featured && (
                <PostCard key={post.data.title} post={post} />
              )
          )}
        </Grid>
      </SlideFade>
    </Box>
  );
};

export default Posts;
