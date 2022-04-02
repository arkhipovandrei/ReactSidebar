import {VFC} from "react";
import style from '../../../../assets/style.module.scss';
import IMenuLink from "../../types/IMenuLink";
import SidebarMenuLink from "./SidebarMenuLink";

interface ISidebarMenuLinksProps {
  menuLinks: IMenuLink[]
}

const SidebarMenuLinks: VFC<ISidebarMenuLinksProps> = ({menuLinks}) => {
  return <ul className={style.MenuLinks}>
    {menuLinks?.map(menuLink => <SidebarMenuLink menuLink={menuLink}/>)}
  </ul>

}

export default SidebarMenuLinks;
