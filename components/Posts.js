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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          odio at necessitatibus dicta! Blanditiis.
        </Text>
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
          gap={10}
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
