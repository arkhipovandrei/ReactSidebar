import style from '../../assets/style.module.scss';
import {BiLogOut, BiMoon, BiSun} from "react-icons/bi";
import classNames from "classnames";
import SearchBox from "./components/SearchBox/SearchBox";
import SidebarMenuLinks from "./components/SidebarMenuLinks/SidebarMenuLinks";
import {useContext} from "react";
import {SideBarContext} from "../../Sidebar";

const SidebarMenubar = () => {

  const {menuLinks} = useContext(SideBarContext)

  return <div className={style.SidebarMenubar}>

    <div className={style.SidebarMenu}>

      <SearchBox/>
      <SidebarMenuLinks menuLinks={menuLinks}/>

    </div>

    <div className={style.SidebarBottomContent}>

      <li className={style.NavLink}>
        <a href="#">
          <span className={style.SidebarIcon}>
            <BiLogOut/>
          </span>
          <span className={style.SidebarText}>
            Logout
          </span>
        </a>
      </li>

      <li className={style.SidebarMode}>
        <div className={style.SidebarSunMon}>
          <span className={classNames(style.Moon, style.SidebarIcon)}>
            <BiMoon/>
          </span>
          <span className={classNames(style.Sun, style.SidebarIcon)}>
            <BiSun/>
          </span>
        </div>

        <span className={classNames(style.ModeText, style.SidebarText)}>
          Dark mode
        </span>

        <div className={style.ToggleSwitch}>
          <span className={style.Switch}/>
        </div>

      </li>

    </div>

  </div>
}

export default SidebarMenubar;
