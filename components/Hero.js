import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaFile } from "react-icons/fa";

const Hero = () => {
  return (
    <Box as="section">
      <SlideFade as="section" in={true} offsetY={50}>
        <Box>
          <Heading
            as="h1"
            textColor="blue.900"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            Hello!
          </Heading>
          <Text
            textColor="gray.600"
            fontSize={{ base: "md", md: "xl" }}
            lineHeight="taller"
            my={8}
          >
            I am Mikkel Petersen — an innovative User Experience Designer and
            Front-End Developer, who is passionate about creating beautiful and
            user-friendly experiences. I create compelling products and have a
            desire to excel and continuously improve within my field.
          </Text>
          <ButtonGroup spacing={4}>
            <Button
              href="/contact"
              as="a"
              leftIcon={<FaEnvelope />}
              colorScheme="blue"
              rounded="lg"
              p={6}
            >
              Contact
            </Button>
            <Button
              variant="outline"
              href="#"
              as="a"
              leftIcon={<FaFile />}
              colorScheme="blue"
              rounded="lg"
              p={6}
            >
              Resume
            </Button>
          </ButtonGroup>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Hero;
