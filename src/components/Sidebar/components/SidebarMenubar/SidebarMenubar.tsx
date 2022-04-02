import style from '../../assets/style.module.scss';
import SearchBox from "./components/SearchBox/SearchBox";
import SidebarMenuLinks from "./components/SidebarMenuLinks/SidebarMenuLinks";
import {useContext} from "react";
import {SideBarContext} from "../../Sidebar";
import SidebarBottom from "./components/SidebarBottom/SidebarBottom";

const SidebarMenubar = () => {

  const {menuLinks} = useContext(SideBarContext)

  return <div className={style.SidebarMenubar}>
    <div className={style.SidebarMenu}>
      <SearchBox/>
      <SidebarMenuLinks menuLinks={menuLinks}/>
    </div>
    <SidebarBottom/>
  </div>
}

export default SidebarMenubar;
