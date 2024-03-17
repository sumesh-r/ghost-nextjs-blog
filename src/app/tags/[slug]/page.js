import Header from "@/components/Header";
import Post from "@/components/Post";

export default function Tag() {
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="mt-12">
        <Post />
      </div>
    </div>
  );
}
