import Image from "next/image";
import Link from "next/link";

export default function Post({ data }) {
  return (
    <div className="border p-3 cursor-pointer w-full sm:w-2/4 lg:w-2/5 xl:w-1/4 rounded-lg">
      <Link href={`/blog/${data.slug}`}>
        {/* feature Image */}
        <div className="">
          <Image
            src={data.feature_image}
            alt={data?.feature_image_alt}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full rounded-lg h-auto"
          />
        </div>
        {/* title */}
        <div className="text-lg font-semibold mt-2">{data.title}</div>
      </Link>
      {/* tags */}
      <div className="flex mt-2">
        <span className="py-1 mt-2 text-sm">Tags:</span>
        <div className="flex flex-wrap  items-center ml-5 text-xs space-x-4">
          {data.tags.map((tag, idx) => (
            <Link
              key={idx}
              className="px-2 py-1 mt-2 border rounded-lg"
              href={`/tags/${tag.slug}`}
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
      <Link href={`/blog/${data.slug}`}>
        {/* excerpt */}
        <div className="text-justify mt-2">{data.excerpt}</div>
      </Link>
    </div>
  );
}
