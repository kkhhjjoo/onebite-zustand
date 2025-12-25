import { create } from "zustand";

create((set, get) => {
  return {
    count: 0,
    increase: () => {
      const count = get().count;
    },
    decrease: () => {},
  };
});
