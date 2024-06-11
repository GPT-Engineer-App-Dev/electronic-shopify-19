import { Container, Text, Heading, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Heading as="h1" size="2xl">Contact Us</Heading>
      <Text fontSize="lg">
        Have questions? Feel free to reach out to us at support@ecommerce.com. We're here to help!
      </Text>
    </VStack>
  </Container>
);

export default Contact;