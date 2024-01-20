import { create } from "zustand";

interface filterBy {
  filter: "ALL" | "Planet" | "Dwarf Planet" | "Moon";
  setFilter: (newFilter: "ALL" | "Planet" | "Dwarf Planet" | "Moon") => void;
}

const useFilter = create<filterBy>((set) => ({
    filter: "ALL", // default value
    setFilter: (newFilter: "ALL" | "Planet" | "Dwarf Planet" | "Moon") => {
      set({ filter: newFilter });
    },
  }));

export default useFilter;