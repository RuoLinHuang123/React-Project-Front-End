import { create } from "zustand";

interface popState {
  popState: boolean;
  setPopState: () => void;
}

const useLoginPop = create<popState>((set) => ({
  popState: false,
  setPopState: () => {
    set((state) => ({ popState: !state.popState }));
  },
}));

export default useLoginPop;
