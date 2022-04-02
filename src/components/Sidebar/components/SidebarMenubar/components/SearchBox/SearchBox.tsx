import style from '../../../../assets/style.module.scss';
import classNames from "classnames";
import {BiSearch} from "react-icons/bi";

const SearchBox = () => {

  return <li className={style.SearchBox}>

    <span className={classNames(style.SidebarIcon)} >
      <BiSearch />
    </span>
    <input type="text" placeholder="Search..."/>

  </li>
}

export default SearchBox;
