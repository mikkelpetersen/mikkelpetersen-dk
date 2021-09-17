import ToolCard from "@/components/ToolCard";
import { Box, Grid, Heading, SlideFade, Text } from "@chakra-ui/react";
import {
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaJs,
  FaLightbulb,
  FaReact,
} from "react-icons/fa";

const Tools = [
  {
    name: "JavaScript",
    description:
      "JavaScript is my preferred programming language, when developing solutions.",
    icon: <FaJs />,
    url: "#",
  },
  {
    name: "React.js",
    description:
      "React is in my opinion the best JS framework for building web-based solutions.",
    icon: <FaReact />,
    url: "#",
  },
  {
    name: "Headless CMS",
    description:
      "Commodo nulla facilisi nullam vehicula ipsum a. Fermentum posuere.",
    icon: <FaDatabase />,
    url: "#",
  },
  {
    name: "GIT",
    description:
      "Commodo nulla facilisi nullam vehicula ipsum a. Fermentum posuere.",
    icon: <FaGitAlt />,
    url: "#",
  },
  {
    name: "Figma",
    description:
      "Commodo nulla facilisi nullam vehicula ipsum a. Fermentum posuere.",
    icon: <FaFigma />,
    url: "#",
  },
  {
    name: "Design Thinking",
    description:
      "Commodo nulla facilisi nullam vehicula ipsum a. Fermentum posuere.",
    icon: <FaLightbulb />,
    url: "#",
  },
];

const Stack = () => {
  return (
    <Box as="section">
      <SlideFade in={true} offsetY={50} delay={0.2}>
        <Heading as="h2" textColor="blue.900" fontSize="3xl">
          Competencies
        </Heading>
        <Text
          textColor="gray.600"
          fontSize={{ base: "md", md: "xl" }}
          lineHeight="taller"
          my={{ base: 4, md: 8 }}
        >
          During my time as a User Experience Designer and Front-End Developer,
          I gained experience with different tools and design methodologies.
        </Text>
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={4}
        >
          {Tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </Grid>
      </SlideFade>
    </Box>
  );
};

export default Stack;
