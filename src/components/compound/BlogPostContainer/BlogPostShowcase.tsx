import { useState } from "react";
import { type Blog, fetchPost } from "./fetchBlogPost";
import { BarLoader } from "react-spinners";

export default function BlogPostShowcase() {
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    const randomId = Math.floor(Math.random() * 3) + 1;
    setPost(null);
    setLoading(true);
    setTimeout(() => {
      fetchPost(randomId)
        .then((data) => setPost(data))
        .then(() => setLoading(false))
        .catch((error) => console.error("Failed to fetch post:", error));
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafaf8] p-8">
      <div className="w-full max-w-[520px]">
        {/* Header */}
        <div className="mb-10 border-b border-[#111] pb-5">
          <p className="mb-2 font-['DM_Mono'] text-[0.6rem] tracking-[0.22em] text-[#aaa] uppercase">
            Random Post Generator
          </p>
          <h1 className="m-0 font-['Playfair_Display'] text-[2.5rem] leading-[1.1] font-normal text-[#111]">
            Blog Post
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={handleFetch}
          className="mb-10 cursor-pointer border border-[#111] bg-transparent px-[1.75rem] py-[0.7rem] font-['DM_Mono'] text-[0.6rem] tracking-[0.22em] text-[#111] uppercase transition-[background-color,color] duration-[180ms] hover:bg-[#111] hover:text-[#fafaf8]"
        >
          Fetch Post
        </button>

        {/* Loader */}
        {loading && (
          <div className="mb-8">
            <BarLoader width="100%" color="#111" />
          </div>
        )}

        {/* Article */}
        {post && !loading && (
          <article>
            <h2 className="mb-4 font-['Playfair_Display'] text-[1.625rem] leading-[1.3] font-bold text-[#111] capitalize">
              {post.title}
            </h2>
            <p className="font-serif text-[0.975rem] leading-[1.85] text-[#555]">
              {post.body}
            </p>
          </article>
        )}
      </div>
    </div>
  );
}
