import { Box, Flex } from "@chakra-ui/react";
import useFilter from "./Filter";

const FilterBar = () => {
  const { filter, setFilter } = useFilter();
  function handleClick(value: "ALL" | "Planet" | "Dwarf Planet" | "Moon") {
    setFilter(value);
  }

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
      <Box
        p="4"
        borderRadius={10}
        cursor="pointer"
        transition="background-color 0.2s"
        _hover={{ bg: "gray.100" }}
        onClick={() => handleClick("ALL")}
        backgroundColor={filter == "ALL" ? "gray.100" : "initial"}
      >
        ALL
      </Box>
      <Box
        p="4"
        borderRadius={10}
        cursor="pointer"
        transition="background-color 0.2s"
        _hover={{ bg: "gray.100" }}
        onClick={() => handleClick("Planet")}
        backgroundColor={filter == "Planet" ? "gray.100" : "initial"}
      >
        Planet
      </Box>
      <Box
        p="4"
        borderRadius={10}
        cursor="pointer"
        transition="background-color 0.2s"
        _hover={{ bg: "gray.100" }}
        onClick={() => handleClick("Dwarf Planet")}
        backgroundColor={filter == "Dwarf Planet" ? "gray.100" : "initial"}
      >
        Dwarf Planet
      </Box>
      <Box
        p="4"
        borderRadius={10}
        cursor="pointer"
        transition="background-color 0.2s"
        _hover={{ bg: "gray.100" }}
        onClick={() => handleClick("Moon")}
        backgroundColor={filter == "Moon" ? "gray.100" : "initial"}
      >
        Moon
      </Box>
    </Flex>
  );
};

export default FilterBar;
