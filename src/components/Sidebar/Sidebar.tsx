import logo from './assets/logo.svg';
import style from './assets/style.module.scss';
import classNames from 'classnames';
import {
  BiChevronRight,
  BiSearch,
  BiHomeAlt,
  BiBarChartAlt2,
  BiBell,
  BiPieChartAlt,
  BiLogOut,
  BiMoon,
  BiSun
} from "react-icons/bi";

import {useState, VFC, createElement} from "react";


const menuLinks = [
  {icon: BiHomeAlt, text: 'Dashboard'},
  {icon: BiBarChartAlt2, text: 'Revenue'},
  {icon: BiBell, text: 'Notifications'},
  {icon: BiPieChartAlt, text: 'Analytics'},


]

const Sidebar = () => {

  const [isClosed, setIsClosed] = useState(false);

  const toggleIsClosed = () => {
    setIsClosed(prevState => !prevState);
  }


  return <nav className={classNames(style.Sidebar, {[style.SidebarClose]: isClosed})}>

    <header>

      <SidebarBrand
        name={"React js"}
        profession={"Sidebar"}
      />

      <BiChevronRight onClick={toggleIsClosed} className={style.SidebarToggle}/>
    </header>

    <SidebarMenubar/>

  </nav>
}

export default Sidebar;

interface ISidebarBrandProps {
  name: string;
  profession?: string;
}

const SidebarBrand: VFC<ISidebarBrandProps> = ({name, profession}) => {

  return <div className={style.SidebarBrand}>

    <span className={style.SidebarBrandImage}>
        <img src={logo} alt={name}/>
    </span>

    <div className={classNames(style.SidebarText, style.SidebarBrandLogoText)}>
      <span className={style.SidebarBrandName}>
        {name}
      </span>
      {profession && <span className={style.SidebarBrandProfession}>
        {profession}
      </span>}
    </div>
  </div>

}

const SidebarMenubar = () => {

  return <div className={style.SidebarMenubar}>

    <div className={style.SidebarMenu}>

      <SearchBox/>

      <SidebarMenuLinks
        menuLinks={menuLinks}
      />

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


const SearchBox = () => {

  return <li className={style.SearchBox}>

    <span className={classNames(style.SidebarIcon)} >
      <BiSearch />
    </span>
    <input type="text" placeholder="Search..."/>

  </li>
}


interface MenuLink {
  icon: any;
  text: string;
  url?: string;
}

interface ISidebarMenuLinksProps {
  menuLinks: MenuLink[]
}

const SidebarMenuLinks: VFC<ISidebarMenuLinksProps> = ({menuLinks}) => {

  return <ul className={style.MenuLinks}>
    {menuLinks?.map(menuLink => <SidebarMenuLink menuLink={menuLink}/>)}
  </ul>

}

const SidebarMenuLink: VFC<{ menuLink: MenuLink }> = (props) => {

  const {
    menuLink
  } = props;

  const icon = createElement(menuLink.icon, {})

  return <li className={style.NavLink}>
    <a href={menuLink.url}>
      <span className={style.SidebarIcon}>
        {icon}
      </span>
      <span className={classNames(style.SidebarText)}>
        {menuLink.text}
      </span>
    </a>
  </li>
}
