import type { Metadata } from 'next'
import Link from 'next/link'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const id = (await params).id
 
  return {
    title: id
  }
}

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id

    return( 
      <div className="flex flex-col gap-y-[20px] items-start">
        <Link href="/blogpost"> 
          <a className="text-white bg-black rounded-md p-[7px_16px] font-bold">Back</a>
        </Link> 
        <div className="">
          <h1>My Post: {id}</h1>
        </div>
      </div>

  )
  }