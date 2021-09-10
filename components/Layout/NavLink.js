import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const NavLink = ({ children, href, currentPath, ...props }) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        backgroundColor={href === currentPath ? "gray.100" : null}
        _hover={{ textDecoration: "none", backgroundColor: "gray.200" }}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
