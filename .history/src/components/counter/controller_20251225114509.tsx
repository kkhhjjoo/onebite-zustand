import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function Controller() {
  const { increase, decrease } = useCountStore((state) => state);
  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
