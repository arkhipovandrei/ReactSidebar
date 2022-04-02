import style from './assets/style.module.scss';
import classNames from 'classnames';
import {BiBarChartAlt2, BiBell, BiChevronRight, BiHomeAlt, BiPieChartAlt} from "react-icons/bi";

import {createContext, useState} from "react";
import SidebarBrand from "./components/SidebarBrand/SidebarBrand";
import SidebarMenubar from "./components/SidebarMenubar/SidebarMenubar";
import IMenuLink from "./components/SidebarMenubar/types/IMenuLink";

const menuLinks = [
  {icon: BiHomeAlt, text: 'Dashboard'},
  {icon: BiBarChartAlt2, text: 'Revenue'},
  {icon: BiBell, text: 'Notifications'},
  {icon: BiPieChartAlt, text: 'Analytics'},
]

export const SideBarContext = createContext<{
  menuLinks: IMenuLink[];
  isClosed: boolean;
  openSideBar: () => void

}>({
  menuLinks: [],
  isClosed: false,
  openSideBar: () => {}
});

const Sidebar = () => {

  const [isClosed, setIsClosed] = useState(false);

  const toggleIsClosed = () => {
    setIsClosed(prevState => !prevState);
  }

  const openSideBar = () =>{
    setIsClosed(false);
  }

  return <>
    <SideBarContext.Provider value={{
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
    </SideBarContext.Provider>

  </>
}

export default Sidebar;

