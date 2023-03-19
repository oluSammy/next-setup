import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import paths from './paths';
import { CiImport } from 'react-icons/ci';
import { IoIosGitCompare } from 'react-icons/io';
import { IoPricetagsOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { TbTallymark4 } from 'react-icons/tb';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMenuOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { FcSalesPerformance } from 'react-icons/fc';
import { SiStatuspal } from 'react-icons/si';
import { HiOutlineCollection } from 'react-icons/hi';
import { GiToken } from 'react-icons/gi';
import { VscJson } from 'react-icons/vsc';
import { useOnClickOutside } from 'usehooks-ts';
import { Box } from '@mui/material';
import Link from 'next/link';
import Logo from '../IconComponents/Logo';
import NavMenuItem from './NavMenuItem';

export const navStyles =
  'lg:text-[14px] md:text-[12px] lg:ml-4 md:ml-2 max-xs:mb-2 hover:bg-primary-100 hover:text-white font-[500] flex items-center px-4';

export interface IMenu {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface IMenuItem extends IMenu {
  subMenu?: IMenu[];
}

export interface IMenuItems {
  menuItems: IMenuItem[];
}

const NavBar = () => {
  const { width } = useWindowSize();
  const listRef = React.useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    {
      label: 'Collections',
      path: paths.home,
      icon: <TbTallymark4 />,
    },
    {
      label: 'Contract Status',
      path: paths.status,
      icon: <SiStatuspal />,
    },
    {
      label: 'Import',
      path: paths.importCollection,
      icon: <CiImport />,
    },
    {
      label: 'Contract Metadata',
      path: paths.viewMetaData,
      icon: <VscJson />,
    },
    {
      label: 'Media',
      path: '',
      icon: <AiOutlineCloudUpload />,
      subMenu: [
        {
          label: 'Collection',
          path: paths.collectionImage,
          icon: <HiOutlineCollection />,
        },
        {
          label: 'Token',
          path: paths.tokenImage,
          icon: <GiToken />,
        },
      ],
    },
    {
      label: 'Count Checker',
      path: '',
      icon: <RiArrowDropDownLine />,
      subMenu: [
        {
          label: 'Floor Price',
          path: paths.floorPrices,
          icon: <IoPricetagsOutline />,
        },
        {
          label: 'Token Count',
          path: paths.tokenCount,
          icon: <IoIosGitCompare />,
        },
        {
          label: 'Owner Count',
          path: paths.ownerCounts,
          icon: <IoIosGitCompare />,
        },
        {
          label: 'Sales Count',
          path: paths.salesCount,
          icon: <FcSalesPerformance />,
        },
      ],
    },
  ];

  const isMobile = width < 768;

  const closeNav = () => {
    if (listRef.current) {
      listRef.current.classList.remove('top-[10px]');
      listRef.current.classList.add('top-[-150px]');
      listRef.current.classList.remove('max-xs:opacity-1');
      listRef.current.classList.add('max-xs:opacity-0');
    }
    setIsMenuOpen(false);
  };

  const openNav = () => {
    if (listRef.current) {
      listRef.current.classList.remove('top-[-150px]');
      listRef.current.classList.add('top-[10px]');
      listRef.current.classList.remove('max-xs:opacity-0');
      listRef.current.classList.add('max-xs:opacity-1');
      setIsMenuOpen(true);
    }
  };

  const handleClickOutside = () => {
    closeNav();
  };

  useOnClickOutside(listRef, handleClickOutside);

  return (
    <Box
      sx={{
        padding: '15px 30px',
        borderColor: '#282836',
        borderStyle: 'solid',
        borderWidth: '0px 0px .5px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'primary.contrastText',
        alignItems: 'center',

        '@media (max-width: 768px)': {
          padding: '15px 10px',
        },

        '@media (max-width: 490px)': {
          alignItems: 'flex-start',
          flexDirection: 'column',
        },
      }}
    >
      <div className="max-xs:flex max-xs:items-center max-xs:justify-between max-xs:w-[95%]">
        <Link href={paths.home}>
          <Logo width={isMobile ? 100 : 201} />
        </Link>
        <div className="max-xs:block hidden">
          {!isMenuOpen ? (
            <IoMenuOutline onClick={openNav} />
          ) : (
            <AiOutlineClose onClick={closeNav} />
          )}
        </div>
      </div>
      <div
        ref={listRef}
        className="xs:flex z-10 xs:static absolute max-xs:grey-300 max-xs:mt-14 max-xs:bg-grey-300 max-xs:w-[93%] transition-all ease-in duration-500 max-xs:opacity-0 top-[-150px]"
      >
        {links.map((link) => (
          <NavMenuItem
            icon={link.icon}
            label={link.label}
            path={link.path}
            subMenu={link.subMenu}
            key={link.label}
          />
        ))}
      </div>
    </Box>
  );
};

export default NavBar;
