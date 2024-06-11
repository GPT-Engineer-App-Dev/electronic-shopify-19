import { Box, SimpleGrid, Image, Text, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "smartphone.jpg",
    description: "A high-end smartphone with a sleek design and advanced features.",
    price: "$699"
  },
  {
    id: 2,
    name: "Laptop",
    image: "laptop.jpg",
    description: "A powerful laptop with a fast processor and plenty of storage.",
    price: "$999"
  },
  {
    id: 3,
    name: "Headphones",
    image: "headphones.jpg",
    description: "Noise-cancelling headphones with superior sound quality.",
    price: "$199"
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>Our Products</Heading>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {filteredProducts.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={product.image} alt={product.name} />
          <VStack mt={4} align="start">
            <Heading as="h2" size="md">{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text fontWeight="bold">{product.price}</Text>
          </VStack>
        </Box>
      ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;