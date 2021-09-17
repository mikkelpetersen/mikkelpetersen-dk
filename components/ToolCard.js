import {
  Box,
  Heading,
  IconButton,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

const ToolCard = ({ tool }) => {
  return (
    <LinkBox as="article">
      <Box
        display="flex"
        width="100%"
        transition=".15s"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        cursor="pointer"
        role="group"
        _hover={{
          borderColor: "blue.500",
        }}
      >
        <IconButton
          as="a"
          href={tool.url}
          rel="noopener"
          target="_blank"
          aria-label={tool.name}
          mr={4}
          _groupHover={{ color: "blue.500" }}
          icon={tool.icon}
        />
        <Box>
          <LinkOverlay href={tool?.url} rel="noopener" isExternal>
            <Heading as="h3" size="sm">
              {tool.name}
            </Heading>
            <Text textColor="gray.600" fontSize="sm" mt={1} noOfLines={2}>
              {tool.description}
            </Text>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default ToolCard;
