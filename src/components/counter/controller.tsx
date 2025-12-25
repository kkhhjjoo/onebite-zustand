import { Button } from "@/components/ui/button";
import { useDecreaseCount, useIncreaseCount } from "@/store/count";

export default function Controller() {
  // const increase = useCountStore((state) => state.increase);
  // const decrease = useCountStore((state) => state.decrease);

  // const { increase, decrease } = useCountStore((state) => state.actions);

  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
