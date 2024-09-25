'use client';
import React, { useState } from 'react';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  return (
    <nav className='h-full container-glass p-3 rounded-full'>
      <ul className={`flexCenter gap-6`}>
        {NAV_LINKS.map((link) => (
          <li className={`rounded-lg`}>
            <Link
              href={link.href}
              key={link.key}
              className={`${link.href === pathname && 'text-primary-50 border-b-[1px] border-primary-50'} regular-16 text-grey-50 cursor-pointer tracking-tight transition-all lg:hover:text-primary-50`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
