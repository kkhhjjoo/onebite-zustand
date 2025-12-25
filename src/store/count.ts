import { create } from "zustand";
import { combine, subscribeWithSelector, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type Store = {
//   count: number;
//   actions: {
//     increaseOne: () => void;
//     decreaseOne: () => void;
//   };
// };

export const useCountStore = create(
  persist(
    subscribeWithSelector(
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
    ),
    {
      name: "countStore",
      partialize: (state) => ({
        count: state.count,
      }),
    },
  ),
);

useCountStore.subscribe(
  (state) => state.count,
  (count, prevCount) => {
    //Listener
    console.log(count, prevCount);

    const store = useCountStore.getState();
    // useCountStore.setState((state) => ({ count: 10 })); //무한루프가 될수 있어 사용하지 않음
  },
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
