import { create } from "zustand";

create(() => {
  return {
    count: 0,
    increase: () => {},
    decrease: () => {},
  };
});
