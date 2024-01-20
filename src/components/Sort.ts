import { create } from "zustand";

interface SortBy {
  order: "name" | "mass";
  setOrder: (newOrder: "name" | "mass") => void;
}

const useSort = create<SortBy>((set) => ({
  order: "name", // default value
  setOrder: (newOrder: "name" | "mass") => {
    set({ order: newOrder });
  },
}));

export default useSort;
