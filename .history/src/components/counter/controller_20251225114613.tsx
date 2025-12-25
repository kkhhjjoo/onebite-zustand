import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function Controller() {
  const { increase, decrease } = useCountStore((store) => store.increase);
  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
