import { Box } from "@chakra-ui/react";
import useFilter from "./Filter";

interface Props {
    filterName: "ALL" | "Planet" | "Dwarf Planet" | "Moon"
  }

const FilterBox = ({filterName}: Props) => {
  const { filter, setFilter } = useFilter();
  function handleClick(value: "ALL" | "Planet" | "Dwarf Planet" | "Moon") {
    setFilter(value);
  }
  return (
    <Box
      p="4"
      borderRadius={10}
      cursor="pointer"
      transition="background-color 0.2s"
      _hover={{ bg: "gray.100" }}
      onClick={() => handleClick(filterName)}
      backgroundColor={filter == filterName ? "gray.100" : "initial"}
    >
      {filterName}
    </Box>
  );
};

export default FilterBox;
