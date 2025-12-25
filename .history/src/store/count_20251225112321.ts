import { create } from "zustand";

create((set, get) => {
  return {
    count: 0,
    increase: () => {
      const count = get().count;
      set({ count: count + 1 });

      set(() => {
        return {
          count: Store.count + 1;
        };
      });
    },
    decrease: () => {},
  };
});
