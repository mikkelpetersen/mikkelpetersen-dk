import {
  Box,
  Flex,
  Stack,
  HStack,
  useDisclosure,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

const Links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
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
        py={5}
      >
        <Box>
          <Text fontSize="sm">Mikkel Petersen</Text>
        </Box>
        <HStack as="nav" display={{ base: "none", md: "flex" }} spacing={4}>
          {Links.map((link) => (
            <NavLink
              href={link.route}
              key={link.name}
              currentPath={router.asPath}
              p={4}
            >
              {link.name}
            </NavLink>
          ))}
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: !isOpen ? "none" : "inherit" }}
          rounded="none"
        />
      </Flex>
      {isOpen ? (
        <Box my={4}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                href={link.route}
                key={link.name}
                currentPath={router.asPath}
                p={4}
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
