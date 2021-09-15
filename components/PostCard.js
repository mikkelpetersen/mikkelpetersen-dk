import {
  Box,
  Heading,
  HStack,
  LinkBox,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link
      as={`/${post.filePath.replace(/\.mdx?$/, "")}`}
      href={`/[slug]`}
      passHref
    >
      <LinkBox as="a">
        <Box
          width="100%"
          transition=".15s"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          cursor="pointer"
          role="group"
          _hover={{
            borderColor: "blue.500",
          }}
        >
          <Image
            src={post.data.featuredImage}
            width="1684"
            height="1190"
            layout="responsive"
            alt={post.data.featuredImageText}
          />
          <Box p={6}>
            <HStack spacing={4}>
              {post.data.tags.map((tag) => (
                <Tag size="lg" key={tag} variant="outline" colorScheme="blue">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </HStack>
            <Heading as="h3" textColor="blue.900" fontSize="3xl" my={4}>
              {post.data.title}
            </Heading>
            <Text textColor="gray.600" noOfLines={2}>
              {post.data.description}
            </Text>
          </Box>
        </Box>
      </LinkBox>
    </Link>
  );
};

export default PostCard;
