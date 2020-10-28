import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'บทที่ 1 Basic Computing',
    path: '/commath-project/page1',
    icon: <AiIcons.AiFillCaretRight/>,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 2 Linear Equations',
    path: '/commath-project/page2',
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 3 Interpolation',
    path: '/commath-project/page3',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 4 Differentiation',
    path: '/commath-project/page4',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 5 Integration',
    path: '/commath-project/page5',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 6 Root-finding',
    path: '/commath-project/page6',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
