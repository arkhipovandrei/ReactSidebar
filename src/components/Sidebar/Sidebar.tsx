import style from './assets/style.module.scss';
import classNames from 'classnames';
import {BiChevronRight} from "react-icons/bi";

import {useState} from "react";
import SidebarBrand from "./components/SidebarBrand/SidebarBrand";
import SidebarMenubar from "./components/SidebarMenubar/SidebarMenubar";
import SidebarContext from './SideBarContext';
import { menuLinks } from './menuLinks';


const Sidebar = () => {

  const [isClosed, setIsClosed] = useState(false);

  const toggleIsClosed = () => {
    setIsClosed(prevState => !prevState);
  }

  const openSideBar = () =>{
    setIsClosed(false);
  }

  return <>
    <SidebarContext.Provider value={{
      menuLinks,
      isClosed,
      openSideBar
    }}>

    <nav className={classNames(style.Sidebar, {[style.SidebarClose]: isClosed})}>

      <header>

        <SidebarBrand
          name={"React js"}
          profession={"Sidebar"}
        />

        <BiChevronRight onClick={toggleIsClosed} className={style.SidebarToggle}/>
      </header>

      <SidebarMenubar />

    </nav>

    </SidebarContext.Provider>

  </>
}

export default Sidebar;

