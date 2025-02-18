import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
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
        <a href="/blogpost" className="text-white bg-black rounded-md p-[7px_16px] font-bold">Back</a>

        <div className="">
          <h1>My Post: {id}</h1>
        </div>


      </div>

  )
  }