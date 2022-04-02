import {createElement, VFC} from "react";
import style from '../../../../assets/style.module.scss';
import classNames from "classnames";
import IMenuLink from "../../types/IMenuLink";

const SidebarMenuLink: VFC<{ menuLink: IMenuLink }> = (props) => {

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

export default SidebarMenuLink;
