import { create } from "zustand";

create((set, get) => {
  return {
    count: 0,
    increase: () => {
      // const count = get().count;
      // set({ count: count + 1 });
      set((store) => ({
        count: store.count + 1,
      }));
    },
    decrease: () => {
      set((store) => {});
    },
  };
});
