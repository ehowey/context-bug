"use client";

import { useAppContext } from "@/lib/AppContext";

const Counter = () => {
  const { count, setCount } = useAppContext();

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="max-w-sm">
      <h2 className="text-xl">
        Count: <span>{count}</span>
      </h2>
      <div className="pt-4 flex flex-col space-y-3">
        <button
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
