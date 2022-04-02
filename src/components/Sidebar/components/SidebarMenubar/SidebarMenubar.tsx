import style from '../../assets/style.module.scss';
import SearchBox from "./components/SearchBox/SearchBox";
import SidebarMenuLinks from "./components/SidebarMenuLinks/SidebarMenuLinks";
import {useContext} from "react";
import SidebarBottom from "./components/SidebarBottom/SidebarBottom";
import SidebarContext from "../../SideBarContext";

const SidebarMenubar = () => {

  const {menuLinks} = useContext(SidebarContext)

  return <div className={style.SidebarMenubar}>
    <div className={style.SidebarMenu}>
      <SearchBox/>
      <SidebarMenuLinks menuLinks={menuLinks}/>
    </div>
    <SidebarBottom/>
  </div>
}

export default SidebarMenubar;
