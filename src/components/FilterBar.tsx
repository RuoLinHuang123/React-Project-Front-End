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
      <Box p="4" cursor="pointer" _hover={{ bg: "gray.100" }}>
        ALL
      </Box>
      <Box p="4" cursor="pointer" _hover={{ bg: "gray.100" }}>
        Planet
      </Box>
      <Box p="4" cursor="pointer" _hover={{ bg: "gray.100" }}>
        Dwarf Planet
      </Box>
      <Box p="4" cursor="pointer" _hover={{ bg: "gray.100" }}>
        Satellite
      </Box>
    </Flex>
  );
};

export default FilterBar;
