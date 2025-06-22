import Link from 'next/link';
import { getSortedBlogsData } from '../lib/blogs';

export default function Home() {
  const blogs = getSortedBlogsData();

  return (
    <div className='w-[600px] mx-auto my-16 px-8'>
      <h1 className='text-2xl font-semibold pb-8'>Blog</h1>
      <ul className='space-y-3'>
        {blogs.map(({ slug, title, date }) => (
          <li key={slug} className='flex flex-col'>
            <small className='text-xs text-gray-500'>{date}</small>
            <Link href={`/blog/${slug}`} className='hover:underline'>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
