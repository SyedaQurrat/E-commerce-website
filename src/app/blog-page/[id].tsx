"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity.config";
import { fetchSingleBlogPost } from "@/lib/sanityQueries";
import Header from "@/app/Header/page";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const data = await sanityClient.fetch(fetchSingleBlogPost(id as string));
        setBlog(data);
      };
      fetchBlog();
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Button variant="outline" onClick={() => router.push("/blog")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
        </Button>

        <h1 className="text-3xl font-bold my-4">{blog.title}</h1>
        <Image src={blog.imageUrl} alt={blog.title} width={800} height={400} className="rounded" />
        <p className="text-muted-foreground my-2">{new Date(blog.date).toDateString()}</p>
        <div className="prose">{blog.content}</div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
