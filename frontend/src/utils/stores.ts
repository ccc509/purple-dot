import { create } from "zustand";
import { ALL } from "./constants";

type FilterOption = {
  option: string;
  updateFilterOption: (value: string) => void;
};

export const useFilterOptionStore = create<FilterOption>((set) => ({
  option: ALL,
  updateFilterOption: (value) => set(() => ({ option: value })),
}));
