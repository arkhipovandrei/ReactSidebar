import style from "../../../../assets/style.module.scss";
import {BiLogOut, BiMoon, BiSun} from "react-icons/bi";
import classNames from "classnames";
import {useEffect, useState} from "react";

const SidebarBottom = () => {

  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => setIsDark(prevState => !prevState);

  useEffect(() => {

    const body = document.querySelector('body');
    if(!body) return;

    if(isDark) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [isDark])


  return <div className={style.SidebarBottomContent}>

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
        {isDark ? 'Light mode' : 'Dark mode'}
      </span>

      <div className={style.ToggleSwitch} onClick={toggleMode}>
        <span className={style.Switch}/>
      </div>

    </li>

  </div>
}

export default SidebarBottom;
