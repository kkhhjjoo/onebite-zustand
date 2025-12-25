import { useCountStore } from "@/store/count";

export default function Viewer() {
  const count = useCountStore((state) => state.count);

  return <div>{count}</div>;
}
