import { create } from "zustand";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCountStore = create<Store>((set, get) => {
  return {
    count: 0,
    increase: () => {
      // const count = get().count;
      // set({ count: count + 1 });
      set((state) => ({
        count: state.count + 1,
      }));
    },
    decrease: () => {
      set((state) => ({
        count: state.count - 1,
      }));
    },
  };
});
