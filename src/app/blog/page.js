import Header from "@/components/Header";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="mt-12 w-full flex flex-col sm:flex-row flex-wrap space-x-4 space-y-5 justify-center pb-10">
        {posts.map((post, idx) => (
          <Post key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
