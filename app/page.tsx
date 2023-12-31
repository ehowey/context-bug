import Counter from "@/components/Counter";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl pb-4">Context bug - Home page</h1>
      <Counter />
      <div>
        <Link
          href="/page-2"
          className="underline text-indigo-600 dark:text-indigo-300"
        >
          Page 2
        </Link>
      </div>
    </main>
  );
}
