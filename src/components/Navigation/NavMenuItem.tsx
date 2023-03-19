import React from 'react';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import { IMenuItem, navStyles } from './Navbar';
import { useRouter } from 'next/router';

const NavMenuItem: React.FC<IMenuItem> = ({ icon, label, path, subMenu }) => {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <div>
      {subMenu ? (
        <DropdownMenu subMenus={subMenu} icon={icon} label={label} />
      ) : (
        <Link
          href={path}
          className={
            isActive
              ? `${navStyles} bg-primary-100 text-white font-[700] rounded-md`
              : `${navStyles}`
          }
          key={path}
        >
          {icon}
          <span className="ml-2">{label}</span>
        </Link>
      )}
    </div>
  );
};

export default NavMenuItem;
