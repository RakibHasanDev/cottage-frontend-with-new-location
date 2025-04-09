'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  title?: string;
};

const BannerWithBreadcrumbs = ({ title }: Props) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <div className="md:px-4 md:px-10 py-4 px-2">
      {/* Wrapper to align breadcrumb left */}
      <div className="flex justify-start">
        {/* Breadcrumb with background only around text */}
        <div className="inline-block bg-[#000000c9] px-4 md:py-2 rounded-md py-1">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center text-xs md:text-lg font-semibold text-white">
              <li className="flex items-center">
                <Link href="/" className="hover:underline text-white ">Home</Link>
                {segments.length > 0 && <span className="mx-2">/</span>}
              </li>
              {segments.map((segment, index) => {
                const href = '/' + segments.slice(0, index + 1).join('/');
                return (
                  <li key={href} className="flex items-center">
                    <Link
                      href={href}
                      className="hover:underline lowercase text-[#ff9900]"
                    >
                      {decodeURIComponent(segment.replace(/-/g, '-'))}
                    </Link>
                    {index < segments.length - 1 && <span className="mx-2">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BannerWithBreadcrumbs;
