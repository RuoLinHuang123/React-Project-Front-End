import { Box, Flex } from "@chakra-ui/react";
import SortMenu from "./SortMenu";
import FilterBox from "./FilterBox";

const FilterAndSortBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      padding="10px"
    >
      <FilterBox filterName="ALL" />
      <FilterBox filterName="Planet" />
      <FilterBox filterName="Dwarf Planet" />
      <FilterBox filterName="Moon" />
      <Box marginTop="2">
        <SortMenu></SortMenu>
      </Box>
    </Flex>
  );
};

export default FilterAndSortBar;
