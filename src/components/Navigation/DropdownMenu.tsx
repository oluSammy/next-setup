import React from 'react';
import { useRouter } from 'next/router';
import { navStyles } from './Navbar';
import Link from 'next/link';

interface IProps {
  subMenus: {
    label: string;
    path: string;
    icon: React.ReactNode;
  }[];

  label: string;
  icon: React.ReactNode;
}

const DropdownMenu: React.FC<IProps> = ({ subMenus, label, icon }) => {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const subMenuPaths = subMenus.map((subMenu) => subMenu.path);

  const isActive = subMenuPaths.includes(router.pathname);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`${navStyles} relative ${
        isActive && 'bg-primary-100 text-white rounded-md'
      }`}
    >
      <div>{icon}</div>
      <button aria-expanded={open ? 'true' : 'false'}>{label}</button>
      <div
        className={`${
          !open && 'hidden'
        } absolute bg-[#17161D] left-0 top-8 z-50 w-[150px] py-2 rounded-md shadow-md ${
          isActive && 'bg-primary-100 text-white'
        }`}
      >
        {subMenus.map((subMenu) => (
          <Link
            href={subMenu.path}
            className={
              isActive
                ? ` text-primary-100 font-[700] py-2 rounded-md mb-2 ml-0 flex items-center px-4 hover:bg-primary-100 hover:text-white`
                : `mb-4 ml-0 flex items-center px-4 hover:bg-primary-100 text-white`
            }
            key={subMenu.path}
          >
            {subMenu.icon}
            <span className="ml-2">{subMenu.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
