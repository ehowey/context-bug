import Counter from "@/components/Counter";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl pb-4">Context bug - Page 2</h1>
      <Counter />
      <div className="pt-4">
        <Link
          href="/"
          className="underline text-indigo-600 dark:text-indigo-300"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
