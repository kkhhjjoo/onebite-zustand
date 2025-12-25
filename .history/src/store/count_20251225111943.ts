import { create } from "zustand";

create((set, get) => {
  return {
    count: 0,
    increase: () => {
      get().count;
    },
    decrease: () => {},
  };
});
