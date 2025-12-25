import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function Controller() {
  const increase = useCountStore((state) => state.increase);
  const decrease = useCountStore((state) => state.decrease);
  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
