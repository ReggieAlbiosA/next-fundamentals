'use client'

import { useState } from "react";
import Link from "next/link";

const BlogPost: React.FC<{ blogTitle: string; count: number }> = ({ blogTitle, count }) => {
    return <Link href={`/blogpost/blogpost-${count}-${blogTitle}`}><a className="w-full h-full flex justify-center items-center bg-[#f5f5f5] p-[1rem]">{`blogpost ${count}`}</a></Link>;
};

export default function BlogPostPage() {
    const [count] = useState(0);

    return (
        <ul className="flex flex-col gap-y-[1em]">
            <li ><BlogPost blogTitle="population" count={count + 1} /></li>
            <li ><BlogPost blogTitle="technology" count={count + 2} /></li>
            <li ><BlogPost blogTitle="environment" count={count + 3} /></li>
            <li ><BlogPost blogTitle="health" count={count + 4} /></li>
        </ul>
    );
}
