import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './main.css';
import { IconContext } from 'react-icons';



function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [linkk, setlinkk] = useState(`/commath-project/${window.location.href.split('/')[4]}`)
  console.log(window.location.href.split('/'))

  const showSidebar = () => setSidebar(!sidebar);
  const test =(value)=>{
    setlinkk(value)
    console.log("id",linkk)
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar }/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={e => test(item.path)}>
                  <Link to={item.path}>
                    {linkk == item.path ?<AiIcons.AiFillCaretRight/>:null}
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
