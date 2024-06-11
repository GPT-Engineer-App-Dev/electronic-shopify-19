import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our E-commerce Site</Heading>
        <Text fontSize="xl">Discover the latest electronics and gadgets!</Text>
      </VStack>
    </Container>
  );
};

export default Index;