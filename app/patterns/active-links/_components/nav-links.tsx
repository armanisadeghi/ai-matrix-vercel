//app/patterns/active-links/_components/nav-links.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function NavLinks({
  links,
}: {
  links: { href: string; name: string }[];
}) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href} // Add the 'key' prop here using 'link.href' as a unique identifier
            href={link.href}
            className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
              'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
                !isActive,
              'bg-vercel-blue text-white': isActive,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
