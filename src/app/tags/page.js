import Header from "@/components/Header";
import Link from "next/link";

export default function Tags() {
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="flex flex-wrap space-x-5 mt-10">
        <Link
          href="/tags/nextjs"
          className="px-10 py-4 font-semibold text-xl border rounded-lg"
        >
          nextjs
        </Link>
      </div>
    </div>
  );
}
