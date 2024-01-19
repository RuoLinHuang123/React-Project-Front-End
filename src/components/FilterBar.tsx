import { Box, Flex } from "@chakra-ui/react";

const FilterBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      borderTop="1px"
      borderColor="gray.200"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      padding="10px"
    >
      <Box p="4" borderRadius={10} cursor="pointer" transition="background-color 0.2s" _hover={{ bg: "gray.100" }}>
        ALL
      </Box>
      <Box p="4" borderRadius={10} cursor="pointer" transition="background-color 0.2s" _hover={{ bg: "gray.100" }}>
        Planet
      </Box>
      <Box p="4" borderRadius={10} cursor="pointer" transition="background-color 0.2s" _hover={{ bg: "gray.100" }}>
        Dwarf Planet
      </Box>
      <Box p="4" borderRadius={10} cursor="pointer" transition="background-color 0.2s" _hover={{ bg: "gray.100" }}>
        Satellite
      </Box>
    </Flex>
  );
};

export default FilterBar;
