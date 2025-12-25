import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => {
  return {
    count: 0,
    actions: {
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
    },
  };
});

export const useCount = () => {
  const count = useCountStore((state) => state.count);
  return count;
};
