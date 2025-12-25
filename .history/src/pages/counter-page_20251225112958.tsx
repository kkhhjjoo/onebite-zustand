import { useCountStore } from "@/store/count";

export default function CounterPage() {
  const store = useCountStore();
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
    </div>
  );
}
