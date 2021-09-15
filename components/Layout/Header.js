import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaEnvelope } from "react-icons/fa";
import NavLink from "./NavLink";

const Links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Me",
    route: "/about",
  },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        py={8}
      >
        <Box>
          <Text fontSize="md">Mikkel Petersen</Text>
        </Box>
        <HStack as="nav" display={{ base: "none", md: "flex" }} spacing={4}>
          {Links.map((link) => (
            <NavLink
              href={link.route}
              key={link.name}
              currentPath={router.asPath}
              letterSpacing="wide"
              fontWeight="medium"
              rounded="lg"
              py={3}
              px={4}
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            href="mailto:hej@mikkelpetersen.dk"
            as="a"
            leftIcon={<FaEnvelope />}
            colorScheme="blue"
            rounded="lg"
            p={6}
          >
            Contact
          </Button>
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: !isOpen ? "none" : "inherit" }}
          rounded="lg"
        />
      </Flex>
      {isOpen ? (
        <Box mb={8}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                href={link.route}
                key={link.name}
                currentPath={router.asPath}
                letterSpacing="wide"
                fontWeight="medium"
                rounded="lg"
                py={3}
                px={4}
              >
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};

export default Header;
