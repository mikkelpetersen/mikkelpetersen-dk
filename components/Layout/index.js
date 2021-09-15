import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
