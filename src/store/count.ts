import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type Store = {
//   count: number;
//   actions: {
//     increaseOne: () => void;
//     decreaseOne: () => void;
//   };
// };

export const useCountStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      actions: {
        increaseOne: () => {
          set((state) => {
            state.count += 1;
          });
        },
        decreaseOne: () => {
          set((state) => {
            state.count -= 1;
          });
        },
      },
    })),
  ),
);

// export const useCountStore = create<Store>((set, get) => {
//   return {
//     count: 0,
//     actions: {
//       increaseOne: () => {
//         // const count = get().count;
//         // set({ count: count + 1 });
//         set((state) => ({
//           count: state.count + 1,
//         }));
//       },
//       decreaseOne: () => {
//         set((state) => ({
//           count: state.count - 1,
//         }));
//       },
//     },
//   };
// });

export const useCount = () => {
  const count = useCountStore((state) => state.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((state) => state.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((state) => state.actions.decreaseOne);
  return decrease;
};
