import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Highlight = ({ title, children }) => {
  return (
    <Box
      width="100%"
      borderWidth="1px"
      borderColor="blue.500"
      borderRadius="lg"
      p={4}
      my={4}
    >
      <VStack spacing={1} alignItems="start">
        <Heading
          as="h3"
          textColor="blue.900"
          textTransform="uppercase"
          letterSpacing="wide"
          fontSize="sm"
        >
          {title}
        </Heading>
        <Text textColor="gray.600" fontSize="sm" lineHeight="taller">
          {children}
        </Text>
      </VStack>
    </Box>
  );
};

export default Highlight;
