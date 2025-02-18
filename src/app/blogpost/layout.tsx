import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog Post',
    description: 'Explore the blog post trends',
  }
export default function CreateBlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-y-[40px]">

        <div className="">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Blog Post</h1>
                <Link href="/create-blogpost">
                    <a className="bg-blue-600 hover:bg-blue-700 transition-bg duration-300 rounded-md p-[2px_10px] text-white">
                        create
                    </a>
                </Link>
            </div>

            <p className="text-[1.1rem]">see the blog post</p>
        </div>

        <section>{children}</section>

        </div>
    
    );
}