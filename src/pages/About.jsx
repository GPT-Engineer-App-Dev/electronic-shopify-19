import { Container, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading as="h1" size="2xl">About Us</Heading>
      <Text fontSize="lg">
        Welcome to our e-commerce site. We offer a wide range of electronics to suit all your needs. Our mission is to provide high quality products at the best prices.
      </Text>
    </VStack>
  </Container>
);

export default About;