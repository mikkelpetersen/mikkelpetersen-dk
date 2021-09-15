import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py="12">
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        pb={5}
      >
        <Box>
          <Text fontSize="md">Mikkel Petersen</Text>
        </Box>
        <ButtonGroup variant="ghost">
          <IconButton
            as={Link}
            aria-label="LinkedIn"
            rel="noopener"
            href="https://www.linkedin.com/in/mikkelpe/"
            isExternal
            icon={<FaLinkedin fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">
          &copy; {new Date().getFullYear()} Mikkel Petersen
        </Text>
        <IconButton
          as={Link}
          aria-label="GitHub"
          rel="noopener"
          href="https://github.com/mikkelpetersen/mikkelpetersen-dk"
          isExternal
          icon={<FaGithub fontSize="20px" />}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
