import {VFC} from "react";
import style from "../../assets/style.module.scss";
import logo from "../../assets/logo.svg";
import classNames from "classnames";

interface ISidebarBrandProps {
  name: string;
  profession?: string;
}

const SidebarBrand: VFC<ISidebarBrandProps> = (props) => {

  const {
    name,
    profession
  } = props;

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

export default SidebarBrand;
