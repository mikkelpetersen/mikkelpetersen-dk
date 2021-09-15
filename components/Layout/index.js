import { Container } from "@chakra-ui/react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

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
