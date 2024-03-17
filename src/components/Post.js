import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <div className="border p-3 cursor-pointer w-1/4 rounded-lg">
      <Link href="/blog/slug">
        {/* feature Image */}
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the something nice"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full rounded-lg h-auto"
          />
        </div>
        {/* title */}
        <div className="text-lg font-semibold mt-2">Post Title</div>
      </Link>
      {/* tags */}
      <div className="flex mt-2">
        <span className="py-1 text-sm">Tags:</span>
        <div className="flex items-center ml-5 text-xs space-x-4">
          <Link className="px-2 py-1 border rounded-lg" href="/tags/slug">
            nextjs
          </Link>
          <Link className="px-2 py-1 border rounded-lg" href="/tags/slug">
            tailwindcss
          </Link>
        </div>
      </div>
      <Link href="/blog/slug">
        {/* excerpt */}
        <div className="text-justify mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </Link>
    </div>
  );
}
